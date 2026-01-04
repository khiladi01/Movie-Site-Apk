import video from "../assets/video/Chhaava.mp4";

function TVPage() {
  return (
    <div className="pt-25 min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold">
          Watch on <span className="text-red-500">Cineflow</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Big screen Deep blacks Stories start now
        </p>
      </div>

      {/* TV Frame */}
      <div className="relative w-full max-w-6xl">
        {/* Outer TV Body */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-6 shadow-[0_0_80px_rgba(255,0,0,0.15)]">
          {/* Screen */}
          <div className="relative bg-black rounded-2xl overflow-hidden aspect-video border border-zinc-700">
            {/* Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full">
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full"
                />
                <div className="w-14 h-14 mx-auto rounded-full border-2 border-red-500 flex items-center justify-center">
                  ▶
                </div>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.9)]" />
          </div>
        </div>

        {/* TV Stand */}
        <div className="flex justify-center mt-6">
          <div className="w-40 h-4 bg-zinc-800 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default TVPage;
