import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";

const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const Souvenir = lazy(() => import("@/pages/Souvenir"));
const Profile = lazy(() => import("@/pages/Profile"));
const Darshan = lazy(() => import("@/pages/Darshan"));
const Tickets = lazy(() => import("@/pages/Tickets"));

const Loader = () => (
  <div className="flex-1 flex items-center justify-center bg-background h-full">
    <div className="w-8 h-8 rounded-full border-4 border-temple-gold border-t-transparent animate-spin" />
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/souvenir" element={<Souvenir />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/darshan" element={<Darshan />} />
            <Route path="/tickets" element={<Tickets />} />
          </Routes>
        </Suspense>
      </AppLayout>
    </BrowserRouter>
  );
}
