const PlaylistLabel = ({ label }: { label: string }) => {
  return (
    <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
      {label}
    </a>
  );
};

export default PlaylistLabel;
