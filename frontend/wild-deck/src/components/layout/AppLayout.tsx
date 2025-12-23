import { Outlet } from "react-router-dom";
import { TopBar } from "./TopBar";
import { FiltersProvider } from "../../context/FiltersContext";
import { Sidebar } from "./Sidebar";

export const AppLayout = () => {
  return (
    <FiltersProvider>
      {/* Layout raíz: no scrollea */}
      <div className="h-screen flex flex-col bg-background text-white overflow-hidden">
        {/* TOPBAR fija */}
        <TopBar />

        {/* Zona central */}
        <div className="flex flex-1 overflow-hidden">
          {/* SIDEBAR fija */}
          <Sidebar />

          {/* CONTENIDO: SOLO AQUÍ HAY SCROLL */}
          <main className="flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </FiltersProvider>
  );
};
