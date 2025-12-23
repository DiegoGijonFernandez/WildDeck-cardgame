import { Outlet } from "react-router-dom";
import { TopBar } from "./TopBar";

export const SimpleLayout = () => {
  return (
    <div className="h-screen flex flex-col bg-background text-white">
      <TopBar />
      <main className="flex-1 overflow-y-auto min-h-0">
        <Outlet />
      </main>
    </div>
  );
};
