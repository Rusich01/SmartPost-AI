const Loader = () => {
  return (
    <div className="min-h-screen bg-(--main-bg) flex items-center justify-center">
      <div className="relative">
        <div className="w-24 h-24 rounded-full border-4 border-zinc-800" />
        <div className="absolute inset-0 w-24 h-24 rounded-full border-4 border-transparent border-t-green-500 animate-spin" />
      </div>
    </div>
  );
};

export default Loader;
