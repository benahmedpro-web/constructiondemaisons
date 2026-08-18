import { NextRequest, NextResponse } from "next/server";

// In-memory rate limiter — protects API routes against spam/abuse.
// State is shared within a serverless function instance; across cold starts
// the counter resets (acceptable for a low-traffic site without Redis).
const rateMap = new Map<string, { count: number; reset: number }>();
const LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

function getIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  if (rateMap.size > 5000) {
    // Periodic cleanup to avoid unbounded memory growth
    for (const [k, v] of rateMap) {
      if (now > v.reset) rateMap.delete(k);
    }
  }
  return entry.count > LIMIT;
}

export function proxy(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/api/")) {
    const ip = getIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Trop de requêtes. Réessayez dans une heure." },
        { status: 429 }
      );
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
