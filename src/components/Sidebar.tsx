import { HomeIcon, Search, Library, Bookmark, Plus, Heart } from "lucide-react";
import PlaylistLabel from "./PlaylistLabel";
import OptionsSidebar from "./OptionsSidebar";

const Sidebar = () => {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <nav className="space-y-5 mt-10">
        <OptionsSidebar>
          <HomeIcon />
          Home
        </OptionsSidebar>
        <OptionsSidebar>
          <Search />
          Search
        </OptionsSidebar>
        <OptionsSidebar>
          <Library />
          Your Library
        </OptionsSidebar>
      </nav>

      <nav className="space-y-5 mt-10">
        <OptionsSidebar>
          <div className="p-1 bg-zinc-300 text-black">
            <Plus />
          </div>
          Create Playlist
        </OptionsSidebar>
        <OptionsSidebar>
          <div className="p-1 bg-blue-300 text-black">
            <Heart />
          </div>
          Liked Songs
        </OptionsSidebar>
        <OptionsSidebar>
          <div className="p-1 bg-green-300 text-black ">
            <Bookmark />
          </div>
          Your Episodes
        </OptionsSidebar>
      </nav>
      <nav className="mt-10 pt-10 border-t-2 border-zinc-800 flex flex-col gap-3">
        <PlaylistLabel label="Audio Adventure" />
        <PlaylistLabel label="Groove Station" />
        <PlaylistLabel label="Mixtape Master" />
        <PlaylistLabel label="Beat Boulevard" />
        <PlaylistLabel label="Harmony Highway" />
        <PlaylistLabel label="Jam Junction" />
        <PlaylistLabel label="Sonic Soiree" />
        <PlaylistLabel label="Playlist Paradise" />
      </nav>
    </aside>
  );
};

export default Sidebar;
