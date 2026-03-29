import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import BottomNav from "./BottomNav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const hideNav = pathname === "/darshan";
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="flex flex-col h-full bg-background relative">
      <div ref={scrollRef} className="flex-1 overflow-y-auto" style={{ paddingBottom: hideNav ? 0 : 72, overflowX: "clip" }}>
        {children}
      </div>
      {!hideNav && <BottomNav />}
    </div>
  );
}
