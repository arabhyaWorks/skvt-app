import { useLocation } from "react-router-dom";
import BottomNav from "./BottomNav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const hideNav = pathname === "/darshan";
  return (
    <div className="flex flex-col h-full bg-background relative">
      <div className="flex-1 overflow-y-auto" style={{ paddingBottom: hideNav ? 0 : 72, overflowX: "clip" }}>
        {children}
      </div>
      {!hideNav && <BottomNav />}
    </div>
  );
}
