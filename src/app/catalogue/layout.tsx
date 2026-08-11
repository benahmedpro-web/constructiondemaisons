import { HeaderTerrain } from "@/components/HeaderTerrain";

export default function CatalogueLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderTerrain />
      {children}
    </>
  );
}
