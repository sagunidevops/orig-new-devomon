
export function CallistoStory() {
  return (
    <section className="py-16 bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">
            A World in the Shadow of Stars
          </h2>
          
          <div className="space-y-6 text-base text-gray-300 leading-relaxed">
            <p>
              In <span className="text-primary font-semibold">Devomon: Callisto</span> you are thrown into a dark fantasy world 
              where ancient forces watch over fate – and play with it.
            </p>
            
            <p>
              As the balance between human and Evomon threatens to tip, a journey begins through intrigue, 
              lost bonds and a mysterious plague that changes the world.
            </p>
            
            <div className="py-8">
              <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8"></div>
              
              <p className="text-base text-white font-medium mb-4">
                Discover a story about connection, betrayal and the fight against the unknown.
              </p>
              
              <div className="space-y-3 text-gray-400">
                <p>The question is not whether you are strong enough.</p>
                <p className="text-primary font-semibold">
                  But – whom you can really trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}