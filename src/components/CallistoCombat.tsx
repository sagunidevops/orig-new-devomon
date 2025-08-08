
export function CallistoCombat() {
  const combatFeatures = [
    {
      title: "Team-basiertes Combat",
      description: "Kontrolliere jeden Charakter direkt und wechsle nahtlos zwischen Teammitgliedern für taktische Vorteile."
    },
    {
      title: "Elemental Synergies", 
      description: "Kombiniere verschiedene Elemente für verheerende Combo-Angriffe und strategische Buffs."
    },
    {
      title: "Evomon Evolutionen",
      description: "Entwickle deine Evomon durch Level-Fortschritt und spezielle Items zu mächtigeren Formen weiter."
    },
    {
      title: "Charakter Awakenings",
      description: "Schalte neue Fähigkeiten für Menschen-Charaktere durch Level- und Item-basierte Erweckungen frei."
    }
  ];

  const gameplaySystems = [
    {
      title: "Hauptstory Campaign",
      description: "Folge der epischen Hauptgeschichte durch die düstere Welt von Callisto."
    },
    {
      title: "Evomon Lore Quests", 
      description: "Entdecke die tiefen Geheimnisse einzelner Evomon durch spezielle Nebenstorys."
    },
    {
      title: "Daily Tasks & Farming",
      description: "Sammle Ressourcen, erfülle tägliche Aufgaben und optimiere dein Team kontinuierlich."
    },
    {
      title: "PvE & PvP Content",
      description: "Herausfordernde Dungeons, Raids und kompetitive Modi für alle Spielertypen."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4">
        {/* Combat Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Strategisches Action-Combat
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Taktische Tiefe trifft auf blitzschnelle Action. Jeder Kampf erfordert Strategie, Timing und Teamwork.
          </p>
        </div>

        {/* Combat Features */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {combatFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 p-6 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-white mb-3 hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-12"></div>

        {/* Gameplay Systems */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Gameplay Systeme
          </h3>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Vielfältige Inhalte und Progression-Systeme für langanhaltenden Spielspaß.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {gameplaySystems.map((system, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-sm border border-gray-800 hover:border-primary/30 transition-all duration-300 p-6 rounded-lg"
            >
              <h4 className="text-base font-semibold text-white mb-3 hover:text-primary transition-colors">
                {system.title}
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {system.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}