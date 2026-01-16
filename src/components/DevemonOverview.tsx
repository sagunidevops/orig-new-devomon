export function DevemonOverview() {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-secondary/30 relative overflow-hidden">
      {/* Gaming background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/15 via-transparent to-accent/15"></div>
        {/* Gaming grid pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Lore Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            The Devomon Universe
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base text-gray-200 mb-4 leading-relaxed">
              Devomon is a creative universe designed to give rise to many worlds, stories, and experiences.
            </p>
            <p className="text-base text-gray-200 mb-4 leading-relaxed">
              It is not defined by a single format or medium, but by the depth, flexibility, and imagination behind it.
            </p>
            <p className="text-base text-gray-200 leading-relaxed">
              Devomon is built to grow, evolve, and take new shapes over time — as new ideas and creations emerge from it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
