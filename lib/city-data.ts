export interface City {
  name: string;
  slug: string;
  description: string;
  fullDescription: string;
  implementationDate: string;
  restrictions: string;
  importantNotes?: string;
  subtitle?: string;
  visitorInfo?: string;
  attractions?: string[];
}

export const cities: City[] = [
  {
    name: "Berlin",
    slug: "berlin",
    description: "Deutschlands größte Stadt mit strenger Umweltzone seit 2008.",
    fullDescription: "Berlin war eine der ersten Städte in Deutschland, die eine Umweltzone eingeführt hat. Die Umweltzone umfasst den gesamten Bereich innerhalb des S-Bahn-Rings und ist eine der größten Umweltzonen Deutschlands.",
    implementationDate: "Seit 1. Januar 2008, grüne Plakette Pflicht seit 1. Januar 2010",
    restrictions: "In der gesamten Umweltzone ist nur die grüne Umweltplakette (Schadstoffgruppe 4) erlaubt.",
    importantNotes: "Die Berliner Umweltzone umfasst das gesamte Gebiet innerhalb des S-Bahn-Rings. Achten Sie auf die entsprechenden Verkehrsschilder an den Eingangspunkten zur Umweltzone.",
    subtitle: "Kompletní informace o nízkoemisních zónách v Berlíně a jak získat ekologickou známku pro vjezd do metropole",
    visitorInfo: "Berlin als Hauptstadt Deutschlands ist ein beliebtes Reiseziel. Die Umweltzone gilt für das gesamte Innenstadtgebiet innerhalb des S-Bahn-Rings. Öffentliche Verkehrsmittel sind ausgezeichnet ausgebaut. Parken Sie am besten außerhalb der Umweltzone und nutzen Sie die S-Bahn, U-Bahn oder Busse.",
    attractions: ["Brandenburger Tor", "Reichstag und Bundestag", "Museumsinsel", "East Side Gallery", "Schloss Charlottenburg"]
  },
  {
    name: "München",
    slug: "muenchen",
    description: "Bayerns Hauptstadt mit Umweltzone im gesamten Stadtgebiet innerhalb des Mittleren Rings.",
    fullDescription: "Die Münchner Umweltzone umfasst das gesamte Stadtgebiet innerhalb des Mittleren Rings (Ringstraße B2R). Als eine der größten Umweltzonen in Bayern ist sie ein wichtiger Bestandteil der Städtepolitik zur Reduzierung der Luftverschmutzung.",
    implementationDate: "Seit 1. Oktober 2008, grüne Plakette Pflicht seit 1. Oktober 2012",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Der Mittlere Ring selbst gehört nicht zur Umweltzone und kann ohne Plakette befahren werden.",
    subtitle: "Umweltzone München - Grüne Plakette für Bayerns Hauptstadt und Oktoberfest-Metropole",
    visitorInfo: "München ist die bayerische Hauptstadt und ein beliebtes Touristenziel. Die Umweltzone umfasst die Innenstadt und wichtige Sehenswürdigkeiten. Das öffentliche Verkehrsnetz (MVV) ist sehr gut ausgebaut. Während des Oktoberfests sind besonders strenge Kontrollen zu erwarten.",
    attractions: ["Marienplatz mit Glockenspiel", "Oktoberfest (Theresienwiese)", "Frauenkirche", "Englischer Garten", "Deutsches Museum"]
  },
  {
    name: "Köln",
    slug: "koeln",
    description: "Umweltzone im gesamten Stadtgebiet innerhalb des Kölner Autobahnrings.",
    fullDescription: "Die Kölner Umweltzone erstreckt sich über das gesamte Stadtgebiet innerhalb des Autobahnrings. Als Teil der größeren Umweltzone Rhein-Ruhr ist sie eine der umfangreichsten Maßnahmen zur Luftreinhaltung in Nordrhein-Westfalen.",
    implementationDate: "Seit 1. Januar 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind zugelassen.",
    importantNotes: "Die Kölner Umweltzone ist Teil der größeren Umweltzone Rhein-Ruhr, die mehrere Städte im Ruhrgebiet umfasst.",
    subtitle: "Köln Umweltzone - Grüne Plakette für die Domstadt am Rhein mit 2000-jähriger Geschichte",
    visitorInfo: "Köln ist eine der ältesten Städte Deutschlands und ein wichtiges Kulturzentrum. Die Umweltzone umfasst die gesamte Innenstadt inklusive Dom und Altstadt. Das öffentliche Verkehrsnetz (KVB) ist sehr gut ausgebaut. Parken Sie außerhalb der Umweltzone und nutzen Sie öffentliche Verkehrsmittel.",
    attractions: ["Kölner Dom", "Römisch-Germanisches Museum", "Museum Ludwig", "Altstadt", "Rheinseilbahn"]
  },
  {
    name: "Stuttgart",
    slug: "stuttgart",
    description: "Strenge Umweltzone mit zusätzlichen Diesel-Fahrverboten in der Innenstadt.",
    fullDescription: "Stuttgart verfügt über eine der strengsten Umweltzonen in Deutschland. Neben der grünen Plakette gibt es seit 2019 auch Fahrverbote für ältere Dieselfahrzeuge in bestimmten Bereichen der Stadt.",
    implementationDate: "Seit 1. März 2008, zusätzliche Diesel-Fahrverbote seit 2019",
    restrictions: "Grüne Plakette (Schadstoffgruppe 4) erforderlich. Zusätzlich gelten in Teilen der Stadt Fahrverbote für Dieselfahrzeuge unter Euro 5.",
    importantNotes: "Stuttgart hat aufgrund seiner Kessellage besondere Luftqualitätsprobleme und daher strengere Regelungen als viele andere Städte.",
    subtitle: "Stuttgart Umweltzone - Strenge Regelungen für Fahrzeuge in der Automobilstadt",
    visitorInfo: "Stuttgart ist das Zentrum der deutschen Automobilindustrie und hat aufgrund seiner Kessellage besondere Luftqualitätsprobleme. Neben der grünen Plakette gelten zusätzliche Diesel-Fahrverbote. Nutzen Sie bevorzugt öffentliche Verkehrsmittel (VVS) oder parken Sie außerhalb der Stadt.",
    attractions: ["Mercedes-Benz Museum", "Porsche Museum", "Staatsoper Stuttgart", "Wilhelma Zoo", "Fernsehturm Stuttgart"]
  },
  {
    name: "Hamburg",
    slug: "hamburg",
    description: "Hansestadt mit mehreren Umweltzonen in den Bezirken.",
    fullDescription: "Hamburg hat mehrere Umweltzonen in verschiedenen Stadtbezirken eingerichtet. Die Umweltzonen befinden sich in den Bezirken Altona und Hamburg-Mitte und umfassen wichtige Verkehrsrouten der Hansestadt.",
    implementationDate: "Seit 1. März 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzonen einfahren.",
    importantNotes: "Hamburg hat zwei getrennte Umweltzonen in verschiedenen Stadtbezirken.",
    subtitle: "Hamburg Umweltzone - Grüne Plakette für die Hansestadt und das Tor zur Welt",
    visitorInfo: "Hamburg ist Deutschlands zweitgrößte Stadt und wichtigster Seehafen. Die Stadt hat zwei getrennte Umweltzonen in Altona und Hamburg-Mitte. Das HVV-Verkehrsnetz ist exzellent ausgebaut. Viele Sehenswürdigkeiten sind gut mit öffentlichen Verkehrsmitteln erreichbar.",
    attractions: ["Speicherstadt und HafenCity", "St. Pauli und Reeperbahn", "Elbphilharmonie", "Miniatur Wunderland", "Fischmarkt"]
  },
  {
    name: "Düsseldorf",
    slug: "duesseldorf",
    description: "Die Landeshauptstadt von NRW mit weiträumiger Umweltzone.",
    fullDescription: "Die Düsselorfer Umweltzone wurde als Teil der Maßnahmen zur Verbesserung der Luftqualität im Rhein-Ruhr-Gebiet eingeführt. Sie umfasst große Teile des Stadtgebiets und trägt zur Reduzierung der Schadstoffbelastung bei.",
    implementationDate: "Seit 15. Februar 2009",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Die Düsselorfer Umweltzone ist Teil des größeren Umweltzonenverbunds in der Rhein-Ruhr-Region.",
    subtitle: "Düsseldorf Umweltzone - Grüne Plakette für die Modestadt und japanisches Zentrum Europas",
    visitorInfo: "Düsseldorf ist bekannt als Modestadt und japanisches Zentrum Europas. Die Umweltzone umfasst die Altstadt und das Geschäftszentrum. Das öffentliche Verkehrsnetz (Rheinbahn) ist gut ausgebaut. Königsallee und Altstadt sind gut zu Fuß erreichbar.",
    attractions: ["Königsallee", "Düsseldorfer Altstadt", "Rheinturm", "MedienHafen", "Japanisches Viertel"]
  },
  {
    name: "Frankfurt am Main",
    slug: "frankfurt",
    description: "Finanzmetropole mit Umweltzone im gesamten Stadtgebiet innerhalb der A5, A3 und A661.",
    fullDescription: "Die Frankfurter Umweltzone umfasst das gesamte Stadtgebiet innerhalb der Autobahnen A5, A3 und A661. Als wichtiger Finanz- und Verkehrsknotenpunkt in Deutschland war Frankfurt eine der frühen Städte, die Maßnahmen zur Verbesserung der Luftqualität ergriffen hat.",
    implementationDate: "Seit 1. Oktober 2008, grüne Plakette Pflicht seit 1. Januar 2012",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Die Autobahnen selbst gehören nicht zur Umweltzone und können ohne Plakette befahren werden."
  },
  {
    name: "Hannover",
    slug: "hannover",
    description: "Umweltzone im Stadtgebiet mit strengen Kontrollen besonders während Messezeiten.",
    fullDescription: "Die Hannoveraner Umweltzone wurde eingeführt, um die Luftqualität in der niedersaechsischen Landeshauptstadt zu verbessern. Besonders während der großen Messen wird die Einhaltung der Vorschriften streng kontrolliert.",
    implementationDate: "Seit 1. Januar 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Während großer Messen wie der Cebit oder Hannover Messe werden verstärkt Kontrollen durchgeführt."
  },
  {
    name: "Leipzig",
    slug: "leipzig",
    description: "Sächsische Großstadt mit Umweltzone im Stadtgebiet innerhalb des Autobahnrings.",
    fullDescription: "Die Leipziger Umweltzone wurde eingeführt, um die Luftqualität in der sächsischen Großstadt zu verbessern. Sie umfasst das Stadtgebiet innerhalb des Autobahnrings und ist eine wichtige Maßnahme zur Reduzierung der Feinstaubbelastung.",
    implementationDate: "Seit 1. März 2011",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Die Umweltzone umfasst etwa 62% des Stadtgebiets von Leipzig."
  },
  {
    name: "Dortmund",
    slug: "dortmund",
    description: "Teil der größten Umweltzone im Ruhrgebiet.",
    fullDescription: "Dortmund ist Teil der Umweltzone Ruhrgebiet, die sich über mehrere Städte erstreckt. Diese großflächige Umweltzone ist eine der wichtigsten Maßnahmen zur Luftreinhaltung in Nordrhein-Westfalen.",
    implementationDate: "Seit 15. Oktober 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind zugelassen.",
    importantNotes: "Die Umweltzone erstreckt sich über mehrere Städte im Ruhrgebiet."
  },
  {
    name: "Essen",
    slug: "essen",
    description: "Kulturhauptstadt 2010 mit großer Umweltzone im Ruhrgebiet.",
    fullDescription: "Essen ist Teil der großen Umweltzone Ruhrgebiet. Als ehemalige Kulturhauptstadt Europas 2010 setzt die Stadt auf nachhaltige Mobilität und Luftqualitätsverbesserung.",
    implementationDate: "Seit 15. Oktober 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Teil der großflächigen Umweltzone Ruhrgebiet mit mehreren Städten."
  },
  {
    name: "Bremen",
    slug: "bremen",
    description: "Hansestadt mit Umweltzone in der Innenstadt.",
    fullDescription: "Bremen hat eine Umweltzone in der Innenstadt eingerichtet, um die Luftqualität zu verbessern. Die Zone umfasst wichtige Bereiche der Bremer Innenstadt und wird streng überwacht.",
    implementationDate: "Seit 1. Januar 2009",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind zugelassen.",
    importantNotes: "Die Umweltzone konzentriert sich auf die Bremer Innenstadt."
  },
  {
    name: "Dresden",
    slug: "dresden",
    description: "Elbflorenz mit Umweltzone im Stadtgebiet.",
    fullDescription: "Dresden hat eine Umweltzone eingerichtet, um die Luftqualität in der sächsischen Landeshauptstadt zu verbessern. Die Zone umfasst wichtige Bereiche der Elbflorenz.",
    implementationDate: "Seit 1. März 2011",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Die Umweltzone trägt zum Schutz der historischen Altstadt bei."
  },
  {
    name: "Nürnberg",
    slug: "nuernberg",
    description: "Fränkische Metropole mit Umweltzone im Stadtgebiet.",
    fullDescription: "Nürnberg hat eine Umweltzone im Stadtgebiet eingerichtet. Als wichtige fränkische Metropole und Verkehrsknotenpunkt setzt die Stadt auf nachhaltige Mobilität.",
    implementationDate: "Seit 1. Februar 2010",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Die Umweltzone umfasst wichtige Bereiche der Nürnberger Innenstadt."
  },
  {
    name: "Duisburg",
    slug: "duisburg",
    description: "Größter Binnenhafen der Welt mit Umweltzone im Ruhrgebiet.",
    fullDescription: "Duisburg ist Teil der großen Umweltzone Ruhrgebiet. Als Stadt mit dem größten Binnenhafen der Welt ist sie ein wichtiger Logistikstandort und setzt auf saubere Mobilität.",
    implementationDate: "Seit 15. Oktober 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Teil der großflächigen Umweltzone Ruhrgebiet."
  },
  {
    name: "Bochum",
    slug: "bochum",
    description: "Universitätsstadt im Ruhrgebiet mit Umweltzone.",
    fullDescription: "Bochum ist Teil der großen Umweltzone Ruhrgebiet. Die Universitätsstadt setzt auf nachhaltige Mobilität und ist ein wichtiger Bildungsstandort im Ruhrgebiet.",
    implementationDate: "Seit 15. Oktober 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind zugelassen.",
    importantNotes: "Die Ruhr-Universität liegt innerhalb der Umweltzone."
  },
  {
    name: "Wuppertal",
    slug: "wuppertal",
    description: "Stadt der Schwebebahn mit Umweltzone.",
    fullDescription: "Wuppertal, bekannt für seine Schwebebahn, hat eine Umweltzone eingerichtet. Die Stadt im Bergischen Land setzt neben der historischen Schwebebahn auch auf moderne umweltfreundliche Mobilität.",
    implementationDate: "Seit 15. Oktober 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Die berühmte Wuppertaler Schwebebahn fährt über die Umweltzone hinweg."
  },
  {
    name: "Bielefeld",
    slug: "bielefeld",
    description: "Ostwestfälische Großstadt mit Umweltzone.",
    fullDescription: "Bielefeld hat eine Umweltzone in der Innenstadt eingerichtet. Die ostwestfälische Großstadt setzt auf nachhaltige Mobilität zur Verbesserung der Luftqualität.",
    implementationDate: "Seit 1. Januar 2013",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Die Umweltzone umfasst die Bielefelder Innenstadt."
  },
  {
    name: "Bonn",
    slug: "bonn",
    description: "Ehemalige Bundeshauptstadt mit Umweltzone.",
    fullDescription: "Bonn, die ehemalige Bundeshauptstadt, hat eine Umweltzone eingerichtet. Als UN-Stadt und wichtiger Bildungsstandort setzt Bonn auf nachhaltige Mobilität.",
    implementationDate: "Seit 1. Januar 2010",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Die Umweltzone umfasst wichtige Bereiche der ehemaligen Bundeshauptstadt."
  },
  {
    name: "Münster",
    slug: "muenster",
    description: "Fahrradstadt mit Umweltzone.",
    fullDescription: "Münster, bekannt als Fahrradstadt, hat eine Umweltzone eingerichtet. Die westfälische Stadt setzt neben dem Fahrradverkehr auch auf saubere Kraftfahrzeuge.",
    implementationDate: "Seit 1. Januar 2010",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Als Fahrradstadt hat Münster besonders viel Fahrradverkehr."
  },
  {
    name: "Karlsruhe",
    slug: "karlsruhe",
    description: "Fächerstadt mit Umweltzone in Baden-Württemberg.",
    fullDescription: "Karlsruhe, die Fächerstadt, hat eine Umweltzone eingerichtet. Als wichtiger Technologiestandort in Baden-Württemberg setzt die Stadt auf innovative und saubere Mobilität.",
    implementationDate: "Seit 1. Januar 2009",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Die fächerförmige Stadtstruktur spiegelt sich auch in der Umweltzone wider."
  },
  {
    name: "Mannheim",
    slug: "mannheim",
    description: "Quadratestadt mit Umweltzone in der Metropolregion Rhein-Neckar.",
    fullDescription: "Mannheim, die Quadratestadt, hat eine Umweltzone eingerichtet. Als wichtiger Industriestandort in der Metropolregion Rhein-Neckar setzt die Stadt auf umweltfreundliche Mobilität.",
    implementationDate: "Seit 1. März 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Die quadratische Stadtstruktur ist einzigartig in Deutschland."
  },
  {
    name: "Augsburg",
    slug: "augsburg",
    description: "Bayerische Großstadt mit Umweltzone.",
    fullDescription: "Augsburg hat eine Umweltzone in der Innenstadt eingerichtet. Die bayerische Großstadt setzt auf nachhaltige Mobilität zur Verbesserung der Luftqualität.",
    implementationDate: "Seit 1. Juli 2009",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Die Umweltzone umfasst die historische Augsburger Altstadt."
  },
  {
    name: "Wiesbaden",
    slug: "wiesbaden",
    description: "Hessische Landeshauptstadt mit Umweltzone.",
    fullDescription: "Wiesbaden, die hessische Landeshauptstadt, hat eine Umweltzone eingerichtet. Die Stadt setzt auf nachhaltige Mobilität zur Verbesserung der Luftqualität.",
    implementationDate: "Seit 1. Februar 2013",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Als Kurstadt legt Wiesbaden besonderen Wert auf saubere Luft."
  },
  {
    name: "Gelsenkirchen",
    slug: "gelsenkirchen",
    description: "Stadt im Ruhrgebiet mit Umweltzone.",
    fullDescription: "Gelsenkirchen ist Teil der großen Umweltzone Ruhrgebiet. Die Stadt ist bekannt für den FC Schalke 04 und setzt auf saubere Mobilität.",
    implementationDate: "Seit 15. Oktober 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Das Stadion auf Schalke liegt innerhalb der Umweltzone."
  },
  {
    name: "Mönchengladbach",
    slug: "moenchengladbach",
    description: "Stadt am Niederrhein mit Umweltzone.",
    fullDescription: "Mönchengladbach hat eine Umweltzone eingerichtet. Die Stadt am Niederrhein setzt auf nachhaltige Mobilität zur Verbesserung der Luftqualität.",
    implementationDate: "Seit 1. Februar 2013",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Die Umweltzone umfasst wichtige Bereiche der Innenstadt."
  },
  {
    name: "Braunschweig",
    slug: "braunschweig",
    description: "Niedersächsische Großstadt mit Umweltzone.",
    fullDescription: "Braunschweig hat eine Umweltzone eingerichtet. Die niedersächsische Großstadt setzt auf nachhaltige Mobilität und ist ein wichtiger Forschungsstandort.",
    implementationDate: "Seit 1. Januar 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Als Forschungsstandort ist Braunschweig Vorreiter bei umweltfreundlichen Technologien."
  },
  {
    name: "Chemnitz",
    slug: "chemnitz",
    description: "Sächsische Stadt mit Umweltzone.",
    fullDescription: "Chemnitz hat eine Umweltzone im Stadtgebiet eingerichtet. Die sächsische Stadt setzt auf nachhaltige Mobilität zur Verbesserung der Luftqualität.",
    implementationDate: "Seit 1. September 2011",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Die Umweltzone trägt zur Verbesserung der Luftqualität bei."
  },
  {
    name: "Kiel",
    slug: "kiel",
    description: "Schleswig-holsteinische Landeshauptstadt mit Umweltzone.",
    fullDescription: "Kiel, die schleswig-holsteinische Landeshauptstadt, hat eine Umweltzone eingerichtet. Die Hafenstadt an der Ostsee setzt auf saubere Mobilität.",
    implementationDate: "Seit 1. September 2011",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Als Hafenstadt ist Kiel ein wichtiger Verkehrsknotenpunkt zur Ostsee."
  },
  {
    name: "Aachen",
    slug: "aachen",
    description: "Kaiserstadt mit Umweltzone nahe der Grenze zu Belgien und den Niederlanden.",
    fullDescription: "Aachen, die Kaiserstadt, hat eine Umweltzone eingerichtet. Die Stadt an der Grenze zu Belgien und den Niederlanden ist ein wichtiger Grenzübergang und setzt auf saubere Mobilität.",
    implementationDate: "Seit 1. Februar 2016",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Als Grenzstadt hat Aachen viel internationalen Verkehr."
  },
  {
    name: "Halle (Saale)",
    slug: "halle",
    description: "Sachsen-anhaltinische Großstadt mit Umweltzone.",
    fullDescription: "Halle (Saale) hat eine Umweltzone eingerichtet. Die sachsen-anhaltinische Großstadt setzt auf nachhaltige Mobilität zur Verbesserung der Luftqualität.",
    implementationDate: "Seit 1. September 2011",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Die Umweltzone umfasst wichtige Bereiche der Innenstadt."
  },
  {
    name: "Magdeburg",
    slug: "magdeburg",
    description: "Landeshauptstadt von Sachsen-Anhalt mit Umweltzone.",
    fullDescription: "Magdeburg, die Landeshauptstadt von Sachsen-Anhalt, hat eine Umweltzone eingerichtet. Die Stadt an der Elbe setzt auf nachhaltige Mobilität.",
    implementationDate: "Seit 1. September 2011",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Als Landeshauptstadt ist Magdeburg ein wichtiger Verkehrsknotenpunkt."
  },
  {
    name: "Freiburg im Breisgau",
    slug: "freiburg",
    description: "Schwarzwaldstadt mit Umweltzone in Baden-Württemberg.",
    fullDescription: "Freiburg im Breisgau hat eine Umweltzone eingerichtet. Die Stadt am Schwarzwald setzt auf nachhaltige Mobilität und ist bekannt für ihre Umweltfreundlichkeit.",
    implementationDate: "Seit 1. Januar 2013",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Freiburg gilt als eine der umweltfreundlichsten Städte Deutschlands."
  },
  {
    name: "Krefeld",
    slug: "krefeld",
    description: "Seidenstadt mit Umweltzone am Niederrhein.",
    fullDescription: "Krefeld, die Seidenstadt, hat eine Umweltzone eingerichtet. Die Stadt am Niederrhein setzt auf nachhaltige Mobilität zur Verbesserung der Luftqualität.",
    implementationDate: "Seit 1. Oktober 2012",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Krefeld ist für seine Textilindustrie bekannt."
  },
  {
    name: "Lübeck",
    slug: "luebeck",
    description: "Hansestadt mit Umweltzone und UNESCO-Weltkulturerbe.",
    fullDescription: "Lübeck, die Hansestadt, hat eine Umweltzone eingerichtet. Die Stadt mit dem UNESCO-Weltkulturerbe setzt auf saubere Mobilität zum Schutz der historischen Altstadt.",
    implementationDate: "Seit 1. Januar 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Die historische Altstadt ist UNESCO-Weltkulturerbe."
  },
  {
    name: "Oberhausen",
    slug: "oberhausen",
    description: "Stadt im Ruhrgebiet mit Umweltzone und Centro.",
    fullDescription: "Oberhausen ist Teil der großen Umweltzone Ruhrgebiet. Die Stadt ist bekannt für das CentrO und setzt auf saubere Mobilität.",
    implementationDate: "Seit 15. Oktober 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Das CentrO liegt innerhalb der Umweltzone."
  },
  {
    name: "Erfurt",
    slug: "erfurt",
    description: "Thüringische Landeshauptstadt mit Umweltzone.",
    fullDescription: "Erfurt, die thüringische Landeshauptstadt, hat eine Umweltzone eingerichtet. Die Stadt setzt auf nachhaltige Mobilität zur Verbesserung der Luftqualität.",
    implementationDate: "Seit 1. Oktober 2012",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Die historische Altstadt profitiert von der verbesserten Luftqualität."
  },
  {
    name: "Rostock",
    slug: "rostock",
    description: "Hansestadt an der Ostsee mit Umweltzone.",
    fullDescription: "Rostock, die Hansestadt an der Ostsee, hat eine Umweltzone eingerichtet. Die größte Stadt Mecklenburg-Vorpommerns setzt auf saubere Mobilität.",
    implementationDate: "Seit 1. November 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Als größte Stadt des Bundeslandes ist Rostock ein wichtiger Verkehrsknotenpunkt."
  },
  {
    name: "Kassel",
    slug: "kassel",
    description: "Documenta-Stadt mit Umweltzone in Nordhessen.",
    fullDescription: "Kassel, bekannt für die documenta, hat eine Umweltzone eingerichtet. Die nordhessische Großstadt setzt auf nachhaltige Mobilität.",
    implementationDate: "Seit 1. Februar 2013",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Die documenta findet alle fünf Jahre in Kassel statt."
  },
  {
    name: "Hagen",
    slug: "hagen",
    description: "Stadt in Südwestfalen mit Umweltzone.",
    fullDescription: "Hagen hat eine Umweltzone eingerichtet. Die Stadt in Südwestfalen setzt auf nachhaltige Mobilität zur Verbesserung der Luftqualität.",
    implementationDate: "Seit 1. Oktober 2012",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Hagen liegt am Übergang zwischen Ruhrgebiet und Sauerland."
  },
  {
    name: "Potsdam",
    slug: "potsdam",
    description: "Brandenburger Landeshauptstadt mit Umweltzone und UNESCO-Weltkulturerbe.",
    fullDescription: "Potsdam, die Landeshauptstadt Brandenburgs, hat eine Umweltzone eingerichtet. Die Stadt mit den berühmten Schlössern und Parks setzt auf saubere Mobilität.",
    implementationDate: "Seit 1. September 2011",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Die Schlösser und Parks von Sanssouci sind UNESCO-Weltkulturerbe."
  },
  {
    name: "Saarbrücken",
    slug: "saarbruecken",
    description: "Landeshauptstadt des Saarlandes mit Umweltzone.",
    fullDescription: "Saarbrücken, die Landeshauptstadt des Saarlandes, hat eine Umweltzone eingerichtet. Die Stadt an der französischen Grenze setzt auf saubere Mobilität.",
    implementationDate: "Seit 1. Januar 2013",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Als Grenzstadt hat Saarbrücken enge Verbindungen zu Frankreich."
  },
  {
    name: "Hamm",
    slug: "hamm",
    description: "Stadt in Westfalen mit Umweltzone.",
    fullDescription: "Hamm hat eine Umweltzone eingerichtet. Die westfälische Stadt setzt auf nachhaltige Mobilität zur Verbesserung der Luftqualität.",
    implementationDate: "Seit 1. Oktober 2012",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Hamm ist bekannt für den Maximilianpark und den Glaselefanten."
  },
  {
    name: "Mülheim an der Ruhr",
    slug: "muelheim",
    description: "Stadt an der Ruhr mit Umweltzone im Ruhrgebiet.",
    fullDescription: "Mülheim an der Ruhr ist Teil der großen Umweltzone Ruhrgebiet. Die Stadt an der Ruhr setzt auf saubere Mobilität und grüne Infrastruktur.",
    implementationDate: "Seit 15. Oktober 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Mülheim ist für seine grünen Bereiche entlang der Ruhr bekannt."
  },
  {
    name: "Ludwigshafen",
    slug: "ludwigshafen",
    description: "Industriestadt mit Umweltzone in der Metropolregion Rhein-Neckar.",
    fullDescription: "Ludwigshafen hat eine Umweltzone eingerichtet. Die Industriestadt in der Metropolregion Rhein-Neckar setzt auf saubere Mobilität.",
    implementationDate: "Seit 1. März 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Ludwigshafen ist ein wichtiger Industriestandort am Rhein."
  },
  {
    name: "Leverkusen",
    slug: "leverkusen",
    description: "Stadt zwischen Köln und Düsseldorf mit Umweltzone.",
    fullDescription: "Leverkusen hat eine Umweltzone eingerichtet. Die Stadt zwischen Köln und Düsseldorf ist bekannt für Bayer 04 Leverkusen und die Bayer AG.",
    implementationDate: "Seit 1. Juli 2012",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Die BayArena liegt innerhalb der Umweltzone."
  },
  {
    name: "Oldenburg",
    slug: "oldenburg",
    description: "Niedersächsische Stadt mit Umweltzone.",
    fullDescription: "Oldenburg hat eine Umweltzone eingerichtet. Die niedersächsische Stadt setzt auf nachhaltige Mobilität zur Verbesserung der Luftqualität.",
    implementationDate: "Seit 1. Januar 2010",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Oldenburg ist ein wichtiges Zentrum in Nordwestdeutschland."
  },
  {
    name: "Neuss",
    slug: "neuss",
    description: "Stadt am Rhein mit Umweltzone.",
    fullDescription: "Neuss hat eine Umweltzone eingerichtet. Die Stadt am Rhein gegenüber von Düsseldorf setzt auf saubere Mobilität.",
    implementationDate: "Seit 1. Februar 2013",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Neuss liegt direkt gegenüber von Düsseldorf am Rhein."
  },
  {
    name: "Heidelberg",
    slug: "heidelberg",
    description: "Universitätsstadt mit Umweltzone am Neckar.",
    fullDescription: "Heidelberg hat eine Umweltzone eingerichtet. Die berühmte Universitätsstadt am Neckar setzt auf saubere Mobilität zum Schutz der historischen Altstadt.",
    implementationDate: "Seit 1. März 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Die historische Altstadt und das Schloss sind weltberühmt."
  },
  {
    name: "Darmstadt",
    slug: "darmstadt",
    description: "Wissenschaftsstadt mit Umweltzone in Südhessen.",
    fullDescription: "Darmstadt hat eine Umweltzone eingerichtet. Die Wissenschaftsstadt in Südhessen setzt auf nachhaltige Mobilität und ist ein wichtiger Forschungsstandort.",
    implementationDate: "Seit 1. November 2015",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Darmstadt ist Sitz der ESA und vieler Forschungseinrichtungen."
  },
  {
    name: "Paderborn",
    slug: "paderborn",
    description: "Ostwestfälische Stadt mit Umweltzone.",
    fullDescription: "Paderborn hat eine Umweltzone eingerichtet. Die ostwestfälische Stadt setzt auf nachhaltige Mobilität zur Verbesserung der Luftqualität.",
    implementationDate: "Seit 1. Januar 2013",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Paderborn ist bekannt für seine Universität und den Dom."
  },
  {
    name: "Regensburg",
    slug: "regensburg",
    description: "Bayerische Stadt mit Umweltzone und UNESCO-Weltkulturerbe.",
    fullDescription: "Regensburg hat eine Umweltzone eingerichtet. Die bayerische Stadt mit der UNESCO-Weltkulturerbe Altstadt setzt auf saubere Mobilität.",
    implementationDate: "Seit 1. September 2011",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Die mittelalterliche Altstadt ist UNESCO-Weltkulturerbe."
  },
  {
    name: "Würzburg",
    slug: "wuerzburg",
    description: "Fränkische Stadt mit Umweltzone und UNESCO-Weltkulturerbe.",
    fullDescription: "Würzburg hat eine Umweltzone eingerichtet. Die fränkische Stadt mit der Residenz (UNESCO-Weltkulturerbe) setzt auf saubere Mobilität.",
    implementationDate: "Seit 1. Februar 2013",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Die Würzburger Residenz ist UNESCO-Weltkulturerbe."
  },
  {
    name: "Ingolstadt",
    slug: "ingolstadt",
    description: "Bayerische Stadt mit Umweltzone und Audi-Standort.",
    fullDescription: "Ingolstadt hat eine Umweltzone eingerichtet. Die bayerische Stadt ist Hauptsitz von Audi und setzt auf innovative und saubere Mobilität.",
    implementationDate: "Seit 1. Februar 2016",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Ingolstadt ist Hauptsitz der Audi AG."
  },
  {
    name: "Ulm",
    slug: "ulm",
    description: "Stadt an der Donau mit Umweltzone und dem höchsten Kirchturm der Welt.",
    fullDescription: "Ulm hat eine Umweltzone eingerichtet. Die Stadt an der Donau mit dem höchsten Kirchturm der Welt setzt auf nachhaltige Mobilität.",
    implementationDate: "Seit 1. März 2009",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Das Ulmer Münster hat den höchsten Kirchturm der Welt."
  },
  {
    name: "Wolfsburg",
    slug: "wolfsburg",
    description: "Autostadt mit Umweltzone und Volkswagen-Hauptsitz.",
    fullDescription: "Wolfsburg hat eine Umweltzone eingerichtet. Die Autostadt und Hauptsitz von Volkswagen setzt auf innovative und saubere Mobilität.",
    implementationDate: "Seit 1. Februar 2013",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Wolfsburg ist Hauptsitz der Volkswagen AG."
  },
  {
    name: "Pforzheim",
    slug: "pforzheim",
    description: "Goldstadt mit Umweltzone in Baden-Württemberg.",
    fullDescription: "Pforzheim hat eine Umweltzone eingerichtet. Die Goldstadt in Baden-Württemberg setzt auf nachhaltige Mobilität zur Verbesserung der Luftqualität.",
    implementationDate: "Seit 1. März 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Pforzheim ist bekannt für seine Schmuck- und Uhrenindustrie."
  },
  {
    name: "Göttingen",
    slug: "goettingen",
    description: "Universitätsstadt mit Umweltzone in Südniedersachsen.",
    fullDescription: "Göttingen hat eine Umweltzone eingerichtet. Die traditionsreiche Universitätsstadt in Südniedersachsen setzt auf nachhaltige Mobilität.",
    implementationDate: "Seit 1. Februar 2013",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Die Georg-August-Universität ist eine der ältesten Universitäten Deutschlands."
  },
  {
    name: "Bottrop",
    slug: "bottrop",
    description: "Stadt im Ruhrgebiet mit Umweltzone.",
    fullDescription: "Bottrop ist Teil der großen Umweltzone Ruhrgebiet. Die Stadt setzt auf saubere Mobilität und nachhaltige Stadtentwicklung.",
    implementationDate: "Seit 15. Oktober 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Bottrop ist bekannt für den Movie Park Germany."
  },
  {
    name: "Recklinghausen",
    slug: "recklinghausen",
    description: "Stadt im nördlichen Ruhrgebiet mit Umweltzone.",
    fullDescription: "Recklinghausen ist Teil der großen Umweltzone Ruhrgebiet. Die Stadt im nördlichen Ruhrgebiet setzt auf saubere Mobilität.",
    implementationDate: "Seit 15. Oktober 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Recklinghausen ist bekannt für die Ruhrfestspiele."
  },
  {
    name: "Bergisch Gladbach",
    slug: "bergisch-gladbach",
    description: "Stadt im Bergischen Land mit Umweltzone.",
    fullDescription: "Bergisch Gladbach hat eine Umweltzone eingerichtet. Die Stadt im Bergischen Land östlich von Köln setzt auf nachhaltige Mobilität.",
    implementationDate: "Seit 1. Juli 2012",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Die Stadt liegt im grünen Bergischen Land."
  },
  {
    name: "Erlangen",
    slug: "erlangen",
    description: "Universitätsstadt mit Umweltzone in Mittelfranken.",
    fullDescription: "Erlangen hat eine Umweltzone eingerichtet. Die Universitätsstadt in Mittelfranken und Standort der Friedrich-Alexander-Universität setzt auf saubere Mobilität.",
    implementationDate: "Seit 1. Februar 2010",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Erlangen ist Sitz der Friedrich-Alexander-Universität."
  },
  {
    name: "Remscheid",
    slug: "remscheid",
    description: "Stadt im Bergischen Land mit Umweltzone.",
    fullDescription: "Remscheid hat eine Umweltzone eingerichtet. Die Stadt im Bergischen Land setzt auf nachhaltige Mobilität zur Verbesserung der Luftqualität.",
    implementationDate: "Seit 15. Oktober 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Remscheid ist bekannt für seine Werkzeugindustrie."
  },
  {
    name: "Moers",
    slug: "moers",
    description: "Stadt am Niederrhein mit Umweltzone.",
    fullDescription: "Moers hat eine Umweltzone eingerichtet. Die Stadt am Niederrhein setzt auf nachhaltige Mobilität zur Verbesserung der Luftqualität.",
    implementationDate: "Seit 1. Oktober 2012",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Moers liegt in einer historisch bedeutsamen Region am Niederrhein."
  },
  {
    name: "Siegen",
    slug: "siegen",
    description: "Stadt im Siegerland mit Umweltzone.",
    fullDescription: "Siegen hat eine Umweltzone eingerichtet. Die Stadt im Siegerland setzt auf nachhaltige Mobilität zur Verbesserung der Luftqualität.",
    implementationDate: "Seit 1. Juli 2012",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Siegen ist Geburtsort des Barockmalers Peter Paul Rubens."
  },
  {
    name: "Hildesheim",
    slug: "hildesheim",
    description: "Niedersächsische Stadt mit Umweltzone und UNESCO-Weltkulturerbe.",
    fullDescription: "Hildesheim hat eine Umweltzone eingerichtet. Die niedersächsische Stadt mit UNESCO-Weltkulturerbe setzt auf saubere Mobilität.",
    implementationDate: "Seit 1. Februar 2013",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Der Dom und die Michaeliskirche sind UNESCO-Weltkulturerbe."
  },
  {
    name: "Cottbus",
    slug: "cottbus",
    description: "Brandenburgische Stadt mit Umweltzone.",
    fullDescription: "Cottbus hat eine Umweltzone eingerichtet. Die brandenburgische Stadt setzt auf nachhaltige Mobilität zur Verbesserung der Luftqualität.",
    implementationDate: "Seit 1. September 2011",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Cottbus ist ein wichtiges Zentrum der Lausitz."
  },
  {
    name: "Marburg",
    slug: "marburg",
    description: "Universitätsstadt mit Umweltzone in Mittelhessen.",
    fullDescription: "Marburg hat eine Umweltzone eingerichtet. Die traditionsreiche Universitätsstadt in Mittelhessen setzt auf nachhaltige Mobilität.",
    implementationDate: "Seit 1. April 2016",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Die Philipps-Universität ist eine der ältesten protestantischen Universitäten."
  },
  {
    name: "Dinslaken",
    slug: "dinslaken",
    description: "Stadt am Niederrhein mit Umweltzone im Ruhrgebiet.",
    fullDescription: "Dinslaken ist Teil der großen Umweltzone Ruhrgebiet. Die Stadt am Niederrhein setzt auf saubere Mobilität.",
    implementationDate: "Seit 15. Oktober 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Dinslaken liegt an der Grenze zwischen Ruhrgebiet und Niederrhein."
  },
  {
    name: "Schwerte",
    slug: "schwerte",
    description: "Stadt an der Ruhr mit Umweltzone.",
    fullDescription: "Schwerte hat eine Umweltzone eingerichtet. Die Stadt an der Ruhr setzt auf nachhaltige Mobilität zur Verbesserung der Luftqualität.",
    implementationDate: "Seit 15. Oktober 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Schwerte liegt im grünen Ruhrtal."
  },
  {
    name: "Tübingen",
    slug: "tuebingen",
    description: "Universitätsstadt mit Umweltzone in Baden-Württemberg.",
    fullDescription: "Tübingen hat eine Umweltzone eingerichtet. Die berühmte Universitätsstadt in Baden-Württemberg setzt auf nachhaltige Mobilität.",
    implementationDate: "Seit 1. März 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Die Eberhard Karls Universität ist eine der ältesten deutschen Universitäten."
  },
  {
    name: "Reutlingen",
    slug: "reutlingen",
    description: "Stadt in Baden-Württemberg mit Umweltzone.",
    fullDescription: "Reutlingen hat eine Umweltzone eingerichtet. Die Stadt in Baden-Württemberg setzt auf nachhaltige Mobilität zur Verbesserung der Luftqualität.",
    implementationDate: "Seit 1. März 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Reutlingen liegt am Fuße der Schwäbischen Alb."
  },
  {
    name: "Herrenberg",
    slug: "herrenberg",
    description: "Stadt in Baden-Württemberg mit Umweltzone.",
    fullDescription: "Herrenberg hat eine Umweltzone eingerichtet. Die Stadt in Baden-Württemberg setzt auf nachhaltige Mobilität zur Verbesserung der Luftqualität.",
    implementationDate: "Seit 1. März 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Herrenberg ist eine mittelalterliche Stadt mit gut erhaltener Altstadt."
  },
  {
    name: "Leonberg",
    slug: "leonberg",
    description: "Stadt in Baden-Württemberg mit Umweltzone.",
    fullDescription: "Leonberg hat eine Umweltzone eingerichtet. Die Stadt in Baden-Württemberg westlich von Stuttgart setzt auf saubere Mobilität.",
    implementationDate: "Seit 1. März 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) sind in der Umweltzone zugelassen.",
    importantNotes: "Leonberg liegt in der Region Stuttgart."
  },
  {
    name: "Ludwigsburg",
    slug: "ludwigsburg",
    description: "Barockstadt mit Umweltzone in Baden-Württemberg.",
    fullDescription: "Ludwigsburg hat eine Umweltzone eingerichtet. Die Barockstadt in Baden-Württemberg setzt auf nachhaltige Mobilität und den Schutz des historischen Stadtbilds.",
    implementationDate: "Seit 1. März 2008",
    restrictions: "Nur Fahrzeuge mit grüner Plakette (Schadstoffgruppe 4) dürfen in die Umweltzone einfahren.",
    importantNotes: "Das Residenzschloss ist eines der größten Barockschlösser Deutschlands."
  }
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}
