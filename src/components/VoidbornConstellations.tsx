
export function VoidbornConstellations() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] -translate-x-1/2 bg-purple-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gray-500/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-3xl font-bold mb-8 leading-tight">
            <span className="text-purple-400">
              The Constellations
            </span>
          </h2>
          <p className="text-base text-gray-300 leading-relaxed">
            Ancient celestial intelligences that observe, choose, and gamble with mortal lives.
          </p>
        </div>

        {/* What Are They - Asymmetric Layout */}
        <div className="max-w-7xl mx-auto mb-24">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-8 text-gray-200">
                What Are They?
              </h3>
              <div className="space-y-6">
                <p className="text-base text-gray-300 leading-relaxed">
                  The Constellations are ancient celestial intelligences—beings once revered as divine.
                </p>
                <p className="text-base text-gray-300 leading-relaxed">
                  Each Constellation is a fragment of a greater myth—embodied as thought, desire, obsession, or hunger given form.
                </p>
                <p className="text-base text-gray-300 leading-relaxed">
                  <span className="text-purple-400 font-medium">Worship did not birth them. Worship fed them.</span>
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-3 space-y-12">
              {/* Truth 1 */}
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-white to-transparent"></div>
                <h4 className="text-2xl font-bold text-white mb-4">They Do Not Create</h4>
                <p className="text-base text-gray-300 leading-relaxed">
                  The Constellations are parasites of creation, feeding on the struggles and suffering of mortals.
                </p>
              </div>
              
              {/* Truth 2 */}
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-white to-transparent"></div>
                <h4 className="text-2xl font-bold text-white mb-4">They Do Not Love</h4>
                <p className="text-base text-gray-300 leading-relaxed">
                  Mortals are nothing more than entertainment, pieces in an eternal game of divine amusement.
                </p>
              </div>
              
              {/* Truth 3 */}
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-white to-transparent"></div>
                <h4 className="text-2xl font-bold text-white mb-4">They Do Not Lead</h4>
                <p className="text-base text-gray-300 leading-relaxed">
                  Their guidance is manipulation, their blessings are chains, their silence is deliberate cruelty.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Statement */}
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-xl font-bold text-purple-400 leading-relaxed">
            &quot;To defeat gods, one must become what they never anticipated: 
            <br />a creature without fate.&quot;
          </blockquote>
        </div>
      </div>
    </section>
  );
}