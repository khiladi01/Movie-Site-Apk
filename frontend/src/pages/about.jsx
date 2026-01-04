function About() {
  return (
    <div className="pt-25 min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          About <span className="text-red-500">Cineflow</span>
        </h1>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-14">
          Where stories move, emotions flow, and cinema never sleeps
        </p>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              More Than a Movie Platform
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cineflow is a modern movie discovery platform built for true film
              lovers. From timeless classics to trending blockbusters, we bring
              everything under one roof fast, smooth, and beautifully
              organized.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This platform is crafted using the MERN stack with performance and
              scalability in mind. Every feature, every screen, and every flow
              is designed to give users a seamless cinematic experience.
            </p>
          </div>

          {/* Highlight Box */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-red-500">
              What Cineflow Offers
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>🎬 Explore movies with rich details</li>
              <li>⚡ Fast and responsive UI</li>
              <li>🧠 Smart admin control for content</li>
              <li>🔐 Secure and scalable backend</li>
              <li>🌐 Built for real-world production use</li>
            </ul>
          </div>

        </div>

        {/* Footer Quote */}
        <div className="mt-16 text-center">
          <p className="italic text-gray-400">
            Cinema is not just entertainment it’s an emotion that flows through
            our veins
          </p>
          <p className="mt-2 text-sm text-gray-500">
            — Team Cineflow
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;
