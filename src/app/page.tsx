import {
  Home as HomeIcon,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Playlist from "@/components/Playlist";
import Daily from "@/components/Daily";

export default function Home() {
  return (
    <main>
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6">
            <div className="flex items-center gap-4">
              <button className="rounded-full bg-black/40 p-1">
                <ChevronLeft />
              </button>
              <button className="rounded-full bg-black/40 p-1">
                <ChevronRight />
              </button>
            </div>

            <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

            <Playlist />

            <h2 className="font-semibold text-2xl mt-10">
              Made For João Xavier
            </h2>

            <Daily />
          </main>
        </div>
        <Footer />
      </div>
    </main>
  );
}
