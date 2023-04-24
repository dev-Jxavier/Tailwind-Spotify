import React from "react";

const OptionsSidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <a
      href="#"
      className="flex items-center gap-3 text-xs font-semibold text-zinc-400 hover:text-zinc-200 transition-colors"
    >
      {children}
    </a>
  );
};

export default OptionsSidebar;
