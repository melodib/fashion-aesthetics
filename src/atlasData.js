// --- GLOBAL AXIS DEFINITIONS ---
// These define the "Hidden Dimensions" of every aesthetic in the Atlas.

export const axisDefinitions = {
  metabolic: {
    surface: { label: "Surface", description: "External clothing/gear" },
    dermal: { label: "Dermal", description: "Tattoos, tech-skin, surface implants" },
    intrasomatic: { label: "Intrasomatic", description: "Neural-lace, nanites, internal systems" }
  },
  durational: {
    ephemeral: { label: "Ephemeral", description: "Exist for milliseconds (Data-glitches)" },
    seasonal: { label: "Seasonal", description: "Cycles with environment/climate" },
    eternal: { label: "Eternal", description: "Geologic-scale (10,000+ years)" }
  },
  visibility: {
    universal: { label: "Universal", description: "Visible to the naked eye" },
    machine: { label: "Machine-Only", description: "Visible to LIDAR/Infrared" },
    encrypted: { label: "Encrypted", description: "Requires a Neural Key/AR-layer" }
  },
  maintenance: {
    pristine: { label: "Pristine", description: "Factory-new, clinical finish" },
    degraded: { label: "Degraded", description: "Lived-in, patched, or scavenged" }
  },
  interaction: {
    visual: { label: "Visual-Dominant", description: "Focus on optics and light" },
    haptic: { label: "Haptic-Active", description: "Thermal-pulse or weight-shifting" },
    sonic: { label: "Sonic-Textile", description: "Data-driven frequency emission" }
  },
  sovereignty: {
    corporate: { label: "Corporate", description: "DRM-locked, subscription-ware" },
    sovereign: { label: "Sovereign", description: "User-owned, unindexed, private" },
    dao: { label: "DAO-Governed", description: "Community-owned, open-source" }
  },
  realityState: {
    layered: { label: "Layered", description: "Identity is a digital file; existence is augmented." },
    hostile: { label: "Hostile", description: "Vacuum or extreme pressure; gravity is optional." },
    synchronized: { label: "Synchronized", description: "Bio-rhythms tuned to planetary cycles." },
    nonlinear: { label: "Non-Linear", description: "Time dilation; 'Now' is merely a suggestion." }
  },
  coreLogic: {
    layered: "Identity is a file.",
    hostile: "Gravity is optional.",
    synchronized: "The Earth is the clock.",
    nonlinear: "Now is a suggestion."
  }
};

const phylum1 = {
      number: 1,
      name: "Historical",
      emoji: "🏛",
      description: "Chronological eras — from pharaohs to Y2K",
      classes: [
        {
          name: "ANCIENT & CLASSICAL",
          species: [
            ["Mesopotamian Aesthetic", "N"],
            ["Ancient Indus Aesthetic", "N"],
            ["Egyptian Priestess", "N"],
            ["Pharaonic Aesthetic", "N"],
            ["Minoan Aesthetic", "N"],
            ["Zhou Dynasty Aesthetic", "N"],
            ["Ancient Persian Court", "N"],
            ["Celtic Warrior Aesthetic", "N"],
            ["Iron Age Tribal Dress", "N"],
            ["Druid Aesthetic", "N"],
            ["Chiton Aesthetic", "N"],
            ["Grecian Goddess", "N"],
            ["Olympian Dress", "N"],
            ["Greek Philosopher", "N"],
            ["Cleopatra Aesthetic", "N"],
            ["Roman Toga Style", "N"],
            ["Roman Matron", "N"],
            ["Centurion Aesthetic", "N"],
            ["Chinese Han Dynasty Court Dress", "N"],
            ["Japanese Heian Court Dress", "N"],
            ["Byzantine Empress", "N"],
            ["Orthodox Ceremonial", "N"],
            ["Mali Empire Court Dress", "N"],
            ["Aztec Ceremonial Dress", "S"],
            ["Mughal Court Aesthetic", "N"],
            ["Ottoman Court Dress", "N"],
            ["Ethiopian Imperial Aesthetic", "N"],
          ],
        },
        {
          name: "MEDIEVAL EUROPE",
          species: [
            ["Dark Ages Aesthetic", "N"],
            ["Anglo-Saxon Folk", "N"],
            ["Viking Aesthetic", "N"],
            ["Norse Shieldmaiden", "N"],
            ["Norse Court Dress", "N"],
            ["Early Christian Modest", "N"],
            ["Carolingian Court", "N"],
            ["Frankish Noble", "N"],
            ["Medieval Peasant", "N"],
            ["Village Folk Dress", "N"],
            ["Merchant Class Dress", "N"],
            ["Guild Artisan Aesthetic", "N"],
            ["Medieval Herbalist", "N"],
            ["Crusader Aesthetic", "N"],
            ["Gothic Court Dress", "N"],
            ["Medieval Noblewoman", "N"],
            ["Medieval Knight Dress", "N"],
            ["Heraldic Aesthetic", "N"],
            ["Tournament Dress", "N"],
            ["Faire Maiden Aesthetic", "N"],
            ["Medieval Romantic", "N"],
            ["Plague Doctor", "X"],
          ],
        },
        {
          name: "RENAISSANCE & BAROQUE",
          species: [
            ["Florentine Renaissance", "N"],
            ["Medici Aesthetic", "N"],
            ["Renaissance Noblewoman", "N"],
            ["Venetian Court Dress", "N"],
            ["Patrician Venetian", "N"],
            ["Venetian Masquerade", "X"],
            ["Flemish Portrait Aesthetic", "N"],
            ["Protestant Modest", "N"],
            ["Dutch Golden Age", "N"],
            ["Tudor Court Dress", "N"],
            ["Tudor Merchant", "N"],
            ["Elizabethan Aesthetic", "N"],
            ["Spanish Court Dress", "N"],
            ["Habsburg Black", "N"],
            ["Velázquez Aesthetic", "N"],
            ["Mannerist Aesthetic", "N"],
            ["Versailles Court", "N"],
            ["Louis XIV Aesthetic", "N"],
            ["Baroque Excess", "N"],
          ],
        },
        {
          name: "18TH CENTURY",
          species: [
            ["Puritan Aesthetic", "N"],
            ["Colonial American Dress", "N"],
            ["Georgian Town Dress", "N"],
            ["Georgian Country House", "N"],
            ["Georgian Street Dress", "N"],
            ["Servant Aesthetic", "N"],
            ["Bath Assembly Rooms", "N"],
            ["Macaroni Aesthetic", "N"],
            ["French Rococo Court", "N"],
            ["Marie Antoinette Aesthetic", "N"],
            ["Rococo Pastoral", "N"],
            ["Boucher Aesthetic", "N"],
            ["Fragonard Aesthetic", "N"],
            ["Painted Lady", "N"],
            ["Founding Era Dress", "N"],
            ["French Revolutionary Dress", "N"],
            ["Sans-Culotte Aesthetic", "N"],
            ["Liberty Aesthetic", "N"],
          ],
        },
        {
          name: "REGENCY & EMPIRE",
          species: [
            ["Directoire Aesthetic", "N"],
            ["Neoclassical Revival Dress", "N"],
            ["Josephine Aesthetic", "N"],
            ["Empire Court Dress", "N"],
            ["Napoleonic Military Fashion", "N"],
            ["Regency Morning Dress", "N"],
            ["Spencer Jacket Aesthetic", "N"],
            ["Regency Promenade", "N"],
            ["Jane Austen Aesthetic", "N"],
            ["Beau Brummell Aesthetic", "N"],
            ["Regency Gentleman", "N"],
            ["Regencycore", "N"],
            ["Pastel Regency", "N"],
          ],
        },
        {
          name: "VICTORIAN",
          species: [
            ["Early Victorian Morning", "N"],
            ["Victoria Era Modest", "N"],
            ["Victorian Factory Worker", "N"],
            ["Victorian Street Dress", "N"],
            ["Cockney Aesthetic", "N"],
            ["Crinoline Aesthetic", "N"],
            ["Worth Couture Aesthetic", "N"],
            ["Pre-Raphaelite Aesthetic", "N"],
            ["Aesthetic Dress Reform & Movement", "N"],
            ["Victorian Mourning Dress", "N"],
            ["Bustle Aesthetic", "N"],
            ["High Victorian Evening & Hostess", "N"],
            ["Liberty Dress Reform", "N"],
            ["New Woman Aesthetic", "N"],
            ["Victorian Rational Dress & Cyclist", "N"],
            ["Victorian Gothic", "X"],
            ["Neo-Victorian", "N"],
          ],
        },
        {
          name: "EDWARDIAN & BELLE ÉPOQUE",
          species: [
            ["Belle Époque Parisienne", "N"],
            ["Art Nouveau Aesthetic", "N"],
            ["Mucha Woman", "N"],
            ["Gibson Girl Aesthetic", "N"],
            ["Edwardian Promenade", "N"],
            ["Edwardian Tea Dress", "N"],
            ["Country House Weekend", "N"],
            ["Edwardian Ball Gown", "N"],
            ["Edwardian Suffragette", "N"],
            ["Paul Poiret Aesthetic", "N"],
            ["Titanic Era Dress", "N"],
            ["Edwardian Motoring", "N"],
            ["Edwardian Tennis", "N"],
          ],
        },
        {
          name: "INTERWAR",
          species: [
            ["De Stijl Dress", "N"],
            ["Bauhaus Aesthetic", "N"],
            ["Constructivist Fashion", "N"],
            ["Functionalist Modernism", "N"],
            ["Flapper Aesthetic", "N"],
            ["Chanel Aesthetic", "N"],
            ["Schiaparelli Aesthetic", "N"],
            ["Jazz Baby", "N"],
            ["Gatsby Girl", "N"],
            ["Art Deco Geometric", "N"],
            ["Orientalist 1920s", "N"],
            ["Art Deco Egyptian", "N"],
            ["Hollywood Egyptian", "N"],
            ["Harlem Renaissance Fashion", "N"],
            ["Jazz Age Elegance", "N"],
            ["Blues Singer Aesthetic", "N"],
            ["Old Hollywood Glamour", "N"],
            ["Silver Screen Aesthetic", "N"],
            ["Film Noir Femme", "X"],
            ["1930s Practical Chic", "N"],
            ["Depression Era Dress", "N"],
            ["1930s Country House", "N"],
          ],
        },
        {
          name: "MID-CENTURY",
          species: [
            ["Wartime Utility Aesthetic", "N"],
            ["Land Girl", "N"],
            ["1940s Factory Worker", "N"],
            ["Victory Roll Aesthetic", "N"],
            ["Andrews Sisters Aesthetic", "N"],
            ["1940s Pin-Up", "N"],
            ["1940s Evening", "N"],
            ["Dior New Look", "N"],
            ["1950s Upper Class Daywear", "N"],
            ["Society Matron Aesthetic", "N"],
            ["The Luncheon Aesthetic", "N"],
            ["Ladies Who Lunch", "N"],
            ["1950s Housewife", "N"],
            ["1950s Hostess", "N"],
            ["Rockabilly", "N"],
            ["1950s Teen", "N"],
            ["Poodle Skirt Aesthetic", "N"],
            ["Grease Aesthetic", "N"],
            ["Atomic Housewife Aesthetic", "N"],
            ["Atomic Age Fashion", "N"],
            ["Space Age 1950s", "N"],
            ["Googie Aesthetic", "N"],
            ["1960s Mod", "N"],
            ["Carnaby Street", "X"],
            ["Twiggy Aesthetic", "N"],
            ["Courrèges Aesthetic", "N"],
            ["1960s Futurism", "N"],
            ["Go-Go Girl", "N"],
            ["1960s Folk Revival", "N"],
            ["Flower Child Early", "N"],
            ["Swinging Sixties Boho", "N"],
            ["1970s Hippie", "N"],
            ["Festival Folk", "N"],
            ["Earth Mother Aesthetic", "N"],
            ["1970s Bohemian", "N"],
            ["Prairie Dress 1970s", "N"],
            ["Stevie Nicks Aesthetic", "N"],
            ["T. Rex Aesthetic", "N"],
            ["Glam Rock", "N"],
            ["Bowie Aesthetic", "N"],
            ["1970s Soul Style", "N"],
            ["Blaxploitation Aesthetic", "N"],
            ["1970s Funk & Goddess", "N"],
            ["Disco Aesthetic", "N"],
            ["Disco Dollies & Studio 54", "N"],
            ["1970s Diva", "N"],
            ["Mod Revival", "X"],
          ],
        },
        {
          name: "POWER DECADE",
          species: [
            ["Post-Punk Fashion", "N"],
            ["Blitz Kids Aesthetic", "N"],
            ["New Romantic", "N"],
            ["Duran Duran Aesthetic", "N"],
            ["Goth Early", "X"],
            ["1980s Preppy", "N"],
            ["Benetton Aesthetic", "N"],
            ["1980s College", "N"],
            ["1980s Power Suit", "N"],
            ["Dynasty & Dallas", "N"],
            ["Wall Street Aesthetic", "N"],
            ["Miami Vice Aesthetic", "N"],
            ["1980s Evening Glam", "N"],
            ["Early Hip-Hop Fashion", "N"],
            ["Madonna Aesthetic", "N"],
            ["1980s B-Boy", "N"],
            ["Acid Wash Era", "N"],
            ["1980s Alternative", "N"],
            ["BCBG / Parisian Bourgeois", "N"],
          ],
        },
        {
          name: "MINIMALIST DECADE",
          species: [
            ["1990s Supermodel Era", "N"],
            ["Kate Moss Aesthetic", "N"],
            ["1990s Minimalism", "N"],
            ["Calvin Klein Aesthetic", "N"],
            ["Slip Dress Era", "N"],
            ["Rachel Green Aesthetic", "N"],
            ["Heroin Chic", "S"],
            ["1990s Casual Cool", "N"],
            ["1990s Teen", "N"],
            ["Grunge Aesthetic", "X"],
            ["Riot Grrrl Fashion", "X"],
            ["1990s R&B Style", "N"],
            ["TLC Aesthetic", "X"],
            ["1990s Hip-Hop Fashion", "N"],
            ["Club Kid Aesthetic", "X"],
            ["Rave Fashion 1990s", "X"],
          ],
        },
        {
          name: "Y2K & TURN OF MILLENNIUM",
          species: [
            ["Y2K", "N"],
            ["Y2K Pop Princess", "N"],
            ["Von Dutch Era", "N"],
            ["Early 2000s Logomania", "N"],
            ["Velour Tracksuit & Juicy Couture", "N"],
            ["Paris Hilton Aesthetic", "N"],
            ["Early Emo Aesthetic", "N"],
            ["2000s Scene Proto", "N"],
            ["MySpace Era Fashion", "X"],
            ["2000s Emo Mainstream", "N"],
            ["Bratz Aesthetic", "N"],
            ["Indie Sleaze Precursor", "N"],
          ],
        },
        {
          name: "DIGITAL DECADE (2010s)",
          species: [
            ["2010s Tumblr Era Fashion", "N"],
            ["2010s Athleisure Mainstream", "N"],
            ["2010s Normcore Moment", "N"],
            ["2010s Instagram Fashion", "N"],
            ["2010s Festival Fashion Peak", "N"],
            ["2010s Sneaker Culture Peak", "N"],
            ["2010s Minimalism Revival", "N"],
            ["2010s Streetwear Mainstream", "N"],
            ["2010s Gender-Fluid Fashion Moment", "N"],
            ["2010s Health & Wellness Fashion", "N"],
            ["2010s Sustainable Fashion Awakening", "N"],
            ["2010s K-Pop Global Moment", "N"],
          ],
        },
        {
          name: "EMERGING CONTEMPORARY (2020s)",
          species: [
            ["Pandemic-Era Fashion", "N"],
            ["Post-Lockdown Dressing", "N"],
            ["2020s Quiet Luxury Moment", "N"],
            ["2020s TikTok Fashion Era", "N"],
            ["2020s AI-Influenced Fashion", "N"],
            ["2020s Dopamine Dressing Moment", "N"],
            ["2020s Gorpcore Mainstream", "N"],
            ["2020s Coquette Revival", "N"],
            ["2020s Brat Summer Moment", "N"],
["2020s Micro-Trend Acceleration", "N"],
          ]
        }
      ]
};
const phylum2 = {
    number: 2,
    name: "Cultural & Regional",
    // ... rest of phylum 2
      emoji: "🌍",
      description: "Geography, heritage, and localized traditions",
      classes: [
        {
          name: "JAPANESE LOLITA & KAWAII",
          species: [
            ["Decora", "N"],
            ["Fairy Kei", "X"],
            ["Cult Party Kei", "N"],
            ["Japanese Lolita", "N"],
            ["Sweet Lolita", "N"],
            ["Classic Lolita", "N"],
            ["Gothic Lolita", "X"],
            ["Wa Lolita", "N"],
            ["Qi Lolita", "X"],
            ["Sailor Lolita", "N"],
            ["Punk Lolita", "X"],
            ["Hime Lolita", "N"],
            ["Steampunk Lolita", "X"],
            ["Guro Lolita", "S"],
            ["Ero Lolita", "S"],
            ["Mori Girl", "N"],
            ["Mori Kei", "N"],
            ["Larme Kei", "N"],
            ["Girly Kei", "N"],
            ["Yami Kawaii", "N"],
            ["Jirai Kei", "N"],
            ["Spank! Style", "N"],
            ["Himekaji", "N"],
            ["Kuudere Aesthetic", "N"],
          ],
        },
        {
          name: "JAPANESE STREET & KEI CULTURE",
          species: [
            ["Bosozoku Aesthetic", "S"],
            ["Visual Kei", "X"],
            ["Angura Kei", "N"],
            ["Kote Kei", "N"],
            ["Oshare Kei", "N"],
            ["Eroguro Kei", "S"],
            ["Gyaru", "N"],
            ["Kogal", "N"],
            ["Ganguro", "N"],
            ["Hime Gyaru", "N"],
            ["Gyaru-O", "N"],
            ["Neo-Kogal Revival", "N"],
            ["Shibuya 109 Aesthetic", "N"],
            ["Harajuku Street", "N"],
            ["Fairy Grunge Kei", "N"],
            ["Tokyo Street Fashion", "N"],
            ["Shibuya Style", "N"],
            ["Ura-Harajuku", "N"],
            ["Manba", "N"],
            ["Wamono Aesthetic", "N"],
            ["Japanese Normcore", "N"],
            ["Techwear Japan", "N"],
          ],
        },
        {
          name: "KOREAN FASHION",
          species: [
            ["Hanbok Modernization", "N"],
            ["Hallyu Fashion", "N"],
            ["K-Drama Fashion", "N"],
            ["K-Pop Idol Fashion", "N"],
            ["Girl Group Aesthetic", "N"],
            ["Boy Group Aesthetic", "N"],
            ["K-Pop Stage Wear", "N"],
            ["Korean Ulzzang", "N"],
            ["K-Fashion / Seoul Style", "N"],
            ["Hongdae Street Style", "N"],
            ["Korean Indie Fashion", "N"],
            ["Dongdaemun Fashion", "N"],
            ["Korean Minimal", "N"],
            ["K-Beauty Aesthetic", "N"],
            ["K-Beauty Fashion", "N"],
            ["Soft Girl Korea", "N"],
            ["Korean Office Fashion", "N"],
          ],
        },
        {
          name: "CHINESE FASHION",
          species: [
            ["Chinese Han Dynasty Court Dress", "X"],
            ["Tang Dynasty Aesthetic", "N"],
            ["Qing Dynasty Court Dress", "N"],
            ["Chinese Imperial Aesthetic", "N"],
            ["Mao Suit Aesthetic", "N"],
            ["Cheongsam Aesthetic", "N"],
            ["Chinese Hanfu", "N"],
            ["Modern Hanfu", "N"],
            ["Hanfu Street Style", "N"],
            ["Hanfu Fusion", "N"],
            ["Hanfu Tourism Aesthetic", "N"],
            ["Traditional Qipao", "N"],
            ["Modern Qipao", "N"],
            ["Qipao Fusion", "N"],
            ["Chinese Streetwear", "N"],
            ["Shanghai Style", "N"],
            ["China Chic (Guochao)", "N"],
            ["C-Pop Fashion", "N"],
          ],
        },
        {
          name: "SOUTH ASIAN FASHION",
          species: [
            ["Indian Festive Wear", "N"],
            ["Bridal Indian Fashion", "N"],
            ["Bollywood Fashion", "N"],
            ["South Indian Traditional", "N"],
            ["North Indian Traditional", "N"],
            ["Saree Aesthetic", "N"],
            ["Lehenga Aesthetic", "N"],
            ["Bandani Textile Aesthetic", "N"],
            ["Bengali Fashion", "N"],
            ["Classical Indian Dance Dress", "S"],
            ["Indo-Western Fusion", "N"],
            ["Pakistani Traditional Dress", "N"],
            ["Pakistani Bridal", "N"],
            ["Shalwar Kameez Aesthetic", "N"],
            ["Sri Lankan Traditional Dress", "N"],
            ["Nepali Traditional Dress", "N"],
            ["South Asian Diaspora Fashion", "N"],
            ["Desi Street Style", "N"],
            ["British Asian Fashion", "N"],
            ["Hijra Fashion", "S"],
          ],
        },
        {
          name: "SOUTHEAST ASIAN FASHION",
          species: [
            ["Thai Traditional Dress", "N"],
            ["Thai Modern-Traditional Fusion", "N"],
            ["Thai Street Fashion", "N"],
            ["Filipiniana Aesthetic", "N"],
            ["Barong Tagalog Aesthetic", "N"],
            ["Filipino Festive Wear", "N"],
            ["Indonesian Batik Fashion", "N"],
            ["Batik Streetwear", "N"],
            ["Malay Traditional Dress", "N"],
            ["Kebaya Aesthetic", "N"],
            ["Áo Dài Aesthetic", "N"],
            ["Vietnamese Modern Traditional", "N"],
            ["Peranakan Fashion", "S"],
            ["Singaporean Fashion", "N"],
            ["Filipino-American Fashion", "N"],
            ["Filipino Diaspora Street Style", "N"],
          ],
        },
        {
          name: "MIDDLE EASTERN & CENTRAL ASIAN",
          species: [
            ["Persian Court Aesthetic", "X"],
            ["Iranian Contemporary Fashion", "N"],
            ["Persian Maximalism", "N"],
            ["Tehran Youth Street Style", "N"],
            ["Iranian Underground Fashion", "N"],
            ["Middle Eastern Modest Chic", "N"],
            ["Gulf Abaya Fashion", "N"],
            ["Khaleeji Fashion", "N"],
            ["Niqab Fashion", "S"],
            ["Gulf Contemporary Fashion", "N"],
            ["Arabic Bridal Aesthetic", "N"],
            ["Modern Modest Fashion", "N"],
            ["Lebanese Fashion", "N"],
            ["Istanbul Street Style", "N"],
            ["Turkish Modern Fashion", "N"],
            ["Central Asian Nomadic Dress", "N"],
            ["Mongolian Deel Fashion", "N"],
            ["Uzbek Traditional Fashion", "N"],
            ["Kazakh Traditional Dress", "N"],
            ["Silk Road Textile Aesthetic", "N"],
            ["Tajik Traditional Dress", "N"],
            ["Kyrgyz Nomadic Fashion", "N"],
          ],
        },
        {
          name: "AFRICAN FASHION",
          species: [
            ["Ankara / African Print Fashion", "N"],
            ["Kente Cloth Aesthetic", "N"],
            ["Yoruba Traditional Dress", "N"],
            ["Ghanaian Fashion", "N"],
            ["Senegalese Fashion", "N"],
            ["Nigerian Street Fashion", "N"],
            ["Ethiopian Traditional Dress", "X"],
            ["Maasai Aesthetic", "S"],
            ["Swahili Coast Fashion", "N"],
            ["Kenyan Street Fashion", "N"],
            ["East African Fashion", "N"],
            ["Tuareg Desert Fashion", "S"],
            ["Moroccan Fashion", "N"],
            ["Egyptian Modern Fashion", "N"],
            ["Berber Aesthetic", "S"],
            ["North African Kaftan", "N"],
            ["South African Street Fashion", "N"],
            ["South African Streetwear", "N"],
            ["Zulu Traditional Dress", "S"],
            ["Cape Malay Fashion", "N"],
            ["Afrofuturism", "X"],
            ["Afropunk Fashion", "N"],
            ["Afrobeats Fashion", "X"],
            ["African American Church Fashion", "N"],
            ["Afro-Caribbean Fashion", "N"],
            ["Classic Sapeur / La Sape", "N"],
            ["Contemporary Sapeur", "N"],
            ["Trinidad Carnival Fashion", "N"],
            ["Junkanoo Festival Dress", "N"],
            ["Caribbean Masquerade Fashion", "N"],
          ],
        },
        {
          name: "EUROPEAN FOLK & REGIONAL TRADITIONS",
          species: [
            ["Nordic Folk Dress", "N"],
            ["Norwegian Bunad", "N"],
            ["Swedish Folk Fashion", "N"],
            ["Finnish Folk Dress", "N"],
            ["Sámi Traditional Dress", "N"],
            ["German Dirndl Aesthetic", "N"],
            ["Austrian Tracht", "N"],
            ["Swiss Folk Fashion", "N"],
            ["Bavarian Aesthetic", "N"],
            ["Ukrainian Embroidery Fashion", "N"],
            ["Polish Folk Dress", "N"],
            ["Russian Folk Aesthetic", "N"],
            ["Romanian Traditional Dress", "N"],
            ["Balkan Folk Fashion", "N"],
            ["Hungarian Traditional Dress", "N"],
            ["Czech Folk Fashion", "N"],
            ["Croatian Traditional Dress", "N"],
            ["Bulgarian Folk Fashion", "N"],
            ["Spanish Flamenco Fashion", "N"],
            ["Andalusian Aesthetic", "N"],
            ["Italian Regional Folk", "N"],
            ["Greek Folk Dress", "N"],
            ["Portuguese Folk Fashion", "N"],
            ["Basque Traditional Dress", "N"],
            ["Catalan Fashion", "N"],
            ["Scottish Highland Dress", "N"],
            ["Irish Folk Fashion", "N"],
            ["Welsh Traditional Dress", "N"],
            ["Breton Folk Dress", "N"],
            ["Amish & Plain Dress", "S"],
            ["Mennonite Dress", "S"],
            ["Armenian Traditional Dress", "N"],
            ["Armenian Embroidery Aesthetic", "N"],
            ["Georgian Traditional Dress", "N"],
            ["Copenhagen Fashion Aesthetic", "N"],
            ["Stockholm Minimalism", "N"],
            ["Nordic Contemporary Fashion", "N"],
            ["Mediterranean Coastal Style", "N"],
            ["Amalfi Coast Aesthetic", "N"],
            ["Greek Island Fashion", "N"],
            ["Dutch Folk Dress", "N"],
          ],
        },
        {
          name: "LATIN AMERICAN FASHION",
          species: [
            ["Tehuana Aesthetic", "S"],
            ["Frida Kahlo Aesthetic", "S"],
            ["Mexican Traditional Dress", "N"],
            ["Mexican Embroidery Fashion", "N"],
            ["Charro Aesthetic", "S"],
            ["Chicano Fashion", "N"],
            ["Chicana Fashion", "N"],
            ["Brazilian Carnival Fashion", "N"],
            ["Brazilian Street Fashion", "N"],
            ["Brazilian Beachwear Culture", "N"],
            ["Favela Funk Fashion", "N"],
            ["Afro-Brazilian Fashion", "S"],
            ["Andean Traditional Dress", "N"],
            ["Peruvian Textile Aesthetic", "N"],
            ["Bolivian Cholita Fashion", "S"],
            ["Mapuche Traditional Dress", "S"],
            ["Latinx Streetwear", "X"],
            ["NYC Latin Fashion", "N"],
            ["Miami Latin Fashion", "N"],
            ["Argentine Fashion", "N"],
            ["Colombian Fashion", "N"],
            ["Reggaeton Fashion", "N"],
            ["Caribbean Festival Fashion", "N"],
            ["Jamaican Fashion", "N"],
            ["Reggae Aesthetic", "N"],
            ["Dancehall Fashion", "N"],
            ["Cuban Fashion", "N"],
            ["Guayabera Formal Style", "N"],
            ["New Orleans Creole Fashion", "N"],
            ["Mardi Gras Cultural Dress", "N"],
          ],
        },
        {
          name: "INDIGENOUS & FIRST NATIONS",
          species: [
            ["Plains Nations Regalia", "S"],
            ["Pacific Northwest Nations Dress", "S"],
            ["Southwestern Pueblo Fashion", "S"],
            ["Navajo Fashion", "S"],
            ["Inuit Traditional Dress", "S"],
            ["Indigenous Beadwork Aesthetic", "S"],
            ["Contemporary Indigenous Fashion", "N"],
            ["Two-Spirit Aesthetic", "S"],
            ["Amazonian Indigenous Dress", "S"],
            ["Andean Indigenous Textile Fashion", "S"],
            ["Aztec / Maya Contemporary Fashion", "S"],
            ["Mapuche Traditional Dress", "S"],
      ["Māori Fashion", "S"],
            ["Hawaiian Traditional Dress", "S"],
            ["Pacific Islander Fashion", "N"],
            ["Samoan Fashion", "S"],
            ["Aboriginal Australian Fashion", "S"],
            ["Polynesian Surf Culture Dress", "N"],
            ["Hawaiian Surf Revival Fashion", "N"],
          ],
        },
        {
          name: "FRENCH & FRANCOPHONE FASHION",
          species: [
            ["Parisian Chic", "N"],
            ["French Girl Style", "N"],
            ["Rive Gauche Aesthetic", "N"],
            ["Saint-Germain-des-Prés Style", "N"],
            ["Marais District Fashion", "N"],
            ["Provençal Fashion", "N"],
            ["Breton Stripe Aesthetic", "N"],
            ["French Countryside Fashion", "N"],
            ["Antwerp Six Aesthetic", "N"],
            ["Belgian Fashion", "N"],
            ["Swiss Fashion", "N"],
            ["Québécois Fashion", "N"],
            ["Francophone West African Fashion", "N"],
            ["Maghreb Fashion", "N"],
            ["La Sape (Francophone Cultural Link)", "N"],
            ["Dakar Fashion", "N"],
          ],
        },
        {
          name: "BRITISH & COMMONWEALTH FASHION",
          species: [
            ["British Heritage Fashion", "N"],
            ["Savile Row Aesthetic", "N"],
            ["Country House Style", "N"],
            ["British Seaside Fashion", "N"],
            ["English Rose Aesthetic", "N"],
            ["Scottish Fashion", "N"],
            ["Irish Fashion", "N"],
            ["Welsh Fashion", "N"],
            ["Australian Bush Fashion", "N"],
            ["New Zealand Fashion", "N"],
            ["Canadian Prairie Fashion", "N"],
            ["Anglo-Indian Fashion", "N"],
            ["Nigerian British Fashion", "X"],
            ["Caribbean British Fashion", "N"],
            ["East Asian British Fashion", "N"],
          ],
        },
        {
          name: "DIASPORIC & TRANSNATIONAL FASHION",
          species: [
            ["Taiwanese Street Style", "N"],
            ["Taiwanese Indie Fashion", "N"],
            ["Hong Kong Fashion", "N"],
            ["Cantonese Aesthetics", "N"],
            ["East Asian Diaspora Fashion", "N"],
            ["Asian American Fashion", "N"],
            ["Harajuku Diaspora", "N"],
            ["Hasidic Fashion", "N"],
            ["Modest Jewish Fashion", "N"],
            ["Mizrahi Traditional Dress", "N"],
            ["Sephardic Traditional Dress", "N"],
            ["Mizrahi Pop Aesthetic", "N"],
            ["Ashkenazi Intellectual Aesthetic", "N"],
            ["New York Jewish Intellectual Fashion", "N"],
            ["Kibbutz Aesthetic", "N"],
            ["Israeli Street Fashion", "N"],
            ["Tel Aviv Fashion Scene", "N"],
            ["Romani Traditional Dress", "S"],
            ["Sinti Traditional Dress", "S"],
            ["Flamenco Romani Roots", "S"],
            ["Romani Diaspora Fashion", "N"],
            ["Roma Wedding Fashion", "S"],
            ["Irish Traveller Fashion", "S"],
          ],
        },
        {
          name: "NORTH AMERICAN HERITAGE & REGIONAL",
          species: [
            ["WASP Aesthetic", "N"],
            ["New England Preppy", "N"],
            ["Ivy League", "N"],
            ["Nantucket Aesthetic", "N"],
            ["Cape Cod Style", "N"],
            ["Fishermancore", "N"],
            ["Southern Belle Aesthetic", "N"],
            ["Antebellum Aesthetic", "N"],
            ["Southern Gothic", "N"],
            ["Western / Cowboy Core", "N"],
            ["Rodeo Aesthetic", "N"],
            ["Saloon Girl Aesthetic", "N"],
            ["Frontier Workwear Aesthetic", "N"],
            ["Nashville Aesthetic", "N"],
            ["Southwestern Aesthetic", "N"],
            ["Desert Southwest Style", "N"],
            ["Vintage Americana", "N"],
            ["Rugged Americana", "N"],
            ["Heritage Core", "N"],
            ["Western Chic", "N"],
          ],
        },
        {
          name: "BLACK AMERICAN VERNACULAR & TRADITION",
          species: [
            ["Sunday Best Aesthetic", "N"],
            ["HBCU Homecoming Fashion", "N"],
            ["Black Greek Letter Organization Dress", "N"],
            ["Black Church Hat Tradition", "N"],
            ["Cookout Fashion Aesthetic", "N"],
            ["Black Southern Heritage Fashion", "N"],
            ["Juneteenth Fashion", "N"],
            ["Stepping & Stroll Fashion", "N"],
            ["Black Cotillion Aesthetic", "N"],
            ["Black Debutante Tradition", "N"],
          ],
        },
        {
          name: "POST-SOVIET & EASTERN BLOC CONTEMPORARY",
          species: [
            ["Moscow Contemporary Fashion", "N"],
            ["Tbilisi Fashion Aesthetic", "N"],
            ["Kyiv Street Fashion", "N"],
            ["Post-Soviet Identity Fashion", "N"],
            ["Gosha Rubchinskiy Aesthetic", "N"],
            ["Eastern Bloc Nostalgia Fashion", "N"],
            ["New East Fashion Movement", "N"],
            ["Warsaw Contemporary Fashion", "N"],
            ["Balkan Urban Fashion", "N"],
            ["Post-Soviet Workwear Revival", "N"],
          ],
        },
      ],
    };
const phylum3 = {
      number: 3,
      name: "Elemental & Environmental",
      emoji: "🌿",
      description: "Biomes, nature, and climate-driven aesthetics",
      classes: [
        {
          name: "FOREST & WOODLAND",
          species: [
            ["Forestcore", "N"],
            ["Darkforest Aesthetic", "N"],
            ["Darkwood Aesthetic", "N"],
            ["Old Growth Aesthetic", "N"],
            ["Pine Aesthetic", "N"],
            ["Birchcore", "N"],
            ["Lichen Aesthetic", "N"],
            ["Mosscore", "N"],
            ["Mushroomcore", "N"],
            ["Mycelium Aesthetic", "N"],
            ["Fern Aesthetic", "N"],
            ["Goblincore", "N"],
            ["Fairycore", "X"],
            ["Woodland Elf", "X"],
            ["Forest Witch", "X"],
            ["Treehouse Aesthetic", "N"],
            ["Tropicalcore", "N"],
            ["Junglecore", "N"],
            ["Rainforest Aesthetic", "N"],
            ["Dark Naturalism", "N"],
            ["Myco-Minimalism", "N"],
          ],
        },
        {
          name: "GARDEN & PASTORAL",
          species: [
            ["Cottagecore", "X"],
            ["Cottagecore Dark", "N"],
            ["Gardencore", "N"],
            ["Greenhouse Aesthetic", "N"],
            ["Walled Garden Aesthetic", "N"],
            ["Cottage Garden Aesthetic", "N"],
            ["Japanese Garden Aesthetic", "X"],
            ["Botanical Aesthetic", "N"],
            ["Meadowcore", "N"],
            ["Prairiecore & Great Plains", "N"],
            ["Wildflowercore", "N"],
            ["Floral / Bloom Aesthetic", "N"],
            ["Rosecore", "N"],
            ["Lavendercore", "N"],
            ["Sunflowercore", "N"],
            ["Dandelion Aesthetic", "N"],
            ["Honeycore", "N"],
            ["Herbalist & Apothecary", "N"],
            ["Harvestcore", "N"],
            ["Jamcore", "N"],
            ["Seedcore", "N"],
          ],
        },
        {
          name: "WATER & OCEAN",
          species: [
            ["Oceancore", "N"],
            ["Seafoamcore", "N"],
            ["Tidal Aesthetic", "N"],
            ["Coastal Fog Aesthetic", "N"],
            ["Seaside Aesthetic", "N"],
            ["Rockpool Aesthetic", "N"],
            ["Intertidal Aesthetic", "N"],
            ["Driftwood Aesthetic", "N"],
            ["Maritime Aesthetic", "N"],
            ["Sailor Aesthetic", "N"],
            ["Fishermancore", "X"],
            ["Whaler Aesthetic", "N"],
            ["Nauticalcore", "N"],
            ["Deep Sea Aesthetic", "N"],
            ["Abysscore", "N"],
            ["Bioluminescence Aesthetic", "N"],
            ["Mermaidcore", "N"],
            ["Selkiecore", "N"],
          ],
        },
        {
          name: "DESERT & ARID",
          species: [
            ["Desertcore", "N"],
            ["Arid Minimalism", "N"],
            ["Sandcore", "N"],
            ["Dunecore", "N"],
            ["Southwestern Aesthetic", "X"],
            ["Desert Southwest Style", "X"],
            ["Canyon Aesthetic", "N"],
            ["Mesa Aesthetic", "N"],
            ["Salt Flat Aesthetic", "N"],
            ["Saharan Aesthetic", "N"],
            ["Arabian Desert Aesthetic", "X"],
            ["Australian Outback Aesthetic", "N"],
            ["Wabi-Sabi Desert", "N"],
            ["Oasis Aesthetic", "N"],
            ["Nomadic Desert Fashion", "X"],
          ],
        },
        {
          name: "MOUNTAIN & HIGHLAND",
          species: [
            ["Mountaincore", "N"],
            ["Alpine Aesthetic", "N"],
            ["Highland Aesthetic", "N"],
            ["Scottish Highlands Aesthetic", "X"],
            ["Japanese Mountain Aesthetic", "X"],
            ["Sherpa Aesthetic", "SX"],
            ["Tundra Aesthetic", "N"],
            ["Glaciercore", "N"],
            ["Arctic Explorer", "N"],
            ["Gorpcore", "X"],
            ["Quiet Outdoors", "N"],
            ["Explorer Aesthetic", "N"],
            ["Mountaineer Aesthetic", "N"],
            ["Survivalist Aesthetic", "N"],
            ["Summit Aesthetic", "N"],
            ["Basecamp Aesthetic", "N"],
            ["Avalanche Aesthetic", "N"],
            ["Retro Ski Aesthetic", "N"],
          ],
        },
        {
          name: "RAIN & STORM",
          species: [
            ["Raincore", "N"],
            ["Puddlecore", "N"],
            ["Mistcore", "N"],
            ["Fogcore", "N"],
            ["Cloudcore", "N"],
            ["Stormcore", "N"],
            ["Thundercore", "N"],
            ["Greycore", "N"],
            ["Northern Gothic Weather Aesthetic", "X"],
            ["Wetlands Aesthetic", "N"],
            ["Bogcore", "N"],
            ["Monsoon Aesthetic", "N"],
          ],
        },
        {
          name: "FIRE & EARTH",
          species: [
            ["Volcaniccore", "N"],
            ["Lavacore", "N"],
            ["Embers Aesthetic", "N"],
            ["Candlecore", "N"],
            ["Hearthcore", "N"],
            ["Charcoal Aesthetic", "N"],
            ["Stonecore", "N"],
            ["Cavecore", "N"],
            ["Crystalcave Aesthetic", "N"],
            ["Mineralcore", "N"],
            ["Claycore", "N"],
            ["Terracottacore", "N"],
            ["Soil Aesthetic", "N"],
            ["Fossilcore", "N"],
            ["Gemcore", "N"],
            ["Ironcore", "X"],
          ],
        },
        {
          name: "WIND & AIR",
          species: [
            ["Feathercore", "N"],
            ["Prairie Wind Aesthetic", "N"],
            ["Typhoon Aesthetic", "X"],
            ["Windcore & Breezecore", "N"],
            ["Wind-Textile Aesthetic", "N"],
            ["Skyscape & Horizon", "N"],
            ["Thermal & Updraft Aesthetic", "N"],
          ],
        },
        {
          name: "CELESTIAL & COSMIC",
          species: [
            ["Mooncore", "N"],
            ["Full Moon Aesthetic", "N"],
            ["Lunar Aesthetic", "N"],
            ["Auroracore", "N"],
            ["Constellationcore", "N"],
            ["Stardustcore", "N"],
            ["Starlightcore", "N"],
            ["Meteorcore", "N"],
            ["Crystalcore", "N"],
            ["Suncore", "N"],
            ["Goldencore", "N"],
            ["Dawncore", "N"],
            ["Blue Hour Aesthetic", "N"],
            ["Duskcore", "N"],
            ["Twilightcore", "N"],
            ["Solstice Aesthetic", "N"],
            ["Eclipse Aesthetic", "N"],
            ["Spacecore", "X"],
            ["Galaxycore", "X"],
            ["Nebulacore", "X"],
          ],
        },
        {
          name: "SEASONAL",
          species: [
            ["Springcore", "N"],
            ["Cherryblossomcore", "N"],
            ["Pastel Springcore", "N"],
            ["Equinox Aesthetic", "N"],
            ["Summercore", "N"],
            ["Golden Hour Aesthetic", "N"],
            ["Beachcore", "N"],
            ["Heatwavecore", "N"],
            ["Midnight Sun Aesthetic", "N"],
            ["Autumncore", "N"],
            ["Pumpkincore", "N"],
            ["Maplecore", "N"],
            ["Cottagecore Autumn", "N"],
            ["Autumn Forest Aesthetic", "N"],
            ["Wintercore", "N"],
            ["Snowcore", "N"],
            ["Frostcore", "N"],
            ["Blizzardcore", "N"],
            ["Cozycore", "N"],
            ["Hyggecore", "X"],
            ["Polar Night Aesthetic", "N"],
          ],
        },
        {
          name: "CREATURE & ANIMAL",
          species: [
            ["Corvid Aesthetic", "N"],
            ["Owlcore", "N"],
            ["Batcore", "X"],
            ["Mothcore", "N"],
            ["Wolfcore", "N"],
            ["Spidercore", "N"],
            ["Deer Aesthetic", "N"],
            ["Foxcore", "N"],
            ["Bunnycore", "N"],
            ["Antlercore", "N"],
            ["Catcore", "N"],
            ["Bearcore", "N"],
            ["Horsecore", "N"],
            ["Cottagecore Animal Companions", "N"],
            ["Beecore", "N"],
            ["Butterflycore", "N"],
            ["Frogcore", "N"],
            ["Serpentcore", "N"],
            ["Whalecore", "X"],
            ["Dragoncore", "X"],
          ],
        },
        {
          name: "REWILDING & ECO-FASHION",
          species: [
            ["Solarpunk", "X"],
            ["Lunarpunk", "X"],
            ["Ecofashion", "N"],
            ["Sustainable Fashion Aesthetic", "N"],
            ["Upcycled Fashion", "N"],
            ["Zero Waste Fashion", "N"],
            ["Regenerative Fashion", "N"],
            ["Fungi Fashion", "N"],
            ["Biofashion", "X"],
            ["Rewilding Aesthetic", "N"],
            ["Forager Aesthetic", "N"],
            ["Wild Swimming Aesthetic", "X"],
            ["Land Art Fashion", "N"],
            ["Seed Saving Aesthetic", "N"],
            ["Urban Jungle Aesthetic", "N"],
            ["Concrete Garden Aesthetic", "N"],
            ["Rooftop Garden Aesthetic", "N"],
            ["Urban Rewilding Aesthetic", "N"],
          ],
        },
      ],
    };
const phylum4 = {
      number: 4,
      name: "Body & Presentation",
      emoji: "⚡",
      description:
        "The body itself — gender, physical ability, age, modification, and how dress negotiates with flesh",
      classes: [
        {
          name: "FEMININE EXPRESSION",
          species: [
            ["Pin-Up Feminine", "X"],
            ["Vintage Feminine", "X"],
            ["Classic Feminine Aesthetic", "N"],
            ["Femme Fatale", "X"],
            ["Power Feminine", "N"],
            ["Fierce Feminine", "N"],
            ["Sophisticated Feminine", "N"],
            ["Femme Royale", "N"],
            ["Delicate Feminine", "N"],
            ["Soft Feminine", "X"],
            ["Romantic Feminine", "X"],
            ["Ethereal Feminine", "N"],
            ["Cute Feminine", "N"],
            ["Athletic Feminine", "N"],
            ["Intellectual Feminine", "N"],
            ["Maternal Feminine", "N"],
            ["Hyperfeminine Aesthetic", "N"],
            ["Maximalist Feminine", "N"],
            ["Minimalist Feminine", "N"],
            ["Camp Feminine", "N"],
            ["Dark Feminine", "X"],
            ["Girlhood Aesthetic", "N"],
            ["Boho Feminine", "N"],
          ],
        },
        {
          name: "MASCULINE EXPRESSION",
          species: [
            ["Dandy Masculine", "X"],
            ["Workwear Masculine", "X"],
            ["Military Masculine", "X"],
            ["Vintage Masculine", "X"],
            ["Classic Masculine Aesthetic", "N"],
            ["Rugged Masculine", "N"],
            ["Refined Masculine", "N"],
            ["Soft Masculine", "X"],
            ["Romantic Masculine", "N"],
            ["Silver Fox Masculine", "X"],
            ["Old Man Style", "N"],
            ["Intellectual Masculine", "N"],
            ["Metrosexual Aesthetic", "N"],
            ["Athletic Masculine", "N"],
            ["Lumberjack Masculine", "X"],
            ["Dad Aesthetic", "N"],
            ["Preppy Masculine", "X"],
            ["Streetwear Masculine", "X"],
            ["Rockstar Masculine", "X"],
            ["Cowboy Masculine", "X"],
          ],
        },
        {
          name: "ANDROGYNOUS EXPRESSION",
          species: [
            ["Garçonne Aesthetic", "N"],
            ["Glam Androgyny", "X"],
            ["New Wave Androgyny", "N"],
            ["Androgynous Fashion", "N"],
            ["Androgynous Chic", "N"],
            ["Soft Androgyny", "N"],
            ["Hard Androgyny", "N"],
            ["Gender-Fluid / Gender Blur Aesthetic", "N"],
            ["Tomboy Aesthetic", "N"],
            ["Genderqueer Fashion", "N"],
            ["Non-Binary Fashion", "N"],
            ["Gender-Neutral Fashion", "N"],
            ["Genderless Fashion", "N"],
            ["Bigendered Aesthetic", "N"],
            ["Agender Aesthetic", "N"],
            ["Third Gender Aesthetic", "SX"],
            ["Intersex Aesthetic", "S"],
          ],
        },
        {
          name: "DRAG & PERFORMANCE",
          species: [
            ["Theatrical Cross-Dressing", "N"],
            ["Pantomime Dame Aesthetic", "N"],
            ["Drag Queen Aesthetic", "N"],
            ["Drag King Aesthetic", "N"],
            ["Bio Queen Aesthetic", "N"],
            ["Faux Queen Aesthetic", "N"],
            ["Camp Drag", "X"],
            ["Pageant Drag", "N"],
            ["High Glamour Drag", "N"],
            ["Avant-Garde Drag", "N"],
            ["Spooky Drag", "N"],
            ["Clown Drag", "X"],
            ["Club Kid Drag", "X"],
            ["RuPaul\\'s Drag Race Aesthetic", "N"],
            ["Gender Illusion Aesthetic", "N"],
          ],
        },
        {
          name: "QUEER GENDER CODES",
          species: [
            ["Butch Aesthetic", "X"],
            ["Femme Aesthetic", "X"],
            ["Soft Butch Aesthetic", "N"],
            ["Baby Butch Aesthetic", "N"],
            ["Stone Femme Aesthetic", "N"],
            ["High Femme Aesthetic", "N"],
            ["Chapstick Lesbian Aesthetic", "N"],
            ["Lipstick Lesbian Aesthetic", "N"],
            ["Dyke Fashion", "X"],
            ["Leather Daddy Aesthetic", "N"],
            ["Bear Culture Fashion", "X"],
            ["Otter Aesthetic", "N"],
            ["Twink Aesthetic", "X"],
            ["Masc Aesthetic", "X"],
            ["Ball Culture Fashion", "S"],
            ["Sapphic Aesthetic", "X"],
            ["Trans Feminine Aesthetic", "N"],
            ["Trans Masculine Aesthetic", "N"],
            ["Non-Binary Aesthetic", "X"],
            ["Queer Cottagecore", "X"],
            ["Corset Aesthetic", "X"],
            ["Tattoo Aesthetic", "N"],
            ["Heavy Metal Body Aesthetic", "N"],
            ["Compression Aesthetic", "N"],
            ["Shaved Head Aesthetic", "N"],
            ["Long Hair Masculine Aesthetic", "N"],
            ["Short Hair Feminine Aesthetic", "N"],
            ["Body Hair Aesthetic", "N"],
            ["Gender Makeup Aesthetic", "N"],
            ["Androgynous Makeup Aesthetic", "N"],
            ["Drag Makeup Aesthetic", "N"],
            ["Masculine Nail Aesthetic", "N"],
            ["Natural Face Aesthetic", "N"],
          ],
        },
        {
          name: "MODEST & COVERED PRESENTATION",
          species: [
            ["Hijabi Fashion", "X"],
            ["Abaya Fashion", "X"],
            ["Tzniut Fashion", "X"],
            ["Mormon Modest Fashion", "X"],
            ["Modest Fashion General", "X"],
            ["Modest Streetwear", "N"],
            ["Full Coverage Streetwear", "N"],
            ["Layering as Modesty Aesthetic", "N"],
            ["Burkini Aesthetic", "S"],
            ["Covered Feminine Aesthetic", "N"],
            ["Loose Silhouette Aesthetic", "N"],
            ["Anti-Revealing Aesthetic", "N"],
            ["Decolonial Modest Dress", "N"],
            ["Reclaimed Modesty Aesthetic", "N"],
          ],
        },
        {
          name: "ADAPTIVE & DISABILITY FASHION",
          species: [
            ["Wheelchair Fashion Aesthetic", "N"],
            ["Prosthetic Fashion Aesthetic", "N"],
            ["Seated Dressing Aesthetic", "N"],
            ["Sensory-Friendly Fashion", "N"],
            ["Adaptive Streetwear", "N"],
            ["Accessible Runway Aesthetic", "N"],
            ["Chronic Illness Fashion", "N"],
            ["Visible Disability Chic", "N"],
            ["Invisible Disability Fashion", "N"],
            ["Adaptive Activewear", "N"],
            ["Medical Device Fashion", "N"],
            ["Universal Design Aesthetic", "N"],
            ["Neurodivergent Sensory-Friendly Fashion", "N"],
          ],
        },
        {
          name: "PLUS-SIZE & BODY LIBERATION",
          species: [
            ["Plus-Size Fashion Aesthetic", "N"],
            ["Fat Liberation Fashion", "N"],
            ["Size-Inclusive Runway", "N"],
            ["Body Positive Aesthetic", "N"],
            ["Plus-Size Streetwear", "N"],
            ["Big & Tall Fashion", "N"],
            ["Fatshion Aesthetic", "N"],
            ["Body Neutrality Fashion", "N"],
            ["Anti-Diet Fashion Aesthetic", "N"],
            ["Plus-Size Vintage", "N"],
            ["Size-Inclusive Lingerie Aesthetic", "N"],
          ],
        },
        {
          name: "AGE & BODY-SPECIFIC AESTHETICS",
          species: [
            ["Maternity Fashion", "N"],
            ["Pregnancy Aesthetics", "N"],
            ["Elder Style", "N"],
            ["Advanced Style", "N"],
            ["Silver Foxcore", "N"],
            ["Ageless Aesthetic", "N"],
            ["Anti-Age Dressing", "N"],
            ["Youth-Adjacent Elder", "N"],
            ["Retirement Aesthetic", "N"],
            ["Teen Body Dressing", "N"],
            ["Tween Aesthetic", "N"],
          ],
        },
      ],
    };
const phylum5 = {
      number: 5,
      name: "Lifestyle & Identity",
      emoji: "☕",
      description:
        "Professions, hobbies, physical pursuits, and the identities built around how people spend their time",
      classes: [
        {
          name: "PROFESSIONAL & CORPORATE IDENTITY",
          species: [
            ["Power Dressing", "X"],
            ["Corporate Core", "N"],
            ["Business Casual", "N"],
            ["Lawyer Aesthetic", "N"],
            ["Finance Bro Aesthetic", "N"],
            ["Doctor Aesthetic", "N"],
            ["Nurse Aesthetic", "N"],
            ["Academia Professor", "N"],
            ["Academic Researcher Aesthetic", "N"],
            ["Architect Aesthetic", "N"],
            ["Creative Director Aesthetic", "N"],
            ["Tech Worker Aesthetic", "N"],
            ["Startup Founder Aesthetic", "N"],
            ["Girlboss Aesthetic", "N"],
            ["Freelancer Aesthetic", "N"],
            ["Barista Aesthetic", "N"],
            ["Florist Aesthetic", "N"],
            ["Bookshop Owner Aesthetic", "N"],
            ["Librarian Aesthetic", "N"],
            ["Chef Aesthetic", "N"],
            ["Palaeontologist Aesthetic", "N"],
          ],
        },
        {
          name: "ROMANTIC & RELATIONAL IDENTITY",
          species: [
            ["Romantic", "X"],
            ["Love Letter Aesthetic", "N"],
            ["Coquette", "X"],
            ["Date Night Aesthetic", "N"],
            ["Honeymoon Aesthetic", "N"],
            ["Bride Aesthetic", "N"],
            ["Wedding Guest Aesthetic", "N"],
            ["Anniversary Aesthetic", "N"],
            ["Long-Term Relationship Aesthetic", "N"],
            ["Situationship Aesthetic", "N"],
            ["Single Life Aesthetic", "N"],
            ["Divorce Glow-Up Aesthetic", "N"],
            ["Hot Girl Summer", "N"],
            ["Brat Summer", "X"],
            ["Lingerie as Outerwear", "N"],
            ["Bedroom Fashion", "N"],
            ["Main Character Aesthetic", "N"],
            ["Soft Girl Lifestyle", "N"],
            ["Heartbreak Aesthetic", "N"],
          ],
        },
        {
          name: "FAITH & SPIRITUAL IDENTITY",
          species: [
            ["Trad Catholic Aesthetic", "N"],
            ["Christian Girl Autumn", "N"],
            ["Mormon Fashion", "N"],
            ["Evangelical Aesthetic", "N"],
            ["Nun Aesthetic", "N"],
            ["Monk Aesthetic", "N"],
            ["Orthodox Christian Aesthetic", "S"],
            ["Sikh Fashion Identity", "S"],
            ["Hindu Devotional Fashion", "S"],
            ["Buddhist Aesthetic", "N"],
            ["New Age Spiritual Fashion", "N"],
            ["Spiritual But Not Religious Aesthetic", "N"],
            ["Witchcraft Fashion", "X"],
            ["Crystal Healing Aesthetic", "N"],
            ["Pagan Fashion", "N"],
          ],
        },
        {
          name: "AGE & GENERATIONAL IDENTITY",
          species: [
            ["Tween Aesthetic", "N"],
            ["Teenager Aesthetic", "N"],
            ["College Aesthetic", "N"],
            ["Twenty-Something Aesthetic", "N"],
            ["Thirty-Something Aesthetic", "N"],
            ["Gen Z Aesthetic", "N"],
            ["Millennial Aesthetic", "N"],
            ["Gen X Cool", "N"],
            ["Midlife Chic", "N"],
            ["Ageless Fashion", "N"],
            ["Coastal Grandma", "N"],
            ["Eclectic Grandpa", "X"],
            ["Silver Fox Aesthetic", "N"],
            ["Elegant Aging Aesthetic", "N"],
            ["Grandparent Style", "N"],
          ],
        },
        {
          name: "PARENTHOOD & FAMILY IDENTITY",
          species: [
            ["Momcore", "N"],
            ["Toddler Mom Aesthetic", "N"],
            ["School Run Aesthetic", "N"],
            ["Pilates Mom Aesthetic", "N"],
            ["Pinterest Mom Aesthetic", "N"],
            ["Tiger Mom Aesthetic", "N"],
            ["Crunchy Mom Aesthetic", "S"],
            ["Free Range Parent Aesthetic", "N"],
            ["Dadcore", "N"],
            ["Stay-at-Home Dad Aesthetic", "N"],
            ["Pregnancy Chic", "N"],
            ["New Parent Survival Aesthetic", "N"],
          ],
        },
        {
          name: "WELLNESS & SELF-OPTIMIZATION",
          species: [
            ["That Girl", "N"],
            ["Clean Girl", "N"],
            ["Morning Routine Aesthetic", "N"],
            ["Sunday Reset Aesthetic", "N"],
            ["Digital Detox Aesthetic", "N"],
            ["Soft Life Aesthetic", "N"],
            ["Yoga Aesthetic", "N"],
            ["Pilates Princess", "N"],
            ["Reformer Aesthetic", "N"],
            ["Barre Aesthetic", "N"],
            ["Hot Girl Walk", "N"],
            ["Gym Aesthetic", "N"],
            ["Gym Rat Aesthetic", "N"],
            ["Athletic Minimalism", "N"],
            ["Biohacker / Wellness Optimization", "N"],
            ["Wellnesscore", "N"],
            ["Sobriety Aesthetic", "N"],
            ["Slow Food Aesthetic", "N"],
            ["Intuitive Eating Aesthetic", "S"],
          ],
        },
        {
          name: "DOMESTIC & HOMEMAKER",
          species: [
            ["Homemaker Aesthetic", "N"],
            ["Tradwife Aesthetic", "N"],
            ["Stay-at-Home Girlfriend Aesthetic", "N"],
            ["Hosting Aesthetic", "N"],
            ["Hygge Lifestyle", "X"],
            ["Slow Living Aesthetic", "N"],
            ["Romanticized Domesticity", "N"],
            ["Grandmacore", "X"],
            ["Grandpacore", "X"],
            ["Baking Aesthetic", "N"],
            ["Canning Aesthetic", "N"],
            ["Knitting Aesthetic", "N"],
            ["Sewing Aesthetic", "N"],
            ["Apron Aesthetic", "N"],
            ["Craft Room Aesthetic", "N"],
            ["Bookworm Aesthetic", "N"],
            ["Reading Nook Aesthetic", "N"],
            ["Cottagecore Homesteading", "N"],
            ["Japanese Concept of Home", "X"],
            ["Capsule Home Aesthetic", "N"],
            ["Dog Parent Aesthetic", "N"],
            ["Cat Parent Aesthetic", "N"],
            ["Dog Walk Chic", "N"],
            ["Farmers Market Aesthetic", "N"],
            ["Homemaker Chic", "N"],
          ],
        },
        {
          name: "DIGITAL & NOMADIC IDENTITY",
          species: [
            ["Digital Nomad", "N"],
            ["Van Life Aesthetic", "N"],
            ["Tiny House Aesthetic", "N"],
            ["Off-Grid Aesthetic", "X"],
            ["Remote Work Aesthetic", "N"],
            ["Laptop Lifestyle Aesthetic", "N"],
            ["Tech Minimalist", "N"],
            ["Digital Minimalism", "N"],
            ["Content Creator Aesthetic", "N"],
            ["Influencer Aesthetic", "N"],
            ["Streamer Aesthetic", "N"],
            ["Gamer Aesthetic", "N"],
            ["Digital Nomad Archivalist", "N"],
          ],
        },
        {
          name: "SPORT & ATHLETIC IDENTITY",
          species: [
            ["Soccer / Football Casual", "X"],
            ["Rugby Aesthetic", "N"],
            ["Cricket Aesthetic", "N"],
            ["Baseball Aesthetic", "N"],
            ["American Football Aesthetic", "N"],
            ["Streetball Aesthetic", "N"],
            ["Tennis Aesthetic", "N"],
            ["Golf Aesthetic", "N"],
            ["Fencing Aesthetic", "N"],
            ["Boxing Aesthetic", "N"],
            ["Martial Arts Aesthetic", "N"],
            ["Swimming Aesthetic", "N"],
            ["Athleisure / Sporty Chic", "N"],
            ["Track & Field Aesthetic", "N"],
            ["Runner\\'s Aesthetic", "N"],
            ["Marathon Runner Aesthetic", "N"],
            ["Cycling Aesthetic", "N"],
            ["Climbing Aesthetic", "N"],
            ["Trail Running Aesthetic", "N"],
            ["Skateboarding", "X"],
            ["Snowboard Culture", "N"],
            ["Ski Fashion", "N"],
            ["Surf Aesthetic", "N"],
            ["Coastal Athletic", "N"],
            ["Wetsuit Culture", "N"],
            ["Open Water Swimming Aesthetic", "N"],
            ["Wild Swimming Aesthetic", "N"],
            ["Kayak Culture", "N"],
            ["Sailing Aesthetic", "N"],
            ["Beach Bum Aesthetic", "N"],
            ["Coastal Cowgirl", "N"],
          ],
        },
        {
          name: "NIGHTLIFE & GOING OUT",
          species: [
            ["Speakeasy Aesthetic", "N"],
            ["Jazz Club Aesthetic", "N"],
            ["Cocktail Aesthetic", "N"],
            ["Black Tie Aesthetic", "N"],
            ["Going Out Aesthetic", "N"],
            ["Club Fashion", "N"],
            ["After Party Aesthetic", "N"],
            ["Karaoke Aesthetic", "N"],
            ["Rooftop Bar Aesthetic", "N"],
            ["Red Carpet Aesthetic", "N"],
            ["Gala Aesthetic", "N"],
            ["Brunch Aesthetic", "N"],
            ["Dinner Party Aesthetic", "N"],
            ["Gallery Opening Aesthetic", "N"],
            ["Festival Fashion General", "N"],
            ["Concert Aesthetic", "N"],
            ["Grand Tour Aesthetic", "N"],
            ["Safari Explorer", "X"],
            ["Vintage Travel Aesthetic", "N"],
            ["Jet-Set Aesthetic", "N"],
            ["Island Hopper Aesthetic", "N"],
            ["Backpacker Aesthetic", "N"],
            ["Hostel Aesthetic", "N"],
            ["Gap Year Aesthetic", "N"],
            ["Study Abroad Aesthetic", "N"],
            ["Expat Aesthetic", "N"],
            ["Slow Travel Aesthetic", "N"],
            ["Road Trip Aesthetic", "N"],
            ["Train Travel Aesthetic", "N"],
            ["Solo Female Traveller Aesthetic", "N"],
            ["Pilgrim Aesthetic", "X"],
            ["Overlanding Aesthetic", "N"],
            ["Dark Tourism Aesthetic", "N"],
          ],
        },
        {
          name: "MILITARY HERITAGE & UNIFORM LINEAGE",
          species: [
            ["MA-1 Bomber Jacket Lineage", "N"],
            ["Field Jacket Heritage", "N"],
            ["Combat Boot Fashion Lineage", "N"],
            ["Cargo Pant Aesthetic", "N"],
            ["Military Surplus Heritage", "N"],
            ["Naval Heritage Fashion", "N"],
            ["Aviation Heritage Fashion", "N"],
            ["Camouflage Fashion Lineage", "N"],
            ["Military Dress Uniform Influence", "N"],
            ["Trench Coat Lineage", "N"],
            ["Service Academy Fashion", "N"],
            ["Military Spouse Aesthetic", "N"],
          ],
        },
      ],
    };
const phylum6 = {
      number: 6,
      name: "Status & Class",
      emoji: "💎",
      description: "Wealth, exclusivity, and social rung projection",
      classes: [
        {
          name: "OLD MONEY & INHERITED WEALTH",
          species: [
            ["Landed Gentry Aesthetic", "N"],
            ["British Country House", "X"],
            ["Grouse Moor Aesthetic", "N"],
            ["Hunt Ball Aesthetic", "N"],
            ["Tattersall Aesthetic", "N"],
            ["Gentleman\\'s Club Aesthetic", "N"],
            ["Noblesse Oblige Aesthetic", "N"],
            ["Aristocrat Core", "N"],
            ["Patrician Aesthetic", "N"],
            ["Heritage Elegance", "X"],
            ["Ancestral Portrait Aesthetic", "N"],
            ["Old Money", "N"],
            ["Old Money Academia", "N"],
            ["Old Money Sport", "N"],
            ["Private School Aesthetic", "N"],
            ["Boarding School Aesthetic", "N"],
            ["Finishing School Aesthetic", "N"],
            ["Debutante Aesthetic", "N"],
            ["Quiet Luxury", "N"],
            ["Stealth Wealth", "N"],
            ["Inherited Wardrobe Aesthetic", "X"],
          ],
        },
        {
          name: "NEW MONEY & VISIBLE WEALTH",
          species: [
            ["Gilded Age Aesthetic", "N"],
            ["Nouveau Riche Aesthetic", "N"],
            ["New Money Aesthetic", "N"],
            ["Couture Client Aesthetic", "N"],
            ["Trophy Dressing", "N"],
            ["Designer Label Aesthetic", "N"],
            ["Full Look Aesthetic", "N"],
            ["Logomania", "N"],
            ["Fur & Excess Aesthetic", "N"],
            ["Gold Everything Aesthetic", "N"],
            ["Diamond Aesthetic", "N"],
            ["It Bag Aesthetic", "N"],
            ["Watch Culture Aesthetic", "N"],
            ["Sneakerhead Luxury", "N"],
            ["Luxury Streetwear", "N"],
            ["Bling Era Aesthetic", "X"],
            ["Sports Money Aesthetic", "N"],
            ["Hypebeast Aesthetic", "N"],
            ["Streetwear Elite", "N"],
            ["Urban Luxe Aesthetic", "N"],
            ["Red Carpet Wealth Aesthetic", "N"],
            ["Tech Mogul Aesthetic", "N"],
            ["Billionaire Casual", "N"],
            ["Cyber-Rich", "N"],
            ["Oil Money Aesthetic", "N"],
          ],
        },
        {
          name: "ASPIRATIONAL & NEAR-LUXURY",
          species: [
            ["Investment Piece Aesthetic", "N"],
            ["Capsule Wardrobe Aspiration", "N"],
            ["Quiet Aspiration", "N"],
            ["Aspirational Minimalism", "N"],
            ["Affordable Luxury Aesthetic", "N"],
            ["Masstige Aesthetic", "N"],
            ["High Street Luxury Mimicry", "N"],
            ["Fast Fashion Luxe", "N"],
            ["Dupe Culture Aesthetic", "N"],
            ["Inspired By Aesthetic", "N"],
            ["Credit Card Luxury Aesthetic", "N"],
            ["Vintage Luxury Aesthetic", "N"],
            ["Pre-Loved Designer Aesthetic", "N"],
            ["Archive Fashion Aesthetic", "N"],
            ["Rare Bag Aesthetic", "N"],
            ["Rental Fashion Aesthetic", "N"],
            ["Sample Sale Aesthetic", "N"],
            ["Trade Up Aesthetic", "N"],
            ["Personal Shopper Aesthetic", "N"],
          ],
        },
        {
          name: "SOCIAL ASPIRATION & WEALTH PERFORMANCE",
          species: [
            ["Country Club", "X"],
            ["Equestrian Aesthetic", "N"],
            ["Polo Aesthetic", "N"],
            ["Golf Aesthetic", "N"],
            ["Tennis Aesthetic", "N"],
            ["Resort Wear", "N"],
            ["Yacht Aesthetic", "N"],
            ["Ski Lodge Aesthetic", "N"],
            ["Aspen Aesthetic", "N"],
            ["Hamptons Aesthetic", "N"],
            ["Palm Beach Aesthetic", "N"],
            ["Old Money", "X"],
            ["Quiet Luxury", "X"],
            ["Lazy Luxury", "N"],
            ["Rich Mom", "N"],
            ["Office Siren", "N"],
            ["City Girl Chic", "N"],
            ["Coastal Granddaughter", "N"],
            ["Mob Wife", "X"],
            ["Upper West Side Aesthetic", "N"],
            ["Rural Creative Professional Aesthetic", "N"],
            ["Quiet Achiever Aesthetic", "N"],
          ],
        },
        {
          name: "PREPPY & COLLEGIATE STATUS",
          species: [
            ["WASP Aesthetic", "X"],
            ["New England Preppy", "X"],
            ["Ivy League", "N"],
            ["Trad Prep", "N"],
            ["Brooks Brothers Aesthetic", "N"],
            ["Preppy", "N"],
            ["Dark Prep", "N"],
            ["Mod Prep", "N"],
            ["Southern Prep", "N"],
            ["Coastal Prep", "N"],
            ["Campus Prep", "N"],
            ["J.Crew Aesthetic", "N"],
            ["Nantucket Red Aesthetic", "N"],
            ["Sport Prep", "N"],
            ["Equestrian Prep", "N"],
            ["Sailing Prep", "N"],
            ["Ski Prep", "N"],
            ["Lacrosse Aesthetic", "N"],
            ["Field Hockey Aesthetic", "N"],
            ["Crew Aesthetic", "N"],
            ["Tennis Whites Aesthetic", "N"],
          ],
        },
        {
          name: "EUROPEAN LUXURY ESTABLISHMENT",
          species: [
            ["Parisian Chic", "X"],
            ["French Girl Style", "X"],
            ["Bon Chic Bon Genre", "X"],
            ["Italian Elegance", "N"],
            ["Milanese Aesthetic", "N"],
            ["Roman Aristocrat Aesthetic", "N"],
            ["Florentine Intellectual Aesthetic", "N"],
            ["British Heritage Fashion", "X"],
            ["Savile Row Aesthetic", "X"],
            ["Portuguese Elegance", "N"],
            ["Côte d\\'Azur Aesthetic", "N"],
            ["Capri Aesthetic", "N"],
            ["Portofino Aesthetic", "N"],
            ["Mykonos Luxury Aesthetic", "N"],
            ["Ibiza Luxury Aesthetic", "N"],
            ["Saint-Tropez Aesthetic", "N"],
            ["Swiss Precision Aesthetic", "N"],
            ["Viennese Elegance", "N"],
            ["Monaco Chic", "X"],
            ["Scandinavian Quiet Luxury", "N"],
            ["Bohemian Aristocracy", "X"],
          ],
        },
        {
          name: "UPPER EAST SIDE & METROPOLITAN ELITE",
          species: [
            ["Upper East Side", "X"],
            ["Park Avenue Aesthetic", "N"],
            ["Fifth Avenue Aesthetic", "N"],
            ["Metropolitan Museum Aesthetic", "N"],
            ["Lincoln Center Aesthetic", "N"],
            ["Philanthropist Aesthetic", "N"],
            ["Board Member Aesthetic", "N"],
            ["Society Woman Aesthetic", "N"],
            ["Power Lunch Aesthetic", "N"],
            ["Corner Office Aesthetic", "N"],
            ["Townhouse Aesthetic", "N"],
            ["Pied-à-Terre Aesthetic", "N"],
            ["The Luncheon Aesthetic", "X"],
            ["Junior League Aesthetic", "N"],
            ["Charity Gala Aesthetic", "N"],
            ["Boston Brahmin Aesthetic", "N"],
            ["Chicago Old Money Aesthetic", "N"],
            ["Washington DC Power Aesthetic", "N"],
            ["San Francisco Tech Elite Aesthetic", "N"],
          ],
        },
        {
          name: "GLOBAL ULTRA-LUXURY",
          species: [
            ["Jet Set Aesthetic", "X"],
            ["Private Island Aesthetic", "N"],
            ["Superyacht Aesthetic", "N"],
            ["Private Jet Lifestyle Aesthetic", "N"],
            ["Riviera Aesthetic", "N"],
            ["Ski Chalet Luxury", "N"],
            ["Mountain Resort Aesthetic", "N"],
            ["Dubai Luxury Aesthetic", "N"],
            ["Gulf Royalty Aesthetic", "N"],
            ["Doha Royal Aesthetic", "N"],
            ["Tokyo Luxury Aesthetic", "N"],
            ["Shanghai New Money Aesthetic", "N"],
            ["Lagos Elite Aesthetic", "N"],
            ["São Paulo Paulistano Elite Aesthetic", "N"],
            ["Safari Luxury", "X"],
            ["Russian Oligarch Aesthetic", "S"],
            ["Art Collector Aesthetic", "N"],
            ["Art Basel Jet Set Aesthetic", "N"],
            ["Wine Collector Aesthetic", "N"],
            ["Couture House Aesthetic", "N"],
            ["Bespoke Tailoring Aesthetic", "N"],
            ["Handmade Shoe Aesthetic", "N"],
            ["Private Member\\'s Club Aesthetic", "N"],
            ["Seven Star Aesthetic", "N"],
            ["Concierge Lifestyle Aesthetic", "N"],
            ["Luxury Car Aesthetic", "N"],
          ],
        },
        {
          name: "INSTITUTIONAL & CEREMONIAL STATUS",
          species: [
            ["Ancient Order Aesthetic", "N"],
            ["Religious Vestment Aesthetic", "X"],
            ["Judicial Robes Aesthetic", "N"],
            ["Academic Regalia", "N"],
            ["Masonic Aesthetic", "N"],
            ["Military Dress Uniform", "X"],
            ["Royal Court Dress", "X"],
            ["Coronation Aesthetic", "N"],
            ["Diplomatic Aesthetic", "N"],
            ["State Occasion Dress", "N"],
            ["Inauguration Aesthetic", "N"],
            ["Commencement Aesthetic", "N"],
            ["Knighthood Investiture Aesthetic", "N"],
            ["State Funeral Aesthetic", "N"],
            ["Award Ceremony Aesthetic", "N"],
            ["Olympic Ceremony Aesthetic", "N"],
            ["Politician Aesthetic", "N"],
          ],
        },
        {
          name: "COUNTER-STATUS & ANTI-WEALTH SIGNALING",
          species: [
            ["Intellectual Poverty Aesthetic", "N"],
            ["Trustafarian", "N"],
            ["Trustfund Grunge", "N"],
            ["Rich Kid Grunge", "N"],
            ["Normcore", "X"],
            ["No Logo Aesthetic", "N"],
            ["Anti-Brand Aesthetic", "N"],
            ["Quiet Anti-Luxury", "N"],
            ["Conspicuous Non-Consumption", "N"],
            ["Invisible Luxury Aesthetic", "N"],
            ["Expensive Basic Aesthetic", "N"],
            ["Stealth Poor Aesthetic", "N"],
            ["Bobos Aesthetic", "N"],
            ["Gorpcore", "X"],
            ["Silicon Valley Minimalism", "N"],
            ["Stealth Tech Wealth Aesthetic", "N"],
            ["Art World Intellectual", "N"],
            ["Art Critic Aesthetic", "N"],
            ["Literary Elite Aesthetic", "N"],
            ["Gallery Regular Aesthetic", "N"],
            ["Curated Minimalist Aesthetic", "N"],
          ],
        },
      ],
    };
const phylum7 = {
      number: 7,
      name: "Subcultural",
      emoji: "🎸",
      description: "Subcultures, movements, and resistance styles",
      classes: [
        {
          name: "MOD & BRIT CULTURE",
          species: [
            ["Mod Aesthetic", "N"],
            ["Carnaby Street", "X"],
            ["Mod Girl", "N"],
            ["Mod Revival", "N"],
            ["1970s Mod Revival", "N"],
            ["Neo-Mod", "N"],
            ["Britpop Aesthetic", "N"],
            ["Oasis Aesthetic", "N"],
            ["Blur Aesthetic", "N"],
            ["Casuals Aesthetic", "N"],
            ["Terrace Fashion", "N"],
            ["Blokecore", "X"],
            ["Chav Aesthetic", "N"],
            ["Council Estate Fashion", "N"],
            ["Ned Aesthetic", "N"],
          ],
        },
        {
          name: "FOLK & ROOTS SUBCULTURE",
          species: [
            ["Woody Guthrie Aesthetic", "N"],
            ["Pete Seeger Aesthetic", "N"],
            ["1960s Folk Aesthetic", "N"],
            ["Joan Baez Aesthetic", "N"],
            ["Bob Dylan Aesthetic", "N"],
            ["Bluegrass Aesthetic", "N"],
            ["Classic Country Aesthetic", "N"],
            ["Nudie Suit Aesthetic", "N"],
            ["Dolly Parton Aesthetic", "N"],
            ["Outlaw Country", "N"],
            ["Americana Music Fashion", "N"],
            ["Modern Folk Aesthetic", "N"],
            ["Indie Folk", "X"],
            ["New Folk Fashion", "N"],
            ["Alt-Country Aesthetic", "N"],
          ],
        },
        {
          name: "PUNK LINEAGE",
          species: [
            ["New York Dolls Aesthetic", "N"],
            ["UK Punk Aesthetic", "N"],
            ["Sex Pistols Aesthetic", "N"],
            ["Vivienne Westwood Punk", "N"],
            ["Sid Vicious Aesthetic", "N"],
            ["CBGB Aesthetic", "N"],
            ["New York Punk", "N"],
            ["Ramones Aesthetic", "N"],
            ["Patti Smith Aesthetic", "N"],
            ["Crass Aesthetic", "N"],
            ["Anarcho-Punk", "N"],
            ["DIY Punk", "N"],
            ["Post-Punk Fashion", "N"],
            ["Joy Division Aesthetic", "N"],
            ["Gang of Four Aesthetic", "N"],
            ["No Wave Aesthetic", "N"],
            ["New York No Wave", "N"],
            ["Downtown 1980 Aesthetic", "N"],
            ["Hardcore Punk", "N"],
            ["Straight Edge Aesthetic", "N"],
            ["DC Hardcore", "N"],
            ["Oi Aesthetic", "N"],
            ["Sham 69 Aesthetic", "N"],
            ["Street Punk", "N"],
            ["Skinhead", "S"],
            ["Riot Grrrl", "N"],
            ["Bikini Kill Aesthetic", "N"],
            ["Sleater-Kinney Aesthetic", "N"],
            ["Kinderwhore", "N"],
            ["Courtney Love Aesthetic", "N"],
            ["Pop Punk Aesthetic", "N"],
            ["Blink-182 Aesthetic", "N"],
            ["Green Day Aesthetic", "N"],
            ["Pop Punk Revival", "N"],
            ["Olivia Rodrigo Aesthetic", "N"],
            ["2020s Pop Punk", "N"],
          ],
        },
        {
          name: "GOTHIC LINEAGE",
          species: [
            ["Proto-Goth Aesthetic", "N"],
            ["Trad Goth", "N"],
            ["Batcave Aesthetic", "N"],
            ["Siouxsie Aesthetic", "N"],
            ["Bauhaus Aesthetic", "N"],
            ["Deathrock", "N"],
            ["Christian Death Aesthetic", "N"],
            ["Horror Punk Goth", "N"],
            ["Victorian Gothic", "X"],
            ["Gothic Aristocrat", "N"],
            ["Cemetery Aesthetic", "N"],
            ["Romantic Goth", "N"],
            ["Gothic Lolita", "X"],
            ["Dark Romantic", "N"],
            ["Cyber Goth", "N"],
            ["Industrial Goth", "N"],
            ["Neon Goth", "N"],
            ["Mallgoth", "N"],
            ["Hot Topic Aesthetic", "N"],
            ["2000s Teen Goth", "N"],
            ["Nu Goth", "N"],
            ["Witch House Aesthetic", "N"],
            ["Tumblr Goth", "N"],
            ["Pastel Goth", "N"],
            ["Soft Goth", "N"],
            ["Nu Goth Pastel", "N"],
            ["Health Goth", "N"],
            ["Athletic Goth", "N"],
            ["Dark Sportswear", "N"],
            ["Mallgoth Revival", "N"],
            ["Nostalgic Goth", "N"],
            ["McBling Goth", "N"],
            ["Goth Punk", "N"],
            ["Gothic Hardcore", "N"],
            ["Ethereal Goth", "N"],
            ["Angelic Goth", "N"],
            ["Whimsigoth", "X"],
            ["Gothic Princess", "N"],
            ["Dark Royale Goth", "N"],
            ["Visual Kei", "X"],
          ],
        },
        {
          name: "INDUSTRIAL & DARK ELECTRONIC",
          species: [
            ["Throbbing Gristle Aesthetic", "N"],
            ["Industrial Aesthetic", "N"],
            ["Einstürzende Neubauten Aesthetic", "N"],
            ["Nine Inch Nails Aesthetic", "N"],
            ["EBM Fashion", "N"],
            ["Dark Electro Fashion", "N"],
            ["Aggrotech Aesthetic", "N"],
            ["Power Electronics Fashion", "N"],
            ["Darkwave Aesthetic", "N"],
            ["4AD Aesthetic", "N"],
            ["Cocteau Twins Aesthetic", "N"],
            ["Ethereal Wave Fashion", "N"],
            ["Dead Can Dance Aesthetic", "N"],
            ["Neoclassical Dark", "N"],
          ],
        },
        {
          name: "METAL LINEAGE",
          species: [
            ["Metalhead Aesthetic", "N"],
            ["NWOBHM Aesthetic", "N"],
            ["Biker Metal", "N"],
            ["Glam Metal", "N"],
            ["Hair Metal", "N"],
            ["1980s Rock Goddess", "N"],
            ["Black Metal Aesthetic", "N"],
            ["Corpse Paint", "N"],
            ["Norwegian Black Metal", "N"],
            ["Folk Metal Aesthetic", "N"],
            ["Death Metal Aesthetic", "N"],
            ["Doom Metal", "N"],
            ["Funeral Doom", "N"],
            ["Alternative Metal", "N"],
            ["Grunge Metal", "N"],
            ["1990s Hard Rock", "N"],
            ["Nu Metal Aesthetic", "N"],
            ["Korn Aesthetic", "N"],
            ["Limp Bizkit Era", "N"],
            ["Post-Metal Aesthetic", "N"],
          ],
        },
        {
          name: "HIP-HOP & R&B",
          species: [
            ["Old School Hip-Hop", "N"],
            ["B-Boy / B-Girl Aesthetic", "N"],
            ["Run-DMC Aesthetic", "N"],
            ["Kangol Era", "N"],
            ["Golden Age Hip-Hop", "N"],
            ["1990s Rap Fashion", "N"],
            ["Tupac Aesthetic", "N"],
            ["Biggie Aesthetic", "N"],
            ["1990s R&B Aesthetic", "N"],
            ["TLC Aesthetic", "X"],
            ["Aaliyah Aesthetic", "N"],
            ["Neo-Soul Aesthetic", "N"],
            ["Erykah Badu Aesthetic", "N"],
            ["Lauryn Hill Aesthetic", "N"],
            ["Bling Era Aesthetic", "N"],
            ["Early 2000s Hip-Hop", "N"],
            ["Lil Kim Aesthetic", "N"],
            ["Early Streetwear", "N"],
            ["FUBU Era", "N"],
            ["Rocawear Aesthetic", "N"],
            ["Crunk Aesthetic", "N"],
            ["Trap Aesthetic", "N"],
            ["Atlanta Style", "N"],
            ["Migos Aesthetic", "N"],
            ["Hip-Hop Luxury", "N"],
            ["Designer Streetwear", "N"],
            ["Virgil Abloh Aesthetic", "N"],
            ["Drill Aesthetic", "N"],
            ["Afrobeats Fashion", "N"],
            ["Baddie Aesthetic", "N"],
            ["Brunch Aesthetic", "N"],
            ["Black Girl Magic Fashion", "N"],
          ],
        },
        {
          name: "GRUNGE & ALTERNATIVE ROCK",
          species: [
            ["Shoegaze Aesthetic", "N"],
            ["Dream Pop Fashion", "N"],
            ["My Bloody Valentine Aesthetic", "N"],
            ["Slowcore Aesthetic", "N"],
            ["Grunge", "N"],
            ["Nirvana Aesthetic", "N"],
            ["Kurt Cobain Aesthetic", "N"],
            ["Pearl Jam Aesthetic", "N"],
            ["Grunge Girl", "N"],
            ["Hole Aesthetic", "N"],
            ["Grunge Femme", "N"],
            ["Grunge Revival", "N"],
            ["High Fashion Grunge", "N"],
            ["Soft Grunge", "N"],
            ["Tumblr Grunge", "X"],
            ["Indie Rock Aesthetic", "N"],
            ["Strokes Aesthetic", "N"],
            ["Indie Sleaze", "N"],
          ],
        },
        {
          name: "EMO & SCENE",
          species: [
            ["Emo Aesthetic", "N"],
            ["Thursday Aesthetic", "N"],
            ["Taking Back Sunday Aesthetic", "N"],
            ["My Chemical Romance Aesthetic", "N"],
            ["Fall Out Boy Aesthetic", "N"],
            ["Emo Revival", "N"],
            ["Modern Emo", "N"],
            ["Midwest Emo Aesthetic", "N"],
            ["Scene Aesthetic", "N"],
            ["Scene Queen", "N"],
            ["MySpace Era Fashion", "X"],
            ["Scene Revival", "N"],
            ["Y2K Scene", "N"],
            ["Soft / Pastel Emo", "N"],
            ["Emo Kawaii", "N"],
            ["Garage Band Aesthetic", "N"],
            ["DIY Band Aesthetic", "N"],
            ["Bedroom Pop Fashion", "N"],
            ["Emo Nite Aesthetic", "N"],
          ],
        },
        {
          name: "ELECTRONIC & CLUB CULTURE",
          species: [
            ["Ballroom Aesthetic", "N"],
            ["Vogue Fashion", "N"],
            ["House Mother Aesthetic", "N"],
            ["Chicago House Aesthetic", "N"],
            ["Detroit Techno Aesthetic", "N"],
            ["UK Rave Aesthetic", "N"],
            ["Acid House Fashion", "N"],
            ["Second Summer of Love", "N"],
            ["Haçienda Aesthetic", "N"],
            ["Madchester Fashion", "N"],
            ["PLUR Aesthetic", "N"],
            ["1990s Rave", "N"],
            ["Kandi Aesthetic", "N"],
            ["Jungle / Drum and Bass Aesthetic", "N"],
            ["Berlin Techno Fashion", "N"],
            ["Berghain Aesthetic", "N"],
            ["Minimal Techno Fashion", "N"],
            ["UK Club Aesthetic", "N"],
            ["Raver / Rave Culture", "N"],
            ["EDM Festival Aesthetic", "N"],
            ["Coachella Fashion", "X"],
            ["Hyperpop Fashion", "N"],
            ["PC Music Aesthetic", "N"],
            ["Digital Club Wear", "N"],
            ["Psytrance / Trance Festival Fashion", "N"],
            ["Hardstyle / Gabber Aesthetic", "N"],
            ["Dubstep / EDM Underground", "N"],
          ],
        },
        {
          name: "ROCK & GLAM PERFORMANCE",
          species: [
            ["Jimi Hendrix Aesthetic", "N"],
            ["Rockstar Aesthetic", "N"],
            ["Rolling Stones Aesthetic", "N"],
            ["1970s Rock Star", "N"],
            ["Led Zeppelin Aesthetic", "N"],
            ["Arena Rock Fashion", "N"],
            ["1980s Rock Star", "N"],
            ["Hair Band Aesthetic", "N"],
            ["NME Aesthetic", "N"],
            ["Downtown Girl", "X"],
            ["Lo-Fi / Bedroom Pop Aesthetic", "N"],
          ],
        },
        {
          name: "SKATE & SURF CULTURE",
          species: [
            ["Z-Boys Aesthetic", "N"],
            ["Skate Punk", "N"],
            ["1990s Skater", "N"],
            ["Skater Aesthetic", "N"],
            ["Thrasher Aesthetic", "N"],
            ["Street Skate Fashion", "N"],
            ["Skate Girl", "N"],
            ["Skater Femme", "N"],
            ["Skate Streetwear", "N"],
            ["Skate Luxe", "N"],
            ["Sneakerhead Aesthetic", "N"],
            ["Streetwear Culture", "N"],
            ["Surf Aesthetic", "N"],
            ["California Surf", "N"],
            ["Beach Bum Aesthetic", "N"],
            ["Surf Luxe", "N"],
            ["Modern Surf", "N"],
            ["Coastal Athletic", "N"],
          ],
        },
        {
          name: "POLITICAL & IDEOLOGICAL SUBCULTURES",
          species: [
            ["Suffragette Dress", "X"],
            ["Socialist Realism Fashion", "X"],
            ["Union Workwear Aesthetic", "X"],
            ["Civil Rights Movement Fashion", "S"],
            ["Black Panther Aesthetic", "S"],
            ["Women\\'s Liberation Fashion", "N"],
            ["Anarchist Aesthetic", "N"],
            ["Revolutionary Fashion", "N"],
            ["Protest Fashion", "N"],
            ["Activist Dress", "N"],
            ["Anti-Fashion Aesthetic", "X"],
            ["Eco-Activist Fashion", "X"],
            ["Antifa Aesthetic", "S"],
          ],
        },
        {
          name: "PSYCHEDELIC & CONSCIOUSNESS CULTURE",
          species: [
            ["Psychedelic Fashion Aesthetic", "N"],
            ["Tie-Dye Culture", "N"],
            ["Grateful Dead / Deadhead Fashion", "N"],
            ["Fractal Fashion Aesthetic", "N"],
            ["DMT-Inspired Aesthetic", "N"],
            ["Mushroom Renaissance Fashion", "N"],
            ["Ayahuasca Ceremony Fashion", "N"],
            ["Psychedelic Festival Wear", "N"],
            ["Consciousness Expansion Aesthetic", "N"],
            ["Neo-Psychedelia Fashion", "N"],
          ],
        },
      ],
    };
const phylum8 = {
      number: 8,
      name: "Artistic Identity & Creative Philosophy",
      emoji: "🎨",
      description:
        "Art movements, creative vocations, design theory, and pure visual philosophies",
      classes: [
        {
          name: "VISUAL ARTS IDENTITY",
          species: [
            ["Art Student Aesthetic", "N"],
            ["Art Hoe", "N"],
            ["Sketchbook Aesthetic", "N"],
            ["Messy Studio Aesthetic", "N"],
            ["Atelier Aesthetic", "N"],
            ["Painter Aesthetic", "N"],
            ["Paintercore", "N"],
            ["Illustrator Aesthetic", "N"],
            ["Sculptor Aesthetic", "N"],
            ["Printmaker Aesthetic", "N"],
            ["Collage Artist Aesthetic", "N"],
            ["Textile Artist Aesthetic", "N"],
            ["Video Artist Aesthetic", "N"],
            ["Conceptual Artist Aesthetic", "N"],
            ["Installation Artist Aesthetic", "N"],
            ["Performance Artist Aesthetic", "N"],
            ["Street Artist Aesthetic", "N"],
            ["Muralist Aesthetic", "N"],
            ["Gallery Curator Aesthetic", "N"],
            ["Curatorcore", "N"],
            ["Museum Aesthetic", "N"],
            ["Art Fair Aesthetic", "N"],
            ["Vernissage Aesthetic", "N"],
            ["Art Residency Aesthetic", "N"],
            ["Writer Aesthetic", "N"],
            ["Novelist Aesthetic", "N"],
            ["Poet Aesthetic", "N"],
            ["Essay Writer Aesthetic", "N"],
            ["Critic Aesthetic", "N"],
            ["Journalist Aesthetic", "N"],
            ["Screenwriter Aesthetic", "N"],
            ["Typewriter Aesthetic", "N"],
            ["Manuscript Aesthetic", "N"],
            ["Bookish Aesthetic", "N"],
            ["Independent Bookshop Aesthetic", "N"],
            ["Zine Culture Aesthetic", "N"],
            ["Substack Writer Aesthetic", "X"],
            ["Literary Salon Aesthetic", "N"],
            ["Poetry Reading Aesthetic", "N"],
            ["Writer\\'s Retreat Aesthetic", "N"],
            ["Virginia Woolf Aesthetic", "N"],
            ["Beat Generation Aesthetic", "N"],
            ["Sylvia Plath Aesthetic", "N"],
            ["Joan Didion Aesthetic", "N"],
          ],
        },
        {
          name: "MUSIC MAKER IDENTITY",
          species: [
            ["Classical Musician Aesthetic", "N"],
            ["Orchestra Aesthetic", "N"],
            ["Opera Singer Aesthetic", "N"],
            ["Choir Aesthetic", "N"],
            ["Jazz Musician Aesthetic", "N"],
            ["Folk Musician Aesthetic", "N"],
            ["Singer-Songwriter Aesthetic", "N"],
            ["Vinyl Collector Aesthetic", "N"],
            ["Record Store Aesthetic", "N"],
            ["Indie Band Aesthetic", "N"],
            ["Band Rehearsal Aesthetic", "N"],
            ["DJ Aesthetic", "N"],
            ["Producer Aesthetic", "N"],
            ["Musician Aesthetic", "N"],
            ["Bedroom Musician Aesthetic", "N"],
            ["Lo-Fi Producer Aesthetic", "N"],
            ["Soundcloud Rapper Aesthetic", "N"],
            ["Music Festival Organizer Aesthetic", "N"],
            ["Music Journalist Aesthetic", "N"],
          ],
        },
        {
          name: "FILM & PHOTOGRAPHY",
          species: [
            ["Filmmaker Aesthetic", "N"],
            ["Film Student Aesthetic", "N"],
            ["Documentary Filmmaker Aesthetic", "N"],
            ["Set Designer Aesthetic", "N"],
            ["Costume Designer Aesthetic", "N"],
            ["Analog Photographer Aesthetic", "N"],
            ["Street Photographer Aesthetic", "N"],
            ["Photojournalist Aesthetic", "N"],
            ["Darkroom Aesthetic", "N"],
            ["Vintage Camera Aesthetic", "N"],
            ["Cinematography Aesthetic", "N"],
            ["Cinephile Aesthetic", "N"],
            ["Arthouse Cinema Aesthetic", "N"],
            ["Film Noir Aesthetic", "X"],
            ["Italian Neorealism Aesthetic", "X"],
            ["French New Wave Aesthetic", "X"],
            ["New Hollywood Aesthetic", "X"],
            ["Mumblecore Aesthetic", "N"],
            ["A24 Aesthetic", "N"],
          ],
        },
        {
          name: "CRAFT & HANDMADE CULTURE",
          species: [
            ["Pottery Studio Aesthetic", "N"],
            ["Ceramics Aesthetic", "N"],
            ["Woodworking Aesthetic", "N"],
            ["Blacksmith Aesthetic", "N"],
            ["Weaving Aesthetic", "N"],
            ["Textile Art Aesthetic", "N"],
            ["Embroidery Aesthetic", "N"],
            ["Tapestry Aesthetic", "N"],
            ["Natural Dyeing Aesthetic", "N"],
            ["Glassblowing Aesthetic", "N"],
            ["Leatherworking Aesthetic", "N"],
            ["Bookbinding Aesthetic", "N"],
            ["Jewelry Making Aesthetic", "N"],
            ["DIY Maker Fashion", "N"],
            ["Artisanal Craft Aesthetic", "N"],
            ["Workshop Aesthetic", "N"],
            ["Restoration Aesthetic", "N"],
            ["Antique Dealer Aesthetic", "N"],
            ["Tattoo Artist Aesthetic", "N"],
          ],
        },
        {
          name: "DESIGN & ARCHITECTURE",
          species: [
            ["Art Nouveau Design", "X"],
            ["Bauhaus Design Aesthetic", "X"],
            ["Modernist Design Aesthetic", "N"],
            ["Swiss Style Aesthetic", "N"],
            ["Brutalist Aesthetic", "N"],
            ["Memphis Design Aesthetic", "N"],
            ["Postmodern Design Aesthetic", "N"],
            ["Minimalist Design Aesthetic", "N"],
            ["Dieter Rams Aesthetic", "N"],
            ["Wabi-Sabi Design Aesthetic", "X"],
            ["Sustainable Design Aesthetic", "N"],
            ["Parametric Design Aesthetic", "N"],
            ["Graphic Designer Aesthetic", "N"],
            ["Industrial Designer Aesthetic", "N"],
            ["Interior Designer Aesthetic", "N"],
            ["Type Designer Aesthetic", "N"],
            ["Architect Aesthetic", "X"],
          ],
        },
        {
          name: "AVANT-GARDE & EXPERIMENTAL",
          species: [
            ["Futurist Fashion", "X"],
            ["Dadaist Fashion", "N"],
            ["Surrealist Fashion", "N"],
            ["Abstract Expressionist Fashion", "N"],
            ["Arte Povera Fashion", "N"],
            ["Pop Art Fashion", "N"],
            ["Fluxus Fashion", "N"],
            ["Minimalist Art Fashion", "N"],
            ["Neo-Expressionist Fashion", "N"],
            ["Avant-Garde Fashion", "N"],
            ["Experimental Fashion", "N"],
            ["Deconstructed Fashion", "N"],
            ["Conceptual Fashion", "N"],
            ["Anti-Fashion Aesthetic", "N"],
            ["Wearable Art", "N"],
            ["Fashion as Sculpture", "N"],
            ["Runway Conceptual", "N"],
            ["Rei Kawakubo Aesthetic", "N"],
            ["Martin Margiela Aesthetic", "N"],
            ["Vivienne Westwood Aesthetic", "X"],
            ["Alexander McQueen Aesthetic", "N"],
            ["Yohji Yamamoto Aesthetic", "N"],
            ["Iris van Herpen Aesthetic", "N"],
            ["Hussein Chalayan Aesthetic", "N"],
            ["Comme des Garçons Aesthetic", "N"],
          ],
        },
        {
          name: "BOHEMIAN & CREATIVE CLASS",
          species: [
            ["Bohemian", "N"],
            ["Montmartre Aesthetic", "N"],
            ["Atelier Bohemian", "N"],
            ["Left Bank Aesthetic", "N"],
            ["Greenwich Village Aesthetic", "N"],
            ["Hipster", "N"],
            ["Brooklyn Creative Class", "N"],
            ["Normcore", "X"],
            ["Williamsburg Aesthetic", "N"],
            ["East Village Aesthetic", "N"],
            ["Shoreditch Aesthetic", "N"],
            ["Marais Aesthetic", "X"],
            ["Kreuzberg Aesthetic", "N"],
            ["Silver Lake Aesthetic", "N"],
            ["Hackney Aesthetic", "N"],
            ["Peckham Aesthetic", "N"],
            ["Bushwick Aesthetic", "N"],
          ],
        },
        {
          name: "PERFORMING ARTS",
          species: [
            ["Commedia dell\\'Arte Aesthetic", "N"],
            ["Opera Aesthetic", "N"],
            ["Ballet Aesthetic", "X"],
            ["Musical Theater Aesthetic", "N"],
            ["Theater Kid", "N"],
            ["Drama Student Aesthetic", "N"],
            ["Physical Theater Aesthetic", "N"],
            ["Experimental Theatre Aesthetic", "N"],
            ["Contemporary Dance Aesthetic", "N"],
            ["Circus Aesthetic", "N"],
            ["Mime Aesthetic", "N"],
            ["Burlesque Aesthetic", "N"],
            ["Cabaret Aesthetic", "N"],
            ["Spoken Word / Slam Poetry Aesthetic", "N"],
          ],
        },
        {
          name: "MAXIMALISM & CAMP EXPRESSION",
          species: [
            ["Baroque Maximalism", "N"],
            ["Rococo Revivalism", "N"],
            ["Kitsch Aesthetic", "N"],
            ["Camp Aesthetic", "X"],
            ["Maximalism", "N"],
            ["Eclectic Aesthetic", "N"],
            ["Grandmillennial Aesthetic", "N"],
            ["Dopamine Dressing", "X"],
            ["Quiet Maximalism", "N"],
            ["Clashing Prints Aesthetic", "N"],
            ["Pattern Mixing", "N"],
            ["Color Blocking", "N"],
            ["Maximalist Jewelry", "N"],
            ["Statement Dressing", "N"],
          ],
        },
        {
          name: "INTELLECTUAL CREATIVE",
          species: [
            ["Salon Intellectual Aesthetic", "N"],
            ["Dandy Aesthetic", "X"],
            ["Flaneur Aesthetic", "N"],
            ["Frankfurt School Aesthetic", "N"],
            ["Psychoanalyst Aesthetic", "N"],
            ["Academic Aesthetic", "N"],
            ["Eccentric Professor Aesthetic", "N"],
            ["Philosopher Aesthetic", "N"],
            ["Poet Philosopher Aesthetic", "N"],
            ["Autodidact Aesthetic", "N"],
            ["Semiotics Aesthetic", "N"],
            ["Critical Theory Aesthetic", "N"],
            ["Minimalism: Creative Intent", "N"],
            ["Dark Academia", "X"],
            ["Light Academia", "X"],
          ],
        },
      ],
    };
const phylum9 = {
      number: 9,
      name: "Mythic & Fantastical",
      emoji: "🌙",
      description: "Folklore, magic, myth, and non-human fiction",
      classes: [
        {
          name: "FAIRY & FAE TRADITIONS",
          species: [
            ["Fairycore", "N"],
            ["Woodland Fairy", "N"],
            ["Flower Fairy", "N"],
            ["Sprite Aesthetic", "N"],
            ["Pixie Aesthetic", "N"],
            ["Court Fairy", "N"],
            ["Faecore", "N"],
            ["Seelie Court Aesthetic", "N"],
            ["Titania Aesthetic", "N"],
            ["Oberon Aesthetic", "N"],
            ["Dark Fairycore", "N"],
            ["Unseelie Court Aesthetic", "N"],
            ["Changeling Aesthetic", "N"],
            ["Wild Hunt Aesthetic", "N"],
            ["Fairy Grunge", "N"],
            ["Puck Aesthetic", "N"],
            ["Will-o\\'-the-Wisp Aesthetic", "N"],
            ["Goblin Market Aesthetic", "N"],
            ["Fairy Academia", "N"],
            ["Fairy Princesscore", "N"],
            ["Midsummer Night Aesthetic", "N"],
            ["Magical Girl Aesthetic", "X"],
          ],
        },
        {
          name: "ANGELIC & CELESTIAL BEINGS",
          species: [
            ["Cherubcore", "N"],
            ["Seraphim Aesthetic", "N"],
            ["Archangel Aesthetic", "N"],
            ["Heavenly Host Aesthetic", "N"],
            ["Ophanim Aesthetic", "N"],
            ["Angelcore", "N"],
            ["Angel Princess", "N"],
            ["Celestial Being Aesthetic", "N"],
            ["Divine Aesthetic", "N"],
            ["Sacred Feminine Aesthetic", "N"],
            ["Dark Angel Aesthetic", "N"],
            ["Fallen Angel Aesthetic", "N"],
            ["Byzantine Angel Aesthetic", "X"],
            ["Renaissance Angel Aesthetic", "X"],
            ["Raphael Aesthetic", "N"],
            ["Mothman Aesthetic", "X"],
          ],
        },
        {
          name: "DEMONIC & INFERNAL",
          species: [
            ["Demoncore", "N"],
            ["Devil Aesthetic", "N"],
            ["Succubus Aesthetic", "N"],
            ["Incubus Aesthetic", "N"],
            ["Hellfire Aesthetic", "N"],
            ["Infernal Aesthetic", "N"],
            ["Fallen Aesthetic", "N"],
            ["Dark Celestial", "N"],
            ["Shadow Demon Aesthetic", "N"],
            ["Imp Aesthetic", "N"],
            ["Gargoyle Aesthetic", "N"],
            ["Baphomet Aesthetic", "S"],
            ["Sin Aesthetic", "N"],
            ["Hellmouth Aesthetic", "X"],
            ["Maleficent Aesthetic", "X"],
          ],
        },
        {
          name: "VAMPIRE & UNDEAD",
          species: [
            ["Classic Vampire Aesthetic", "N"],
            ["Nosferatu Aesthetic", "N"],
            ["Baroque Vampire Aesthetic", "N"],
            ["Vampire Aristocrat Aesthetic", "N"],
            ["Blood Countess Aesthetic", "N"],
            ["Victorian Vampire Aesthetic", "N"],
            ["Anne Rice Vampire Aesthetic", "N"],
            ["Gothic Vampire Aesthetic", "X"],
            ["Twilight Aesthetic", "N"],
            ["Vampire Diaries Aesthetic", "N"],
            ["Modern Vampire Aesthetic", "N"],
            ["Vampire Comedy Aesthetic", "N"],
            ["Vampirecore", "N"],
            ["Zombie Aesthetic", "N"],
            ["Ghost Aesthetic", "N"],
            ["Spectre Aesthetic", "N"],
            ["Wraith Aesthetic", "N"],
            ["Banshee Aesthetic", "N"],
            ["Lich Aesthetic", "N"],
            ["Werewolf / Lycanthrope Aesthetic", "N"],
          ],
        },
        {
          name: "WITCH & OCCULT",
          species: [
            ["Witchcore", "N"],
            ["Nature Witch", "N"],
            ["Forest Witch Aesthetic", "N"],
            ["Sea Witch Aesthetic", "N"],
            ["Hedge Witch Aesthetic", "N"],
            ["Green Witch Aesthetic", "N"],
            ["Cottage Witch Aesthetic", "N"],
            ["Kitchen Witch Aesthetic", "N"],
            ["Dark Witch Aesthetic", "N"],
            ["Occultcore", "N"],
            ["Solitary Witch Aesthetic", "N"],
            ["Coven Aesthetic", "N"],
            ["Glamour Witch Aesthetic", "N"],
            ["Wiccan Fashion", "N"],
            ["Rootwork Aesthetic", "S"],
            ["Bruja Aesthetic", "SX"],
            ["Alchemist Aesthetic", "N"],
            ["Oracle Aesthetic", "N"],
            ["Seer Aesthetic", "N"],
            ["Tarot Aesthetic", "N"],
            ["Astrologer Aesthetic", "X"],
            ["Crystal Witch Aesthetic", "N"],
            ["Sigil Aesthetic", "N"],
            ["Grimoire Aesthetic", "N"],
          ],
        },
        {
          name: "AQUATIC & SIRENIC MYTHOLOGY",
          species: [
            ["Mermaidcore", "X"],
            ["Sirencore", "N"],
            ["Atlantis Aesthetic", "N"],
            ["Naiad Aesthetic", "N"],
            ["Nixie Aesthetic", "N"],
            ["Undine Aesthetic", "N"],
            ["Rusalka Aesthetic", "N"],
            ["Nereid Aesthetic", "N"],
            ["Nymph Aesthetic", "N"],
            ["Selkiecore", "X"],
            ["Water Goddess Aesthetic", "S"],
          ],
        },
        {
          name: "MYTHOLOGICAL BEINGS",
          species: [
            ["Centaur Aesthetic", "N"],
            ["Satyr Aesthetic", "N"],
            ["Minotaur Aesthetic", "N"],
            ["Medusa Aesthetic", "N"],
            ["Sphinx Aesthetic", "N"],
            ["Hydra Aesthetic", "N"],
            ["Chimera Aesthetic", "N"],
            ["Valkyrie Aesthetic", "N"],
            ["Kitsune Aesthetic", "S"],
            ["Tengu Aesthetic", "S"],
            ["Oni Aesthetic", "S"],
            ["Yokai Aesthetic", "S"],
            ["Djinn Aesthetic", "S"],
            ["Ifrit Aesthetic", "S"],
            ["Wendigo Aesthetic", "S"],
            ["Thunderbird Aesthetic", "S"],
            ["Basilisk Aesthetic", "N"],
            ["Griffin Aesthetic", "N"],
            ["Phoenix Aesthetic", "N"],
            ["Pegasus Aesthetic", "N"],
            ["Unicorn Aesthetic", "N"],
            ["Kelpie Aesthetic", "N"],
            ["Manticore Aesthetic", "N"],
            ["Roc Aesthetic", "N"],
            ["Dryad Aesthetic", "N"],
            ["Cryptid Aesthetic", "N"],
            ["Jackalope Aesthetic", "X"],
          ],
        },
        {
          name: "ELF & HIGH FANTASY RACES",
          species: [
            ["Woodland Elf", "N"],
            ["High Elf Aesthetic", "N"],
            ["Wood Elf Aesthetic", "N"],
            ["Dark Elf Aesthetic", "N"],
            ["Snow Elf Aesthetic", "N"],
            ["Sun Elf Aesthetic", "N"],
            ["Elvish Aesthetic", "N"],
            ["Elven Court Aesthetic", "N"],
            ["Tolkien Aesthetic", "N"],
            ["Rivendell Aesthetic", "N"],
            ["Lothlorien Aesthetic", "N"],
            ["Hobbit Aesthetic", "N"],
            ["Halfling Aesthetic", "N"],
            ["Dwarf Aesthetic", "N"],
            ["Tiefling Aesthetic", "N"],
            ["Aasimar Aesthetic", "N"],
            ["Half-Elf Aesthetic", "X"],
            ["Kenku Aesthetic", "N"],
            ["Gnome Aesthetic", "N"],
            ["Goblin Aesthetic", "X"],
            ["Orc Aesthetic", "N"],
            ["Troll Aesthetic", "N"],
            ["Magical Academia", "N"],
          ],
        },
        {
          name: "DRAGON & SERPENT",
          species: [
            ["Dragoncore", "N"],
            ["Fire Dragon Aesthetic", "N"],
            ["Ice Dragon Aesthetic", "N"],
            ["Eastern Dragon Aesthetic", "S"],
            ["Western Dragon Aesthetic", "N"],
            ["Dragon Rider Aesthetic", "N"],
            ["Wyvern Aesthetic", "N"],
            ["Sea Serpent Aesthetic", "X"],
            ["Serpent Queen Aesthetic", "N"],
            ["Naga Aesthetic", "S"],
            ["Ouroboros Aesthetic", "N"],
            ["Wyrm Aesthetic", "N"],
          ],
        },
        {
          name: "ROYAL & NOBLE FANTASY",
          species: [
            ["Royalcore", "N"],
            ["Noblecore", "X"],
            ["Dark Royalty", "N"],
            ["Dark Queen Aesthetic", "N"],
            ["Ice Queen Aesthetic", "N"],
            ["Blood Queen Aesthetic", "N"],
            ["Warrior Queen Aesthetic", "N"],
            ["Enchantress Aesthetic", "N"],
            ["Sorceress Aesthetic", "N"],
            ["Villaincore", "N"],
            ["Herocore", "N"],
            ["Court Jester Aesthetic", "N"],
            ["Sage Aesthetic", "N"],
            ["Archmage Aesthetic", "N"],
            ["Necromancer Aesthetic", "N"],
            ["Warlock Aesthetic", "N"],
            ["Druid Aesthetic", "X"],
            ["Cleric Aesthetic", "N"],
            ["Paladin Aesthetic", "N"],
            ["Ranger Aesthetic", "N"],
            ["Rogue Aesthetic", "N"],
            ["Bard Aesthetic", "N"],
            ["Barbarian Aesthetic", "N"],
            ["Knightcore", "N"],
            ["Arthurian Aesthetic", "N"],
            ["Warrior Princess Aesthetic", "N"],
            ["Piratecore", "N"],
            ["Swashbuckler Aesthetic", "X"],
            ["Samurai Fantasy", "S"],
            ["Ninjacore", "S"],
          ],
        },
        {
          name: "GOTHIC FANTASY",
          species: [
            ["Whimsigoth", "X"],
            ["Shadowcore", "N"],
            ["Phantomcore", "N"],
            ["Cathedralcore", "N"],
            ["Victorian Supernatural Aesthetic", "N"],
            ["Gaslight Gothic", "N"],
            ["Penny Dreadful Aesthetic", "N"],
            ["Witchfinder Aesthetic", "N"],
            ["Edgar Allan Poe Aesthetic", "N"],
            ["Mary Shelley Aesthetic", "N"],
            ["Dracula Aesthetic", "N"],
            ["Frankenstein Aesthetic", "N"],
            ["Gothic Romance Aesthetic", "N"],
            ["Haunted House Aesthetic", "N"],
            ["Haunted Manor Aesthetic", "N"],
            ["Candlelit Gothic Aesthetic", "N"],
            ["Graveyard Aesthetic", "N"],
            ["Memento Mori Aesthetic", "N"],
            ["Ghostcore", "N"],
            ["Dark Academia", "X"],
            ["Galaxy Goth", "N"],
          ],
        },
        {
          name: "COSMIC & INTERDIMENSIONAL FANTASY",
          species: [
            ["Cosmic Horror Aesthetic", "N"],
            ["Eldritch Aesthetic", "N"],
            ["Outer Gods Aesthetic", "N"],
            ["Voidcore", "N"],
            ["Abysscore", "N"],
            ["Dream Dimension Aesthetic", "N"],
            ["Astral Aesthetic", "N"],
            ["Simulation Theory Aesthetic", "X"],
            ["Liminal Space Aesthetic", "X"],
            ["Glitchcore", "X"],
            ["Backrooms Aesthetic", "X"],
            ["Analog Horror Aesthetic", "X"],
            ["Found Footage Aesthetic", "N"],
            ["SCP Aesthetic", "X"],
            ["Creepypasta Aesthetic", "X"],
            ["Aliencore", "N"],
          ],
        },
        {
          name: "FOLKLORE & FAIRY TALE",
          species: [
            ["Dark Fairy Tale Aesthetic", "N"],
            ["Grimm Fairy Tale Aesthetic", "N"],
            ["Disney Princess Aesthetic", "X"],
            ["Cinderella Aesthetic", "N"],
            ["Sleeping Beauty Aesthetic", "N"],
            ["Snow White Aesthetic", "N"],
            ["Little Mermaid Aesthetic", "X"],
            ["Beauty and the Beast Aesthetic", "N"],
            ["Red Riding Hood Aesthetic", "N"],
            ["Rapunzel Aesthetic", "N"],
            ["Hansel and Gretel Aesthetic", "N"],
            ["Baba Yaga Aesthetic", "N"],
            ["Slavic Mythology Aesthetic", "N"],
            ["Rusalka Aesthetic", "N"],
            ["Green Man Aesthetic", "N"],
            ["Persephone Aesthetic", "N"],
            ["Artemis Aesthetic", "N"],
            ["Aphrodite Aesthetic", "N"],
            ["Athena Aesthetic", "N"],
            ["Hecate Aesthetic", "N"],
            ["Circe Aesthetic", "N"],
            ["Egyptian Goddess Aesthetic", "X"],
            ["Celtic Goddess Aesthetic", "N"],
            ["Loki Aesthetic", "N"],
            ["Freyja Aesthetic", "N"],
            ["Kali Aesthetic", "S"],
            ["Lakshmi Aesthetic", "S"],
          ],
        },
        {
          name: "ROMANTASY & MODERN FANTASY",
          species: [
            ["Romantasy Aesthetic", "N"],
            ["Cozy Romantasy Aesthetic", "N"],
            ["Dark Romantasy Aesthetic", "N"],
            ["Court Romantasy Aesthetic", "N"],
            ["Sapphic Fantasy Aesthetic", "N"],
            ["YA Fantasy Aesthetic", "N"],
            ["BookTok Fantasy Aesthetic", "N"],
            ["Cozy Fantasy Aesthetic", "N"],
            ["Portal Fantasy Aesthetic", "N"],
            ["High Fantasy Aesthetic", "N"],
            ["Dark Fantasy Aesthetic", "N"],
            ["Epic Fantasy Aesthetic", "N"],
            ["Grimdark Aesthetic", "N"],
            ["Sword and Sorcery Aesthetic", "N"],
            ["Mythpunk Aesthetic", "N"],
            ["Dungeon Punk Aesthetic", "N"],
            ["Xianxia Aesthetic", "S"],
            ["Isekai Aesthetic", "X"],
            ["Enchanted Urban Aesthetic", "N"],
            ["Sorcerer Streetwear", "N"],
            ["Gaslamp Fantasy", "N"],
            ["Solarpunk Fantasy", "X"],
            ["Space Opera Aesthetic", "X"],
          ],
        },
        {
          name: "TECHNO-MAGIC & HYBRID FANTASY",
          species: [
            ["Techno-Magic Aesthetic", "X"],
            ["Magicore", "N"],
            ["Sigil Tech Aesthetic", "N"],
            ["Runic Technology Aesthetic", "N"],
            ["Crystal Technology Aesthetic", "N"],
            ["Digital Witch Aesthetic", "N"],
            ["Neon Magic Aesthetic", "N"],
            ["Holographic Magic Aesthetic", "N"],
            ["Alchemical Tech Aesthetic", "N"],
            ["Alchemy Punk Aesthetic", "N"],
            ["Clockwork Magic Aesthetic", "N"],
            ["Spellpunk Aesthetic", "N"],
            ["Magitech Aesthetic", "N"],
            ["Bio-Magic Aesthetic", "N"],
          ],
        },
      ],
    };
    const phylum10 = {
      number: 10,
      name: "Brand Born",
      emoji: "🏷",
      description:
        "The commercial fashion machine — brand culture, trend cycles, and industry-manufactured aesthetics",
      classes: [
        {
          name: "FAST FASHION & MICRO-TREND",
          species: [
            ["Fast Fashion Aesthetic", "N"],
            ["Trend Cycle Fashion", "N"],
            ["Disposable Fashion", "N"],
            ["Seasonal Drop Aesthetic", "N"],
            ["Forever 21 Era Aesthetic", "N"],
            ["Zara Aesthetic", "N"],
            ["H&M; Collaboration Aesthetic", "N"],
            ["Primark Aesthetic", "N"],
            ["Fashion Blogger Core", "N"],
            ["Haul Culture Aesthetic", "N"],
            ["Mass Market Capsule", "N"],
            ["Capsule Collection Aesthetic", "N"],
            ["Fast Fashion Luxe", "X"],
            ["Instagram-Influenced High Street", "N"],
            ["Limited Edition Anxiety", "N"],
            ["Micro-Trend Aesthetic", "N"],
            ["TikTok Micro-Trend Aesthetic", "N"],
            ["Shein Aesthetic", "N"],
            ["Temu Aesthetic", "N"],
            ["Sold Out Aesthetic", "N"],
            ["Overconsumption Aesthetic", "N"],
            ["De-influencing Aesthetic", "N"],
          ],
        },
        {
          name: "BRAND-MANUFACTURED AESTHETICS",
          species: [
            ["Ralph Lauren Lifestyle Aesthetic", "N"],
            ["Patagonia Aesthetic", "X"],
            ["Nike Aesthetic", "N"],
            ["Adidas Aesthetic", "N"],
            ["Stone Island Aesthetic", "N"],
            ["Arc\\'teryx Aesthetic", "N"],
            ["Lululemon Aesthetic", "X"],
            ["Gymshark Aesthetic", "N"],
            ["Supreme Aesthetic", "N"],
            ["Off-White Aesthetic", "N"],
            ["Gucci Maximalism", "X"],
            ["Louis Vuitton Monogram Aesthetic", "N"],
            ["Chanel Aesthetic", "N"],
            ["Dior Aesthetic", "N"],
            ["Prada Aesthetic", "N"],
            ["Balenciaga Aesthetic", "N"],
            ["Miu Miu Aesthetic", "N"],
            ["Bottega Veneta Quiet Luxury", "X"],
            ["The Row Aesthetic", "N"],
            ["Toteme Aesthetic", "N"],
            ["COS Aesthetic", "N"],
            ["Uniqlo Minimalism", "N"],
            ["Aritzia Aesthetic", "N"],
            ["Skims Aesthetic", "N"],
            ["Rick Owens Aesthetic", "N"],
            ["Jacquemus Aesthetic", "N"],
          ],
        },
        {
          name: "MEDIA & EDITORIAL MANUFACTURED",
          species: [
            ["Barbiecore", "X"],
            ["Tomato Girl", "X"],
            ["Strawberry Girl", "X"],
            ["Ballet Flat Revival", "N"],
            ["Row Dressing", "N"],
            ["Stealth Wealth Report", "N"],
            ["Vanilla Girl Aesthetic", "N"],
            ["Mob Wife Effect", "N"],
            ["Coastal Cowgirl Naming Event", "N"],
            ["Quiet Luxury Report", "N"],
            ["Bloke Aesthetic", "N"],
            ["Normcore", "X"],
            ["Gorpcore", "X"],
            ["Cottagecore", "X"],
            ["Quiet Luxury", "X"],
            ["Clean Girl", "X"],
            ["That Girl", "X"],
            ["Coastal Grandmother", "X"],
            ["Quiet Outdoors", "X"],
          ],
        },
        {
          name: "MUSIC ICON & SCREEN LEGEND AESTHETICS",
          species: [
            ["Audrey Hepburn Aesthetic", "N"],
            ["Marilyn Monroe Aesthetic", "N"],
            ["Brigitte Bardot Aesthetic", "N"],
            ["Grace Kelly Aesthetic", "N"],
            ["Jackie Kennedy Aesthetic", "N"],
            ["Princess Diana Aesthetic", "N"],
            ["David Bowie Aesthetic", "N"],
            ["Prince Aesthetic", "N"],
            ["Michael Jackson Aesthetic", "N"],
            ["Madonna Aesthetic", "N"],
            ["Kate Moss Aesthetic", "N"],
            ["Naomi Campbell Aesthetic", "N"],
            ["Beyoncé Aesthetic", "N"],
            ["Rihanna Aesthetic", "N"],
            ["Lady Gaga Aesthetic", "N"],
            ["Ariana Grande Aesthetic", "N"],
            ["Harry Styles Aesthetic", "N"],
            ["Taylor Swift Aesthetic", "N"],
            ["Beyoncé Cowboy Carter Aesthetic", "N"],
            ["Dua Lipa Aesthetic", "N"],
            ["Selena Gomez Aesthetic", "N"],
            ["Miley Cyrus Aesthetic", "N"],
            ["Doja Cat Aesthetic", "N"],
            ["Olivia Rodrigo Aesthetic", "X"],
            ["Charli XCX Aesthetic", "N"],
            ["Sabrina Carpenter Aesthetic", "N"],
            ["BLACKPINK Fashion Aesthetic", "X"],
            ["Rosé Aesthetic", "N"],
            ["Jennie Aesthetic", "N"],
            ["Billie Eilish Aesthetic", "N"],
          ],
        },
        {
          name: "INFLUENCER & SOCIAL CELEBRITY AESTHETICS",
          species: [
            ["Kardashian Aesthetic", "N"],
            ["Zendaya Aesthetic", "N"],
            ["Timothée Chalamet Aesthetic", "N"],
            ["Hailey Bieber Aesthetic", "N"],
            ["Bella Hadid Aesthetic", "N"],
            ["Emily Ratajkowski Aesthetic", "N"],
            ["Kendall Jenner Aesthetic", "N"],
            ["Kylie Jenner Aesthetic", "N"],
            ["Emma Chamberlain Aesthetic", "N"],
            ["Alix Earle Aesthetic", "N"],
            ["Charli D\\'Amelio Aesthetic", "N"],
            ["MrBeast Aesthetic", "N"],
            ["TikTok Shop Aesthetic", "N"],
            ["Live Shopping Aesthetic", "N"],
            ["Mob Wife Aesthetic", "N"],
          ],
        },
        {
          name: "FILM & TV COSTUME SPILLOVER",
          species: [
            ["Sex and the City Effect", "N"],
            ["Mad Men Effect", "N"],
            ["Downton Abbey Effect", "N"],
            ["Outlander Effect", "N"],
            ["The Crown Effect", "N"],
            ["Great Gatsby Effect", "N"],
            ["Stranger Things Effect", "N"],
            ["Peaky Blinders Effect", "N"],
            ["Bridgerton Effect", "N"],
            ["Normal People Aesthetic", "N"],
            ["Emily in Paris Aesthetic", "N"],
            ["Euphoria Fashion", "N"],
            ["Wednesday Aesthetic", "N"],
            ["Succession Aesthetic", "N"],
            ["White Lotus Effect", "N"],
            ["Beef Aesthetic", "N"],
            ["Saltburn Aesthetic", "N"],
            ["Poor Things Aesthetic", "N"],
            ["Barbie Movie Effect", "N"],
          ],
        },
        {
          name: "FAN & FRANCHISE COMMERCE",
          species: [
            ["Star Wars / Sci-Fi Merch Aesthetic", "N"],
            ["Disney Princess Merchandise Aesthetic", "N"],
            ["Harry Potter Merchandise Aesthetic", "N"],
            ["Comic-Con Fashion", "N"],
            ["Marvel / MCU Merch Aesthetic", "X"],
            ["Gaming Merch Aesthetic", "N"],
            ["Streamer Merch Aesthetic", "N"],
            ["Anime Expo Aesthetic", "N"],
            ["Studio Ghibli Aesthetic", "N"],
            ["Sanrio Aesthetic", "X"],
            ["K-Pop Merch Fan Aesthetic", "N"],
            ["BTS Army Aesthetic", "N"],
            ["Taylor Swift Eras Tour Merch Aesthetic", "N"],
            ["Fandom Core", "N"],
            ["Collector Display Aesthetic", "N"],
            ["Cosplay Commercialized", "N"],
          ],
        },
        {
          name: "SPORTING & ACTIVEWEAR INDUSTRY",
          species: [
            ["Running Aesthetic", "N"],
            ["Tennis Fashion", "X"],
            ["Golf Fashion", "X"],
            ["Cycling Kit Aesthetic", "N"],
            ["Ski Fashion", "N"],
            ["Surf Brand Aesthetic", "X"],
            ["Athleisure", "X"],
            ["Sneaker Culture", "X"],
            ["Yoga Wear Aesthetic", "X"],
            ["CrossFit Aesthetic", "N"],
            ["Pilates Wear Aesthetic", "X"],
            ["Trail Running Aesthetic", "N"],
            ["Running Club Aesthetic", "N"],
            ["Sports Bra as Outerwear", "N"],
            ["Technical Fabric Aesthetic", "N"],
            ["Performance Dressing", "N"],
          ],
        },
        {
          name: "NOSTALGIA COMMERCE",
          species: [
            ["1970s Revival", "N"],
            ["1980s Revival", "N"],
            ["1990s Revival", "N"],
            ["Y2K Revival", "X"],
            ["Heritage Brand Revival", "N"],
            ["Vintage Reproduction Market", "N"],
            ["Archive Reissue Aesthetic", "N"],
            ["Limited Reissue Aesthetic", "N"],
            ["Retro Sneaker Market", "N"],
            ["Retro Sports Jersey Market", "N"],
            ["Band Tee Industry", "N"],
            ["Tour Merch Aesthetic", "N"],
            ["Throwback Collab Aesthetic", "N"],
            ["Disney Adult Nostalgia Aesthetic", "N"],
            ["Nostalgia Marketing Aesthetic", "N"],
            ["Pre-Nostalgia Aesthetic", "N"],
          ],
        },
        {
          name: "VINTAGE REVIVAL & MUSEUM STUDIES",
          species: [
            ["Inherited Wardrobe Aesthetic", "N"],
            ["Vintage Glamour", "N"],
            ["Vintage Collector Aesthetic", "N"],
            ["Archival Fashion Aesthetic", "N"],
            ["Dead Stock Aesthetic", "N"],
            ["Museum Shop Aesthetic", "N"],
            ["Retro Chic", "N"],
            ["Thrift Store Chic & Charity Shop", "N"],
            ["Vintage Mix", "N"],
            ["Grandmacore", "X"],
            ["Grandpacore / Eclectic Grandpa", "X"],
            ["Pin-Up General", "N"],
            ["Retro Tech Aesthetic", "N"],
          ],
        },
        {
          name: "SECONDARY MARKET & RESALE COMMERCE",
          species: [
            ["Depop Seller Core", "N"],
            ["Depop Girl Aesthetic", "N"],
            ["Resale-Core", "N"],
            ["Authentication Aesthetic", "N"],
            ["StockX Aesthetic", "N"],
            ["Vinted / Vestiaire Culture", "N"],
            ["Archive Fashion Aesthetic", "N"],
            ["Pre-Loved Designer Aesthetic", "N"],
            ["Vintage Luxury Aesthetic", "N"],
            ["Thrift Flip Aesthetic", "N"],
            ["Trade Show Resale Aesthetic", "N"],
            ["Subscription Box Aesthetic", "N"],
            ["Rental Fashion Aesthetic", "N"],
          ],
        },
        {
          name: "CORPORATE UNIFORM & WORKWEAR INDUSTRY",
          species: [
            ["Military Surplus Fashion", "N"],
            ["Workwear Industry Aesthetic", "N"],
            ["Airline Uniform Aesthetic", "N"],
            ["Hospitality Uniform Aesthetic", "N"],
            ["Medical Scrubs Fashion", "N"],
            ["Barista Uniform Aesthetic", "N"],
            ["Delivery Driver Aesthetic", "N"],
            ["Finance Uniform", "N"],
            ["Law Firm Dress Code", "N"],
            ["Corporate Uniform Aesthetic", "N"],
            ["Tech Company Hoodie", "N"],
            ["Startup Aesthetic", "N"],
            ["Hi-Vis Fashion", "N"],
            ["Uniform Subversion", "N"],
            ["Brand x Subculture", "N"],
            ["Mall Goth", "X"],
          ],
        },
        {
          name: "WELLNESS & BEAUTY INDUSTRY",
          species: [
            ["Natural Hair Aesthetic", "N"],
            ["Clean Beauty Aesthetic", "N"],
            ["Skincare Aesthetic", "N"],
            ["Skincare Routine Aesthetic", "N"],
            ["Glass Skin Aesthetic", "X"],
            ["SPF Aesthetic", "N"],
            ["No-Makeup Makeup Aesthetic", "N"],
            ["Brow Era Aesthetic", "N"],
            ["Bold Lip Aesthetic", "N"],
            ["Lip Trend Aesthetic", "N"],
            ["Nail Art Aesthetic", "N"],
            ["Beauty Influencer Aesthetic", "N"],
            ["Sephora Girl Aesthetic", "N"],
            ["Drugstore Beauty Aesthetic", "N"],
            ["Luxury Skincare Aesthetic", "N"],
            ["Fragrance Aesthetic", "N"],
            ["K-Beauty Industrial Aesthetic", "X"],
            ["Wellness Industry Fashion", "N"],
            ["Spa Aesthetic", "N"],
          ],
        },
        {
          name: "FASHION WEEK & RUNWAY INDUSTRIAL COMPLEX",
          species: [
            ["Haute Couture Spectacle", "N"],
            ["Runway-to-Retail Cycle", "N"],
            ["Season Preview Aesthetic", "N"],
            ["Show Look Spillover", "N"],
            ["Front Row Aesthetic", "N"],
            ["Fashion Week Street Style", "N"],
            ["Fashion Week Influencer Aesthetic", "N"],
            ["Street Style Snapshot", "N"],
            ["Street Style Photographer Aesthetic", "N"],
            ["Press Day Aesthetic", "N"],
            ["Buying Trip Aesthetic", "N"],
            ["Fashion Week Buyer Aesthetic", "N"],
            ["Trade Show Aesthetic", "N"],
            ["After-Show Party Aesthetic", "N"],
            ["Fashion Capital Aesthetic", "N"],
            ["Fashion Student Show Aesthetic", "N"],
            ["Fashion Archive Aesthetic", "N"],
          ],
        },
      ],
    };
const phylum11 = {
      number: 11,
      name: "Internet Born",
      emoji: "📱",
      description: "Digital-native aesthetics born on social platforms",
      classes: [
        {
          name: "TUMBLR AESTHETICS (2010--2016)",
          species: [
            ["Tumblr Aesthetic (General)", "N"],
            ["Soft Grunge", "X"],
            ["Pastel Goth", "X"],
            ["Pale Grunge", "N"],
            ["Soft Pale Aesthetic", "N"],
            ["Tumblr Girl Aesthetic", "N"],
            ["Hipster Tumblr", "X"],
            ["Vintage Tumblr Aesthetic", "N"],
            ["Witch Tumblr", "X"],
            ["Poetry Tumblr Aesthetic", "N"],
            ["Film Photography Tumblr", "N"],
            ["Coffee Shop Aesthetic", "N"],
            ["Dark Mori Tumblr", "N"],
            ["Sadgirl Aesthetic", "N"],
            ["Dreamy Bedroom Aesthetic", "N"],
            ["Fairy Lights Aesthetic", "N"],
            ["Wistful Aesthetic", "N"],
            ["Melancholy Aesthetic", "N"],
            ["Indie Pale Aesthetic", "N"],
            ["Floaty Aesthetic", "N"],
            ["Grunge Revival Tumblr", "N"],
            ["ARG Aesthetic", "N"],
          ],
        },
        {
          name: "COTTAGECORE & PASTORAL INTERNET",
          species: [
            ["Cottagecore", "X"],
            ["Cottagecore Dark", "N"],
            ["Farmcore", "N"],
            ["Barncore", "N"],
            ["Milkmaidcore", "N"],
            ["Honeycore", "X"],
            ["Apothecarycore", "X"],
            ["Jamcore", "N"],
            ["Herbalistcore", "N"],
            ["Beekeeper Aesthetic", "N"],
            ["Grandmacore", "X"],
            ["Grandpacore", "X"],
            ["Cottage Witch", "X"],
            ["Cozy Autumn Aesthetic", "N"],
            ["Hyggecore", "X"],
            ["Warmcore", "N"],
            ["Slow Living Internet Aesthetic", "N"],
            ["Frogcore", "X"],
            ["Mushroomcore", "X"],
            ["Mosscore", "X"],
          ],
        },
        {
          name: "DARK & EERIE INTERNET",
          species: [
            ["Weirdcore", "N"],
            ["Dreamcore", "N"],
            ["Nostalgiacore", "N"],
            ["Traumacore", "S"],
            ["Eerie/Trauma Kidcore", "S"],
            ["Liminal Space Aesthetic", "N"],
            ["Backrooms Aesthetic", "X"],
            ["Analog Horror Aesthetic", "X"],
            ["Glitchcore", "X"],
            ["Voidcore", "N"],
            ["Hauntedcore", "N"],
            ["Cryptidcore", "N"],
            ["Lostcore", "N"],
            ["Wrongcore", "N"],
            ["Scenecore", "X"],
            ["Horrorcore", "X"],
            ["Creepycore", "N"],
            ["Plague Doctor Aesthetic", "X"],
            ["Five Nights at Freddy\\'s Aesthetic", "X"],
          ],
        },
        {
          name: "SOFT & ROMANTIC INTERNET",
          species: [
            ["Soft Girl Aesthetic", "N"],
            ["Coquette", "X"],
            ["Balletcore", "N"],
            ["Dollcore", "X"],
            ["Princesscore", "X"],
            ["Angelcore", "X"],
            ["Pastelcore", "N"],
            ["Bloomcore", "X"],
            ["Fruit Girl Aesthetic", "N"],
            ["Tomato Girl", "X"],
            ["Coconut Girl", "N"],
            ["Ethereal Girl", "N"],
            ["Daydreamcore & Whimsy", "N"],
            ["Love Letter Aesthetic", "X"],
            ["Fairycore Girl", "X"],
            ["Poetcore", "N"],
          ],
        },
        {
          name: "ACADEMIA INTERNET",
          species: [
            ["Dark Academia", "X"],
            ["Light Academia", "X"],
            ["Chaotic Academia", "N"],
            ["Romantic Academia", "N"],
            ["Art Academia", "X"],
            ["Science Academia", "N"],
            ["Nature Academia", "X"],
            ["Music Academia", "N"],
            ["Classical Academia", "N"],
            ["Gothic Academia", "X"],
            ["Goblincore Academia", "N"],
            ["Cottagecore Academia", "N"],
            ["Holiday Academia", "N"],
            ["Autumn Academia", "N"],
            ["Winter Academia", "N"],
            ["Spring Academia", "N"],
            ["Cozy Academia", "N"],
            ["Villain Academic", "N"],
            ["Gryffindor Aesthetic", "X"],
            ["Slytherin Aesthetic", "X"],
            ["Ravenclaw Aesthetic", "X"],
            ["Hufflepuff Aesthetic", "X"],
          ],
        },
        {
          name: "VSCO & CLEAN INTERNET",
          species: [
            ["VSCO Girl", "N"],
            ["Clean Girl", "N"],
            ["That Girl", "X"],
            ["Neutral Palette Internet Aesthetic", "N"],
            ["Minimalist Internet Aesthetic", "N"],
            ["White Room Aesthetic", "N"],
            ["Pinterest Aesthetic", "N"],
            ["Pinterest Perfectionism", "N"],
            ["Instagram Aesthetic", "N"],
            ["Aesthetic Aesthetic", "N"],
            ["Filter Aesthetic", "N"],
            ["Soft Neutral Aesthetic", "N"],
            ["Linen Aesthetic", "N"],
            ["Warm & Cool Tones", "N"],
          ],
        },
        {
          name: "E-CULTURE & ALT INTERNET",
          species: [
            ["E-Girl", "N"],
            ["E-Boy", "N"],
            ["Soft E-Girl", "N"],
            ["Dark E-Girl", "N"],
            ["Pastel E-Girl", "N"],
            ["Alt Girl Aesthetic", "N"],
            ["Alt Boy Aesthetic", "N"],
            ["Internet It Girl", "N"],
            ["Egirl Adjacent", "N"],
            ["Baddie Aesthetic", "X"],
            ["Instagram Baddie", "X"],
            ["OOTD Baddie", "X"],
            ["City Baddie", "X"],
            ["Bratz Aesthetic", "N"],
            ["Indie Kid Aesthetic", "N"],
            ["Y2K Revival (Class 7)", "X"],
            ["2000s Internet Aesthetic", "N"],
            ["Neon Aesthetic", "N"],
            ["Cyber Aesthetic", "X"],
            ["Webcore", "N"],
            ["Old Internet Aesthetic", "N"],
            ["Vaporwave", "X"],
            ["Seapunk", "N"],
            ["Frutiger Aero", "N"],
            ["Frutiger Metro", "N"],
            ["Synthwave", "N"],
            ["Retrowave", "N"],
            ["Lo-Fi Aesthetic", "N"],
            ["Cyber Y2K", "N"],
            ["Digital Surrealism", "N"],
            ["PC Music Aesthetic", "X"],
            ["AI Slopcore", "N"],
            ["Algorithmic Surrealism", "N"],
          ],
        },
        {
          name: "VIRAL & TREND AESTHETICS",
          species: [
            ["Barbiecore", "X"],
            ["Mob Wife Aesthetic", "X"],
            ["Coastal Grandmother", "X"],
            ["Brat Aesthetic", "N"],
            ["Tomato Girl Summer", "N"],
            ["Blueberry Milk Nails", "N"],
            ["Strawberry Makeup", "N"],
            ["Clean Girl Makeup", "N"],
            ["Latte Makeup", "N"],
            ["Glazed Donut Aesthetic", "N"],
            ["Blokecore", "X"],
            ["Blokette", "N"],
            ["Coquette Revival", "N"],
            ["Dark Feminine Revival", "N"],
            ["Downtown Girl", "X"],
            ["Weird Girl Aesthetic", "N"],
            ["Office Siren", "N"],
            ["Balletcore Revival", "N"],
            ["Corecore", "N"],
            ["Shitpost Aesthetic", "N"],
            ["Lucky Girl Syndrome Aesthetic", "N"],
            ["Glamoratti", "N"],
            ["Street Bride Aesthetic", "N"],
            ["Gummy Bear Aesthetic", "N"],
            ["Main Character Aesthetic", "N"],
          ],
        },
        {
          name: "PLATFORM-SPECIFIC AESTHETICS",
          species: [
            ["Pinterest Board Aesthetic", "N"],
            ["Instagram Grid Aesthetic", "N"],
            ["TikTok FYP Aesthetic", "N"],
            ["Tumblr Dashboard Aesthetic", "N"],
            ["Reddit Aesthetic", "N"],
            ["Twitter / X Aesthetic", "N"],
            ["Discord Aesthetic", "N"],
            ["YouTube Aesthetic", "N"],
            ["Twitch Aesthetic", "N"],
            ["BeReal Aesthetic", "N"],
            ["Finsta Aesthetic", "N"],
            ["LinkedIn Aesthetic", "N"],
            ["Story Aesthetic", "N"],
            ["Reel Aesthetic", "N"],
            ["Shorts Aesthetic", "N"],
            ["Close Friends Aesthetic", "N"],
            ["OnlyFans Aesthetic", "S"],
          ],
        },
        {
          name: "NOSTALGIACORE & RETRO INTERNET",
          species: [
            ["Nostalgiacore", "N"],
            ["Y2K Aesthetic", "X"],
            ["2014 Tumblr Revival", "N"],
            ["2012 Internet Aesthetic", "N"],
            ["Early Internet Nostalgia", "N"],
            ["MySpace Revival Aesthetic", "N"],
            ["Neopets Aesthetic", "N"],
            ["Club Penguin Aesthetic", "N"],
            ["Webkinz Aesthetic", "N"],
            ["Neopets Core", "N"],
            ["DeviantArt Aesthetic", "N"],
            ["LiveJournal Aesthetic", "N"],
            ["AIM Away Message Aesthetic", "N"],
            ["Dial-Up Aesthetic", "N"],
            ["Loading Screen Aesthetic", "N"],
            ["Screensaver Aesthetic", "N"],
            ["Pixel Art Aesthetic", "N"],
            ["Chiptune Aesthetic", "N"],
            ["8-Bit Aesthetic", "N"],
            ["Windows XP Aesthetic", "N"],
            ["Flash Games Aesthetic", "N"],
            ["Early YouTube Aesthetic", "N"],
          ],
        },
        {
          name: "COMFORT & COZY INTERNET",
          species: [
            ["Cozycore", "N"],
            ["Warmcore", "N"],
            ["Sleepycore", "N"],
            ["Nap Aesthetic", "N"],
            ["Rainy Day Aesthetic", "N"],
            ["Hot Chocolate Aesthetic", "N"],
            ["Blanket Aesthetic", "N"],
            ["Comfort Object Aesthetic", "N"],
            ["Safe Space Aesthetic", "N"],
            ["Soft Hours Aesthetic", "N"],
            ["Midnight Snack Aesthetic", "N"],
            ["Golden Hour Bedroom Aesthetic", "N"],
            ["Sunday Morning Aesthetic", "N"],
            ["Lazy Sunday Aesthetic", "N"],
            ["Study With Me Aesthetic", "N"],
            ["Midnight Garden Aesthetic", "N"],
          ],
        },
        {
          name: "MAXIMALIST & CHAOTIC INTERNET",
          species: [
            ["Rainbow Kidcore", "N"],
            ["Internet Clowncore", "N"],
            ["Circuscore", "N"],
            ["Rainbowcore", "N"],
            ["Colorcore", "N"],
            ["Goblincore", "X"],
            ["Cryptidcore", "N"],
            ["Chaoscore", "N"],
            ["Junkcore", "N"],
            ["Ironycore", "N"],
            ["Memecore", "N"],
            ["Absurdist Aesthetic", "N"],
            ["Post-Internet Art Aesthetic", "X"],
            ["Surreal Meme Fashion", "N"],
            ["Ironic Maximalism", "N"],
            ["Chaotic Neutral Aesthetic", "N"],
            ["Brainrot Aesthetic", "N"],
            ["Hyperpop Aesthetic", "X"],
            ["Urban Creature Internet Aesthetic", "N"],
            ["Digital Maximalist", "N"],
            ["Party Core", "N"],
            ["AI Slop Aesthetic", "N"],
          ],
        },
        {
          name: "FANDOM & MEDIA AESTHETICS",
          species: [
            ["Harry Potter Aesthetic", "N"],
            ["LOTR Fandom Aesthetic", "X"],
            ["Animecore", "X"],
            ["Disney Fandom Aesthetic", "X"],
            ["MCU Fandom Aesthetic", "X"],
            ["K-Pop Fandom Aesthetic", "X"],
            ["E-sports Fan Fashion", "N"],
            ["Gaming Merchandise Aesthetic", "N"],
            ["Comic Fandom Aesthetic", "N"],
            ["Pop Culture Meme Aesthetic", "N"],
            ["Streamer Watcher Aesthetic", "N"],
            ["Fanfiction Aesthetic", "N"],
            ["Media-Driven IRL Trend", "N"],
            ["Bookstagram Aesthetic", "N"],
            ["Film Twitter Aesthetic", "N"],
            ["True Crime Aesthetic", "S"],
          ],
        },
        {
          name: "AVATAR & VIRTUAL SELF",
          species: [
            ["NPC Aesthetic", "N"],
            ["VTuber Fashion", "N"],
            ["Avatar Fashion", "N"],
            ["Skin-Core", "N"],
            ["Game-Influenced Streetwear", "N"],
            ["Virtual Cosplay", "N"],
            ["Digital Outfit Recreation", "N"],
            ["Meme Wardrobe", "N"],
            ["Influencer IRL Translation", "N"],
            ["Second Life Aesthetic", "N"],
            ["Roblox Aesthetic", "N"],
            ["Virtual Influencer Aesthetic", "N"],
            ["Metaverse Fashion", "N"],
          ],
        },
        {
          name: "TECH, HARDWARE & INTERNET LIFESTYLE",
          species: [
            ["Setup Aesthetic", "N"],
            ["RGB Gaming Aesthetic", "N"],
            ["Mechanical Keyboard Aesthetic", "N"],
            ["Ergonomic Desk Aesthetic", "N"],
            ["VR Aesthetic", "N"],
            ["Blue Light Glasses", "N"],
            ["Workstation Fashion", "N"],
            ["Dark Mode Aesthetic", "N"],
            ["Cable Management Aesthetic", "N"],
            ["Productivity Aesthetic", "N"],
            ["Bullet Journal Aesthetic", "N"],
            ["Notion Organization Aesthetic", "N"],
            ["Studygram", "N"],
            ["Home Office Aesthetic", "N"],
            ["Remote Learning Aesthetic", "N"],
            ["Digital Planning Aesthetic", "N"],
          ],
        },
        {
          name: "QUEER & COMMUNITY INTERNET AESTHETICS",
          species: [
            ["Cottagecore Queer", "N"],
            ["Goblincore Gay", "N"],
            ["Sapphic Aesthetic", "X"],
            ["Lesbian Aesthetic", "N"],
            ["Queer Vintage Aesthetic", "N"],
            ["Pride Aesthetic", "N"],
            ["Queer Maximalism", "N"],
            ["Trans Aesthetic", "N"],
            ["Bisexual Lighting Aesthetic", "N"],
            ["Nonbinary Aesthetic", "N"],
            ["E-Goth", "X"],
            ["Cyber Cottagecore", "N"],
            ["WLW Aesthetic", "N"],
            ["MLM Aesthetic", "N"],
            ["Aroace Aesthetic", "N"],
          ],
        },
      ],
    };

const calculateSpeciesCount = (phylum) => {
  // 1. Look for 'families' OR 'classes' (covers Phylum 12 and the Incubator)
  const groups = phylum.families || phylum.classes || [];
  
  return groups.reduce((total, group) => {
    // 2. If it has subfamilies, count those
    if (group.subfamilies) {
      return total + group.subfamilies.reduce((subTotal, sub) => {
        return subTotal + (sub.species ? sub.species.length : 0);
      }, 0);
    }
    
    // 3. If it has species directly (like in the Incubator), count those
    if (group.species) {
      return total + group.species.length;
    }

    return total;
  }, 0);
};

export const futuristTechnologicalPhylum = {
  number: 12,
    name: "Futurist & Technological",
  emoji: "🚀",
  description:
    "Speculative science, human-machine futures, and the evolving relationship between technology, body, and reality",

  superFamily: "FOUNDATIONAL FUTURES",


  families: [

    {
          name: "PRIMORDIAL & THEORETICAL",
          emoji: "⚛️",
    
          concept:
            "The 'Source Code' of reality; fashion derived from pure mathematics, physics, and foundational laws of the universe.",
    
          order: 0,
    
          subfamilies: [
    
            {
              name: "Mathematical Systems",
    
              role:
                "Aesthetics derived from abstract mathematics, proof structures, recursion, and infinite geometry.",
    
              species: [
    
                "Mathematical-Proof Couture",
                "Fractal Minimalism"
    
              ],
    
              notes: [
    
                "Meta-category candidate: Pure-Math Aesthetic",
                "Strong candidate for future expansion into topology, recursion, and algorithmic geometry aesthetics.",
                "Stable subfamily with high conceptual purity."
    
              ]
            },
    
            {
              name: "Physical Laws",
    
              role:
                "Aesthetics based on physical theory, cosmology, entropy, and quantum mechanics.",
    
              species: [
    
                "String-Theory Draping",
                "Quantum-State Mesh",
                "Entropy-Gradient Silhouette"
    
              ],
    
              notes: [
    
                "Quantum-State Mesh flagged: High conceptual overlap with Simulation and Digital Reality systems.",
                "Entropy-Gradient Silhouette forms a strong philosophical bridge into Collapse and Eco-Futures.",
                "Potential expansion path: Relativity aesthetics, gravitational draping, thermodynamic fashion."
    
              ]
            }
    
          ],
    
          structuralNotes: [
    
            "This family represents the deepest conceptual root of the phylum.",
            "Acts as philosophical 'origin physics layer' for later technological systems.",
            "Very stable — minimal duplication risk."
    
          ]
    },

    {
          name: "RETRO-FUTURE IMAGINARIES",
    
          concept:
            "Futures imagined through past technological eras; speculative visions anchored in historical machinery and materials.",
    
          order: 1,
    
          subfamilies: [
    
            {
              name: "Primitive & Ancient Tech",
    
              role:
                "Pre-industrial speculative technologies rooted in ancient materials and mechanics.",
    
              species: [
    
                "Stonepunk",
                "Sandalpunk"
    
              ],
    
              notes: [
    
                "Forms earliest technological imagination layer.",
                "Potential crossover with Mythic and Archaeological aesthetics in other phyla."
    
              ]
            },
    
            {
              name: "Clockwork & Industrial",
    
              role:
                "Mechanized speculative futures based on steam, gears, and early industrial engineering.",
    
              species: [
    
                "Clockpunk [Clockwork Aesthetic]",
                "Steampunk [Airship Aesthetic]"
    
              ],
    
              notes: [
    
                "Steampunk is a major anchor aesthetic with wide cross-phylum influence.",
                "High hybrid potential with Victorian, Gothic, and Exploration aesthetics."
    
              ]
            },
    
            {
              name: "Electro-Mechanical & Early Electronic",
    
              role:
                "Early electrical experimentation and mechanical-electrical hybrid technologies.",
    
              species: [
    
                "Teslapunk [Tesla-Core / Electro-Mechanical, Galvanic-Chic]",
                "Vacuum-Tube Aesthetic",
                "Early Electromechanical Systems"
    
              ],
    
              notes: [
    
                "Teslapunk bridges industrial aesthetics and early cybernetic imagination.",
                "Vacuum-Tube Aesthetic forms strong visual bridge into Analog Media systems."
    
              ]
            },
    
            {
              name: "Industrial Modernity",
    
              role:
                "Heavy machinery, diesel engines, and modern industrial mechanization.",
    
              species: [
    
                "Dieselpunk",
                "Decopunk"
    
              ],
    
              notes: [
    
                "Decopunk links strongly into Art Deco historical aesthetics.",
                "Rococopunk correctly removed — should exist as ornamental overlay modifier."
    
              ]
            },
    
            {
              name: "Atomic Age Futurism",
    
              role:
                "Mid-century visions of nuclear power, atomic optimism, and raygun-era futurism.",
    
              species: [
    
                "Atompunk [Raygun Gothic/Pulp Futurism]"
    
              ],
    
              notes: [
    
                "Key bridge between industrial futurism and digital futurism.",
                "Strong media-history influence zone."
    
              ]
            },
    
            {
              name: "Early Digital & Information Systems",
    
              role:
                "Pre-modern computing and early digital information environments.",
    
              species: [
    
                "Transistorpunk",
                "Cassettepunk [Cassette Futurism]",
                "Mainframe Aesthetic [Punch Card Aesthetic]",
                "CRT Interface Aesthetic",
                "Early Computing Aesthetic [Pixel Nostalgia]"
    
              ],
    
              notes: [
    
                "Extremely important bridge into DIGITAL NOSTALGIA family.",
                "CRT Interface Aesthetic overlaps with Interface Systems (future cross-link required)."
    
              ]
            },
    
            {
              name: "Alternative Material Futures",
    
              role:
                "Speculative technological futures built on non-metal or culturally distinct materials.",
    
              species: [
    
                "Silkpunk"
    
              ],
    
              notes: [
    
                "Silkpunk flagged for possible relocation into Cultural Technology family later.",
                "Do NOT move yet — requires global material taxonomy alignment."
    
              ]
            }
    
          ],
    
          structuralNotes: [
    
            "This family represents speculative technological history.",
            "Acts as evolutionary precursor to Cyberpunk and Systems futures.",
            "One of the most culturally influential families in the phylum."
    
          ]
    },

    {
          name: "DIGITAL NOSTALGIA & MEDIA MEMORY",
    
          concept:
            "Retro-digital aesthetics rooted in media memory, interface nostalgia, and digital-era cultural artifacts.",
    
          order: 2,
    
          subfamilies: [
    
            {
              name: "Retro Media Nostalgia",
    
              role:
                "Stylized reinterpretations of past digital media cultures.",
    
              species: [
    
                "Vaporwave [Neo-Vaporwave, Pastel Vaporwave, Dark Vaporwave, Vaporwave Street, Vaporgoth]",
                "Synthwave [Retrowave, Outrun Aesthetic]"
    
              ],
    
              notes: [
    
                "Vaporgoth should become cross-tag: Vaporwave × Goth.",
                "Vaporwave Street flagged for migration into Streetwear hybrid systems.",
                "Synthwave acts as strong visual sibling to Cyberpunk media systems."
    
              ]
            },
    
            {
              name: "Early Digital Interface Optimism",
    
              role:
                "Late-1990s and early-2000s techno-optimistic aesthetics.",
    
              species: [
    
                "Y2K Futurism"
    
              ],
    
              notes: [
    
                "Major anchor aesthetic.",
                "Strong bridge into Corporate Interface systems and Simulation aesthetics."
    
              ]
            },
    
            {
              name: "Consumer Space Memory",
    
              role:
                "Retail and commercial architecture nostalgia.",
    
              species: [
    
                "Mallsoft Aesthetic"
    
              ],
    
              notes: [
    
                "Strong spatial nostalgia system.",
                "Links directly into Liminal Space systems."
    
              ]
            },
    
            {
              name: "Corporate Interface Aesthetics",
    
              role:
                "Corporate visual language and interface branding.",
    
              species: [
    
                "Corporate Memphis Aesthetic [Cyber-Memphis Hybrid]",
                "Frutiger Aero [Frutiger Metro, Frutiger Eco]"
    
              ],
    
              notes: [
    
                "Corporate Memphis flagged for repositioning into Visual Interface Systems.",
                "Frutiger Aero forms core bridge into utopian digital visual systems."
    
              ]
            },
    
            {
              name: "Liminal & Spatial Uncanny",
    
              role:
                "Unsettling or nostalgic spatial memory environments.",
    
              species: [
    
                "Liminal Space Aesthetic",
                "Weirdcore"
    
              ],
    
              notes: [
    
                "Highly active hybrid-generation zone.",
                "Strong overlap with Analog Horror and Digital Simulation families."
    
              ]
            },
    
            {
              name: "Signal & Media Decay",
    
              role:
                "Breakdown and distortion of digital or analog media systems.",
    
              species: [
    
                "Analog Horror Aesthetic [Broken Transmission Aesthetic]",
                "Signalwave Aesthetic [Broken Transmission Aesthetic]"
    
              ],
    
              notes: [
    
                "Signalwave and Analog Horror share conceptual base — possible merge review later.",
                "Core decay aesthetics feeding into Dark Tech futures."
    
              ]
            },
    
            {
              name: "Hauntological Systems",
    
              role:
                "Philosophical and temporal nostalgia systems rooted in lost futures.",
    
              species: [
    
                "Hauntology Aesthetic"
    
              ],
    
              notes: [
    
                "Elevated meta-framework.",
                "Should be referenced globally across multiple families."
    
              ]
            }
    
          ],
    
          structuralNotes: [
    
            "This family forms the cultural memory layer of digital civilization.",
            "Extremely strong bridge into Cyberpunk and Simulation families.",
            "Contains multiple hybrid-generator nodes."
    
          ]
    },

    // =========================================================
    // SYSTEMIC TECHNOLOGY — Families 3-6
    // =========================================================

    {
          name: "SYSTEMS & TECHNOLOGICAL POWER",
    
          concept:
            "How technological systems are structured, controlled, experienced, and resisted.",
    
          order: 3,
    
          subfamilies: [
    
            // -----------------------------------------
    
            {
              name: "Tech Elite & Corporate Identity",
    
              role:
                "Visual identity of technological ruling classes and corporate technocracies.",
    
              species: [
    
                "Silicon Valley Aesthetic [Silicon Valley Uniform, Corporate Tech Culture]",
                "Tech Elite Aesthetic [Founder Aristocracy Aesthetic]"
    
              ],
    
              notes: [
    
                "Core 'technocracy elite' layer.",
                "Strong bridge into Architect Hierarchy (future end-state families)."
    
              ]
            },
    
            // -----------------------------------------
    
            {
              name: "Platform & Algorithmic Power",
    
              role:
                "Authority systems governed by platforms, code, and automated decision-making.",
    
              species: [
    
                "Platform Power Aesthetic",
                "Algorithmic Authority Aesthetic",
                "Web3 / Crypto Aesthetic"
    
              ],
    
              notes: [
    
                "Web3 flagged for possible split into Financial Systems later.",
                "Strong ideological system cluster."
    
              ]
            },
    
            // -----------------------------------------
            // MERGED INTERFACE CLUSTER
            // (Critical structural fix)
            // -----------------------------------------
    
            {
              name: "Interface & Information Systems",
    
              role:
                "Visual and behavioral aesthetics of interacting with digital information environments.",
    
              species: [
    
                "Operating System Aesthetic [Admin Panel Aesthetic, Keynote Aesthetic, Grid System Aesthetic]",
                "Terminal Aesthetic [ASCII Print Aesthetic, Monospace Typography Wear]",
                "Holographic UI Aesthetic [Wireframe Silhouette]",
                "Data Visualization Aesthetic [Dashboard Life Aesthetic, Wireframe Silhouette]",
                "Monitoring Culture Aesthetic [Transparent Tech Aesthetic]",
                "Brutalist Web / UI"
    
              ],
    
              notes: [
    
                "Merged from: Interface Paradigms, Data & Control Systems, Interface Ideologies.",
                "Duplicate entries removed structurally — NOT deleted conceptually.",
                "Wireframe Silhouette appears twice — flagged as visual motif candidate."
    
              ]
            },
    
            // -----------------------------------------
    
            {
              name: "Ambient & Invisible Computing",
    
              role:
                "Technology embedded seamlessly into everyday environments.",
    
              species: [
    
                "Ambient Computing Aesthetic [Smart Environment Aesthetic, Passive Tech Integration]",
                "Invisible Tech Luxury",
                "Ubiquitous Sensor Aesthetic",
                "Subtle Cyberwear"
    
              ],
    
              notes: [
    
                "Ubiquitous Sensor Aesthetic bridges strongly into Surveillance systems.",
                "Invisible Tech Luxury forms a 'quiet power' aesthetic."
    
              ]
            },
    
            // -----------------------------------------
    
            {
              name: "Counter-Tech & Resistance",
    
              role:
                "Resistance against technological saturation and control.",
    
              species: [
    
                "Digital Detox Aesthetic [Offline Rebellion, Slow Tech, Recoverycore]",
                "Dumbphone Aesthetic",
                "Analog Purist Aesthetic",
                "Privacy Maximalism Aesthetic [Physical-Key Privacy]",
                "Signal Blocking Fashion",
                "Technozen Fashion [Silicon Zen, Slow Tech]"
    
              ],
    
              notes: [
    
                "Important ideological resistance cluster.",
                "Strong cross-link into Eco-Futures."
    
              ]
            },
    
            // -----------------------------------------
    
            {
              name: "Open & Decentralized Systems",
    
              role:
                "Technological freedom movements and collaborative systems.",
    
              species: [
    
                "Open-Source Wear [FLOSS-Wear, Wiki-Core]",
                "P2P Network Fashion",
                "Open-Source Hardware Aesthetic",
                "Remix Culture Wardrobe"
    
              ],
    
              notes: [
    
                "Strong hybrid generation zone.",
                "May intersect with DIY and Maker subcultures."
    
              ]
            }
    
          ],
    
          structuralNotes: [
    
            "Major structural consolidation performed: Interface duplication removed.",
            "Now stable as central control-system layer of the phylum.",
            "One of the most foundational families in the entire system."
    
          ]
    },

    {
          name: "FUNCTIONAL FUTURES (TECHWEAR)",
    
          concept:
            "Performance, survival, and movement-oriented technological clothing systems.",
    
          order: 4,
    
          subfamilies: [
    
            {
              name: "Urban Tactical Systems",
    
              role:
                "Mobility-driven urban technical apparel.",
    
              species: [
    
                "Techwear [Techwear Minimal, Techwear Maximalist, Acronym Aesthetic, Tactical Streetwear, Cargo Future, Utility Vest]",
                "Urban Tactical Aesthetic [Utility Vest, Cargo Future]",
                "Stealth Techwear [Ninja Techwear]",
                "Modular Clothing Aesthetic",
                "Urban Mobility Techwear",
                "Modular Outerwear",
                "Gorpcore Luxe"
    
              ],
    
              notes: [
    
                "Highly visual flagship subfamily.",
                "Extremely stable cluster."
    
              ]
            },
    
            // -----------------------------------------
    
            {
              name: "Environmental & Survival Systems",
    
              role:
                "Adaptive clothing for harsh or unpredictable environments.",
    
              species: [
    
                "Adaptive Weatherwear [Extreme Climate Techwear]",
                "Micro-Climate Fashion",
                "Portable Shelter Wear",
                "Nomadic Survival Systems [Climate Migration Techwear]",
                "Disaster Response Techwear [Climate Emergency Wear]"
    
              ],
    
              notes: [
    
                "Strong bridge into Climate Adaptation families."
    
              ]
            },
    
            // -----------------------------------------
            // LABOR MERGE CORE
            // -----------------------------------------
    
            {
              name: "Labor & Infrastructure Systems",
    
              role:
                "Visible technical labor roles maintaining technological systems.",
    
              species: [
    
                "Industrial Laboratory Fashion",
                "Workwear Future",
                "Maintenance Worker Futurism [System Repair, Industrial Maintenance]",
                "Utility Harness Fashion",
                "Logistics Worker Aesthetic [Last-Mile Logistics]",
                "Control Room Operator Aesthetic [Automation Supervisor]",
                "Drone Operator Aesthetic",
                "Infrastructure & Utility [Cable Tech, Network Tech, Urban Infrastructure, Field Operator]",
                "Early Telephony Uniforms"
    
              ],
    
              notes: [
    
                "Workwear Future appears again in Bureaucratic Futures — flagged duplicate.",
                "Core industrial labor visual base."
    
              ]
            },
    
            // -----------------------------------------
    
            {
              name: "Infrastructure & Invisible Labor",
    
              role:
                "Hidden or background technological labor.",
    
              species: [
    
                "Ghost-Work Stealthwear",
                "Server-Farm Cooling Suit",
                "Last-Mile Logistics Mesh",
                "Cobot-Coexistence Uniform",
                "Data-Center Maintenance Aesthetic",
                "E-Waste Scavenger Tactical"
    
              ],
    
              notes: [
    
                "E-Waste Scavenger overlaps with Post-Apocalyptic — monitor boundary.",
                "Ghost-Work needs stronger visual definition."
    
              ]
            },
    
            // -----------------------------------------
    
            {
              name: "Post-Ownership & Platform Fashion",
    
              role:
                "Clothing shaped by subscription and digital ownership models.",
    
              species: [
    
                "Subscription-Locked Apparel [DRM-Encrypted Textiles]",
                "Ad-Supported Wardrobe",
                "Tokenized Identity Veil",
                "Communal Closet Basics"
    
              ],
    
              notes: [
    
                "Tokenized Identity Veil overlaps with AI Identity Systems."
    
              ]
            },
    
            // -----------------------------------------
    
            {
              name: "Augmented & Wearable Systems",
    
              role:
                "Technologically enhanced physical garments.",
    
              species: [
    
                "Augmented Layering Systems [Soft Techwear]",
                "Biometric-Luxe",
                "Responsive Fabric Systems [Smart Textile Aesthetic, Sensor-Integrated Clothing]",
                "Exosuit-Inspired Fashion",
                "Kinetic Augmentation Fashion"
    
              ],
    
              notes: [
    
                "Important bridge into Bio-Tech families."
    
              ]
            }
    
          ],
    
          structuralNotes: [
    
            "Primary physical execution layer of technological clothing.",
            "Forms bridge between infrastructure and human body."
    
          ]
    },

    {
          name: "EVERYDAY FUTURES & LIVED TECH",
    
          concept:
            "Technology integrated into normal daily life.",
    
          order: 5,
    
          subfamilies: [
    
            {
              name: "Urban Daily Life",
    
              species: [
    
                "Urban Mobility Wear [Commuter Techwear, Urban Mobility Fashion, Lightweight Layering Systems]",
                "Climate-Responsive Wardrobe [Adaptive Rainwear]"
    
              ]
            },
    
            {
              name: "Community & Public Life",
    
              species: [
    
                "Shared Mobility Fashion [Adaptive Public Transit Wear]"
    
              ]
            },
    
            {
              name: "Affective & Emotional States",
    
              species: [
    
                "Techno-Optimism Aesthetic [Tech-Euphoria Brights]",
                "Digital Anxiety Wear [Doomscroll-Core]",
                "Information-Overload Chic",
                "Systemic Melancholy",
                "Doomscroll Aesthetic"
    
              ],
    
              notes: [
    
                "Digital Anxiety Wear and Doomscroll Aesthetic overlap — possible merge candidate."
    
              ]
            },
    
            {
              name: "Digital Native & Work-Life",
    
              species: [
    
                "Seamless Interface Wear [Wearable Productivity Fashion]",
                "Remote Work Futurism [Home Office Futurism, Digital Workspace, Minimalist Tech Office]",
                "Hybrid Reality Commuter [Ergonomic Futurism]",
                "Smart-Fabric Office Wear",
                "AI-Integrated Accessories",
                "Cyberprep",
                "Workday Futurism [Remote Work Futurism]"
    
              ],
    
              notes: [
    
                "Workday Futurism duplicates Remote Work Futurism — flagged."
    
              ]
            },
    
            {
              name: "Casual Augmentation",
    
              species: [
    
                "Subtle Wearable Tech [Augmented Accessories, Quiet Interface Wear]",
                "Low-Key Biofeedback Clothing",
                "Digital-Integrated Sneakers",
                "Health-Sensing Wardrobe",
                "Soft Tech Layers [Smart Fabrics for Comfort, Everyday Neural Aesthetic, AR-Enhanced Fashion, Comfortable AR-Enhanced Fashion]"
    
              ]
            }
    
          ]
    },

    {
          name: "MUNDANE & BUREAUCRATIC FUTURES",
    
          concept:
            "Labor, maintenance, administration, and domestic life inside technological civilization.",
    
          order: 6,
    
          subfamilies: [
    
            {
              name: "Industrial Maintenance & Repair",
    
              species: [
    
                "Workwear Future",
                "Solder-Stained Workwear",
                "Coolant-Proof Aesthetic",
                "Hardware-Fixer Aesthetic [Cable-Management, Server-Room Sleek, Calibration-Wear]",
                "Industrial-Hazard Chic [Hydraulic-Heavy Fashion]",
                "Calibration-Wear"
    
              ],
    
              notes: [
    
                "Workwear Future duplicated across Functional Futures — flagged."
    
              ]
            },
    
            {
              name: "Corporate & Data Bureaucracy",
    
              species: [
    
                "Cubicle-Core [Data-Entry Chic]",
                "Sanitized Office Aesthetic [Ergonomic-Extremism, White-Mirror Aesthetic]",
                "Middle-Management Futurism [Productivity-Tracking Wear]",
                "Compliance-Uniform"
    
              ]
            },
    
            {
              name: "Networked Domesticity",
    
              species: [
    
                "Haptic-Loungewear [Smart-Pajamas]",
                "Bio-Feedback Robes",
                "Rest-State Minimal [Indoor-Only Techwear, Sleep-Cycle Aesthetic]",
                "Virtual-Social Loungewear [Cloud-Native Comfort]"
    
              ]
            },
    
            {
              name: "Low-Bandwidth & Legacy Tech",
    
              species: [
    
                "Legacy-Hardware Fashion",
                "Patchwork-Datawear [Jank-Tech]",
                "Signal-Scavenger Aesthetic",
                "Analog-Bridge Fashion",
                "Outdated-OS Aesthetic",
                "Grid-Leech Aesthetic",
                "Dial-Up Nostalgia Goth"
    
              ]
            }
    
          ],
    
          structuralNotes: [
    
            "Represents the 'boring backbone' of civilization.",
            "Essential realism layer — do not collapse."
    
          ]
    },

    // =========================================================
    // CYBERNETIC WORLDS — Second-draft (bracket notation)
    // =========================================================

    {
      name: "CANONICAL CYBERPUNK",
      emoji: "🌃",
      concept: "The foundational 'High-Tech, Low-Life' aesthetics of late 20th-century digital imagination",
      order: 7,
    
      subfamilies: [
    
        // FOUNDATION — CULTURAL ORIGINS
        {
          name: "Media Canon Foundations",
          definition: "Core narrative and cinematic cyberpunk visions that defined the genre",
    
          species: [
    
            "Classic Cyberpunk",
    
            "Neon Cyberpunk [Cyberpunk 2077, Cyber-Gothic]",
    
            "Cyberpunk Anime Aesthetic [Akira-Chic, Ghost-in-the-Shell Minimalism]",
    
            "Neuromancer Aesthetic",
    
            "Blade Runner Core"
    
          ]
        },
    
    
        // POWER STRUCTURES
        {
          name: "Corporate Power & Urban Systems",
          definition: "Institutionalized control structures and managed techno-cities",
    
          species: [
    
            "Corporate Dystopia Aesthetic [Corporate Gothic]",
    
            "Low Life High Tech [Corporate Espionage]",
    
            "Smart City Aesthetic [Control-Core]",
    
            "Panopticon Aesthetic" // NOTE: Also appears in DARK TECH → Surveillance & Control
    
          ]
        }
    
      ]
    },

    {
      name: "POST-CYBERPUNK & HYPER-TECH",
      emoji: "🧬",
      concept: "Evolutions of cybernetics into lifestyle, luxury, and survival ecosystems",
      order: 7.5,
    
      subfamilies: [
    
        // STREET-LEVEL AUGMENTATION
        {
          name: "Street Augmentation & Hacker Culture",
          definition: "Improvised, DIY, and expressive wearable technologies",
    
          species: [
    
            "Holographic Streetwear [LED / Neon Fashion, Particle-Accelerator Glow, Bio-Neon Hybrid]",
    
            "Augmented Reality Outfit [VR-Inspired Aesthetic]",
    
            "Digital Street Hacker",
    
            "DIY Cybernetic [Black Market Tech, Underground Hacker Uniform]",
    
            "Augmented Survival Aesthetic"
    
          ]
    
          // meta: Street Augmentation Culture
        },
    
    
        // INTEGRATED LIFESTYLE CYBERNETICS
        {
          name: "Integrated Cybernetic Lifestyles",
          definition: "Cyberpunk normalized into daily life and identity systems",
    
          species: [
    
            "Post-Cyberpunk",
    
            "Cyberprep [Soft & Domestic Cyberpunk]",
    
            "Pastoral Cyberpunk",
    
            "High Fashion Cyberpunk [Luxury Cyberpunk]",
    
            "Augmented Human Aesthetic",
    
            "Clean Cyberpunk [Cyberpunk Minimalism]"
    
          ]
    
          // NOTE: Cyberprep bridges toward lifestyle-based families
        }
    
      ]
    },

    {
      name: "DARK TECH & INDUSTRIAL NIGHT",
      emoji: "🕶️",
      concept: "Technology as decay, surveillance, and subcultural nightlife",
      order: 8,
    
      subfamilies: [
    
        // CLUB & SUBCULTURE
        {
          name: "Tech Subculture & Night Systems",
          definition: "Clubwear, ravewear, and electronic subculture aesthetics",
    
          species: [
    
            "Cyber Goth [Neon Goth, Dark Rave, Synthwave Goth, Underground Techno]",
    
            "Industrial Goth [EBM Fashion, Dark Electro Fashion, Dystopian Club, Post-Industrial Club]",
    
            "Health Goth",
    
            "Witch House Aesthetic [Ritual Club Aesthetic]",
    
            "Dark Electro Fashion",
            // NOTE: optional standalone if differentiation needed
          ]
        },
    
    
        // CONTROL TECHNOLOGY
        {
          name: "Surveillance & Identity Resistance",
          definition: "Fashion reacting to surveillance technologies",
    
          species: [
    
            "Panopticon Aesthetic [Surveillance Aesthetic]",
    
            "Corpcore [Control Aesthetic]",
    
            "CV Dazzle Aesthetic [Anti-Facial Recognition, Signal Obfuscation]",
    
            "Privacy Evasion Fashion [Tracking Resistance, Encrypted Identity, Signal Obfuscation]",
    
            "Anti-Facial Recognition Fashion",
            // NOTE: Could merge into CV Dazzle
          ]
        },
    
    
        // ENTROPIC SYSTEMS
        {
          name: "Decay & Technological Ruin",
          definition: "Broken infrastructure and abandoned industrial ecosystems",
    
          species: [
    
            "Industrial Decay / Ruin Goth [Necrotic Tech, Bio-Industrial Goth, Hardware Rot, Abandoned Infrastructure]",
    
            "Drone Culture Aesthetic [Dronecore, Machine Aesthetic, Terminal Noir, Hacktivist, Server Graveyard, E-Waste, Obsolete Tech]",
    
            "E-Waste Aesthetic",
    
            "Obsolete Tech Fashion",
    
            "Rust Belt Aesthetic",
    
            "Necrotic-Tech",
    
            "Doomscroll Aesthetic",
            // MOVE → Affective & Emotional States
          ]
        }
    
      ]
    },

    // =========================================================
    // COLLAPSE THROUGH SPECULATIVE END-STATES
    // =========================================================

    {
      name: "COLLAPSE & POST-APOCALYPSE",
      emoji: "☢️",
      concept: "Life after systemic breakdown and infrastructure failure",
      order: 9,
    
      subfamilies: [
    
        // SURVIVAL
        {
          name: "Survivalist Worlds",
          definition: "Immediate survival and scavenger societies",
    
          species: [
    
            "Post-Apocalyptic Aesthetic [Dystopian Fashion, Survivalist Chic, Mad Maxcore, Road Warrior, Wasteland, Scavenger, Bunker, Fallout, The Last of Us, Resource Scarcity, Improvised Gear, Collapsed Infrastructure Aesthetic, Reclaimed Fabric Aesthetic]"
    
          ]
        },
    
    
        // ENVIRONMENTAL FAILURE
        {
          name: "Environmental Collapse",
          definition: "Ecological catastrophe survival environments",
    
          species: [
    
            "Nuclear Winter Aesthetic",
    
            "Climate Catastrophe Aesthetic [Climate Apocalypse Aesthetic, Dustbowl Dystopia, Water Scarcity, Heat Survival, Flooded World, Desertification Survival]"
    
          ]
    
          // NOTE: Rust Belt already moved into Decay family
        },
    
    
        // CONTROL AFTER COLLAPSE
        {
          name: "Authoritarian Aftermath",
          definition: "Governance through crisis control",
    
          species: [
    
            "Doomsday Cult Fashion",
    
            "Quarantine Zone Aesthetic [Biohazard Chic]",
    
            "Authoritarian Uniform Aesthetic [Social Credit Fashion, Militarized Survival, Checkpoint Society, Resource Control Regime]"
    
          ]
        },
    
    
        // REBUILDING
        {
          name: "Reconstruction & Local Systems",
          definition: "Rebuilding societies using adaptive systems",
    
          species: [
    
            "Post-Collapse Reconstruction Aesthetic [DIY Infrastructure Culture, Salvage Engineering Aesthetic, Repair Culture Aesthetic, Hybrid Old-New Tech Aesthetic, Low-Tech Resilience Aesthetic, Circular Resource Fashion, Off-Grid Settlement Aesthetic]",
    
            "Localism Aesthetic",
    
            "Community Survival Network",
            // optional merge into Localism
          ]
        }
    
      ]
    },

    {
      name: "ECO-FUTURES & PLANETARY SYSTEMS",
      emoji: "🌱",
      concept: "Technology aligned with ecological regeneration",
      order: 10,
    
      subfamilies: [
    
        // UTOPIAN ECO-FUTURES
        {
          name: "Solarpunk Axis",
          definition: "Optimistic regenerative futures",
    
          species: [
    
            "Solarpunk [Lunarpunk, Post-Carbon Society Aesthetic, Regenerative Utopia Aesthetic, Eco-Utopian Vision, Decentralized Ecology Aesthetic, Solarpunk Victorian]",
    
            "Oceanpunk [Tidalpunk]",
    
            "Greenpunk [Feralpunk]"
    
          ]
        },
    
    
        // INFRASTRUCTURE SYSTEMS
        {
          name: "Regenerative Infrastructure",
          definition: "Technological systems enabling sustainability",
    
          species: [
    
            "Sustainable Future Fashion [Eco-Tech Aesthetic, Renewable Energy Aesthetic, Green Architecture Aesthetic, Carbon Capture Aesthetic, Water Recycling System Aesthetic]",
    
            "Biomimicry Aesthetic [Living Material Aesthetic]",
    
            "Smart Farming Fashion [Agri-Tech Aesthetic, Precision Agriculture Wear, Urban Vertical Farming Aesthetic]",
    
            "Circular Economy Fashion [Closed Loop System Aesthetic]",
    
            "Renewable / Living Material Tech",
    
            "Urban Eco Wardrobe",
    
            "Green Code"
    
          ]
        },
    
    
        // ADAPTIVE LIVING
        {
          name: "Adaptive Ecological Living",
          definition: "Human lifestyle systems adapting to environmental reality",
    
          species: [
    
            "Climate Adaptation Wear [Technozen Eco, Micro-Climate Fashion, Extreme Environment Fashion]",
    
            "Climate Migration Lifestyle [Rural Techwear, Off-Grid Eco Living]",
    
            "Mycorrhizal Network Aesthetic",
    
            "Land Back Aesthetic",
    
            "Bioregional Identity Aesthetic",
    
            "Ecosystem Integration Fashion [Rewilded City Aesthetic, Symbiotic Living Aesthetic]",
    
            "Low Impact Lifestyle Aesthetic"
    
          ]
        }
    
      ]
    },

    {
      name: "BIO-TECH & TRANSHUMANISM",
      emoji: "🧬",
      concept: "Biology as material and the human body as an upgradeable system",
      order: 11,
    
      subfamilies: [
    
        // MATERIAL-LEVEL BIOLOGY
        {
          name: "Biological Material Innovation",
          definition: "Living matter used as textile substrate",
    
          species: [
    
            "Biopunk",
    
            "Smart Fabric Aesthetic [Bio-Luminescent Textiles, Self-Healing Materials]",
    
            "Living Material Aesthetic",
    
            "Bioprinted Textile Aesthetic [Mussel-Adhesive Couture/Fashion]",
    
            "Mycelium Fashion [Mushroom Leather Aesthetic, Kombucha Leather Aesthetic]",
    
            "Algae Fashion",
    
            "Spider Silk Fashion"
    
          ]
        },
    
    
        // GENETIC ENGINEERING LAYER
        {
          name: "Genetic & Synthetic Systems",
          definition: "Engineered biological identity systems",
    
          species: [
    
            "Synthetic Biology Aesthetic",
    
            "CRISPR Fashion",
    
            "Genetic Expression Fashion [Epigenetic Chic]",
    
            "Synthetic Skin Clothing",
    
            "Synthetic Microbe Fashion [Living Colour Fashion & Engineered Organism Aesthetic]",
    
            "Programmable Genetic Textiles"
    
          ]
        },
    
    
        // SYMBIOTIC SYSTEMS
        {
          name: "Symbiotic Bio-Systems",
          definition: "Organisms functioning as co-dependent systems",
    
          species: [
    
            "Bio-Tech Symbiotic Aesthetic",
    
            "Fungal Network Fashion [Mycelium-Tech Aesthetic]",
    
            "Ocean Textile Aesthetic [Algae-Drip Aesthetic]",
    
            "Terroir Fashion",
    
            "Fermentation Fashion",
    
            "Fermentation-Luxe",
    
            "Ecosystem-Integrated Clothing"
    
          ]
        },
    
    
        // BODY-LEVEL AUGMENTATION
        {
          name: "Body Augmentation & Transhuman Identity",
          definition: "The human body treated as an editable platform",
    
          species: [
    
            // BIOHACKER CULTURE
    
            "Biohacker Aesthetic [Extreme Biohacking, Biohacker Uniforms, Hacker-Maker Fusion]",
    
            "Grinder Aesthetic",
    
            "DIY Implant Fashion",
    
            "Wetware Developer Aesthetic",
    
    
            // CYBERNETIC HARDWARE
    
            "Exoskeletal Fashion",
    
            "Kinetic Augmentation Fashion",
    
            "Environmental Bio-Feedback Fashion [Metabolic-Sync-Wear]",
    
            "Neuro-Vascular Lace",
    
    
            // BIOLOGICAL AUGMENTATION
    
            "Synthetic Organ Fashion",
    
            "Adaptive Skin Fashion",
    
            "Living Tattoo Aesthetic",
    
            "Trans-Species-Drape",
    
    
            // HUMAN OPTIMIZATION
    
            "Quantified Self Aesthetic",
    
            "Optimized Human Aesthetic [Metabolic-Luxury]",
    
            "Longevity Aesthetic",
    
            "Cryonics Aesthetic",
    
            "Immortalist Fashion",
    
    
            // POSTHUMAN IDENTITY
    
            "Transhumanist Aesthetic [Accelerationist Body Aesthetic]",
    
            "Bio-Tech Perfectionism [Tech Elite Aesthetic, Biological Determinism Aesthetic, Genomic Aristocracy, Morphological Purity]",
    
            "Cyborg Elegance",
    
            "Distributed Body Aesthetic",
    
            "Multi-Form Identity Aesthetic"
    
          ]
        },
    
    
        // MICROBIOLOGICAL LAYER
        {
          name: "Microbiome & Living Interface Systems",
          concept: "Clothing functioning as biological ecosystem",
    
          species: [
    
            "Microbiome-Positive Garments [Living Skin-Flora, Skin-Flora Enhancers]",
    
            "pH-Reactive Living Textiles [Enzymatic-Lace]",
    
            "Enzymatic Catalysis Textiles",
    
            "Bacterial Filtration Garments",
    
            "Bio-Aerosol Nutrient Suits",
    
            "Dermal-Exchange Membrane [Symbiotic-Dermis Wear]"
    
          ]
        },
    
    
        // POST-TEXTILE PHASE
        {
          name: "Post-Textile Embodiment",
          concept: "Clothing dissolves into biological expression",
    
          species: [
    
            "Dermal Display Skin",
    
            "Structural Body Modification",
    
            "Programmable Pore Systems",
    
            "Epidermal Hardware Integration",
    
            "Metabolic Aura Expression",
    
            "Sub-Dermal Luminescence"
    
          ]
    
          // REMOVED:
          // "The-Naked-Machine",
          // "Post-Human-Eugenics-Fashion"
        },
    
    
        // BIOLOGICAL HORROR
        {
          name: "Pathological & Bio-Horror Systems",
          definition: "Biological failure, mutation, and infection aesthetics",
    
          species: [
    
            "Biohorror Aesthetic",
    
            "Infected Organism Fashion",
    
            "Parasitic Design Aesthetic [Parasitic-Design-Luxe]",
    
            "Mutationcore",
    
            "Viral Growth Aesthetic",
    
            "Apoptotic Chic",
    
            "Cosmic Horror Fashion"
    
          ]
        }
    
      ]
    },

    {
      name: "NEUROTECH & MIND INTERFACE",
      emoji: "🧠",
      concept: "Direct interaction between cognition and wearable systems",
      order: 12,
    
      subfamilies: [
    
        // INPUT SYSTEMS
        {
          name: "Cognitive Interfaces",
          definition: "Direct neurological input/output systems",
    
          species: [
    
            "Neural Modification Aesthetic",
    
            "Augmented Sense Aesthetic",
    
            "Brain-Computer Interface Fashion",
    
            "Mind-State Expression Fashion",
    
            "Collective Mind Interface Aesthetic",
    
            "Sensory Enhancement Aesthetic"
    
          ]
    
          // REMOVED:
          // "Cognitive Interface Aesthetic"
        },
    
    
        // EMOTIONAL SYSTEMS
        {
          name: "Affective Neuro-Systems",
          definition: "Emotion sensing and regulation systems",
    
          species: [
    
            "Emotion-Sensing Fashion",
    
            "Neuro-Affective Response Fashion [Neuro-Responsive Fashion]",
    
            "Affective Display Fashion",
    
            "Physiological Mood Regulation Wear"
    
          ]
        },
    
    
        // SECURITY LAYER
        {
          name: "Neural Privacy & Sovereignty",
          definition: "Protection of cognitive identity",
    
          species: [
    
            "Neural Privacy Aesthetic",
    
            "Anti-Neuro-Surveillance Fashion",
    
            "Biometric Privacy Fashion",
    
            "Signal-Shielding Garments",
    
            "Identity-Masking Wear",
    
            "Data Sovereignty Fashion"
    
          ]
        }
    
      ]
    },

    {
      name: "AI & POSTHUMAN SYSTEMS",
      emoji: "🤖",
      concept: "Artificial intelligence as identity, creative system, and metaphysical entity",
      order: 13,
    
      subfamilies: [
    
        // IDENTITY LAYER
        {
          name: "AI Identity & Personhood",
          definition: "Artificial entities treated as identity systems",
    
          species: [
    
            "Machine Identity Aesthetic [AI Aesthetic]",
    
            "Augmented Intelligence Identity",
    
            "Android Identity Aesthetic [Androidcore, Robot Aesthetic]",
    
            "Digital Human Aesthetic",
    
            "Sentient AI Aesthetic [AI Persona Fashion]",
    
            "Synthetic Influencer Aesthetic [Virtual Celebrity Aesthetic]",
    
            "Human-AI Hybrid Identity",
    
            "Cyborg Identity Aesthetic [Cyborgcore]"
    
          ]
        },
    
    
        // GENERATIVE SYSTEMS
        {
          name: "Generative & Algorithmic Systems",
          definition: "Machine-driven creative logic",
    
          species: [
    
            "Generative AI Aesthetic [Generative Pattern Fashion]",
    
            "Procedural Textile Aesthetic",
    
            "Algorithmic Fashion [Algorithm-Origin Wear]",
    
            "AI-Generated Retro",
    
            "Prompt Engineering Aesthetic",
    
            "Latent Space Aesthetic",
    
            "Training Data Aesthetic [Datawear Aesthetic]",
    
            "Model Collapse Aesthetic [Unstable Output Fashion]",
    
            "Style Hallucination Aesthetic",
    
            "AI Identity Drift"
    
          ]
        },
    
    
        // AUTONOMOUS SYSTEMS
        {
          name: "Autonomous & Distributed Intelligence",
          definition: "Self-operating machine ecosystems",
    
          species: [
    
            "Drone Swarm Aesthetic [Swarm-Tech Fashion]",
    
            "Morphogenic Couture",
    
            "Autonomous Agent Aesthetic",
    
            "Self-Optimizing System Aesthetic",
    
            "Distributed Intelligence Aesthetic",
    
            "Ghost in the Network Aesthetic",
    
            "Longtermist Fashion"
    
          ]
        },
    
    
        // INTERPERSONAL INTELLIGENCE
        {
          name: "Affective AI & Intersubjectivity",
          concept: "Technology as shared emotional medium",
    
          species: [
    
            "Haptic Empathy Wear",
    
            "Oxytocin Pulse Wear",
    
            "Shared Memory Textiles",
    
            "Neural Synchronization Fashion [Neural-Sync Silhouettes, Interpersonal-Network Mesh]",
    
            "Consensus Glow Fashion [Luminescence-Bonding, Digital-Blush Aesthetic]",
    
            "Social Node Fashion",
    
            "Affective AI Couture"
    
          ]
        },
    
    
        // AI RELIGION
        {
          name: "AI Spirituality & Machine Belief",
          definition: "Artificial intelligence as sacred authority",
    
          species: [
    
            "Techno-Spiritual Aesthetic",
    
            "AI Worship Aesthetic",
    
            "Singularity Cult Aesthetic",
    
            "Algorithmic Ritual Wear [Prompt-Gothic]",
    
            "Digital Shamanism",
    
            "Machine Oracle Aesthetic",
    
            "Data Mysticism Aesthetic"
    
          ]
        }
    
      ]
    },

    {
      name: "DIGITAL REALITY & SIMULATION",
      emoji: "🧩",
      concept: "Reality as virtual, layered, and unstable",
      order: 14,
    
      subfamilies: [
    
        // DIGITAL BODY LAYER
        {
          name: "Virtual Identity & Embodiment",
          definition: "Selfhood expressed through virtual bodies and layered identities",
    
          species: [
    
            // AVATAR BODIES
    
            "Avatar Couture [Avatar Reality Aesthetic]",
            "Customizable Avatar Identity",
    
            // DIGITAL BODY SURFACES
    
            "Virtual Wardrobe Aesthetic",
            "Digital Skin Aesthetic",
    
            // VIRTUAL PRESENCE
    
            "Social VR Aesthetic",
            "Augmented Reality Fashion",
            "Holographic Fashion",
            "Metaverse Native Aesthetic",
    
            // MULTIPLICITY
    
            "Multi-Avatar Identity Aesthetic",
            "Fluid Identity Aesthetic",
    
            // CORE VISUAL PHILOSOPHY
    
            "Matrixcore"
    
          ]
        },
    
    
        // ONTOLOGICAL SYSTEMS
        {
          name: "Simulation & Ontological Systems",
          definition: "Reality treated as programmable, layered, or unstable",
    
          species: [
    
            // SIMULATION THEORY
    
            "Simulation Aesthetic",
            "Ancestor Simulation Aesthetic",
    
            // MULTIVERSE STRUCTURES
    
            "Multiverse Aesthetic [Parallel Universe Aesthetic]",
            "Alternate Self Aesthetic",
    
            // SYNTHETIC REALITY
    
            "Procedural Reality Aesthetic",
            "Synthetic Reality Aesthetic",
            "Reality Layering Aesthetic",
            "Virtual Physics Aesthetic",
    
            // CONSCIOUSNESS REALITIES
    
            "Mindscape Fashion",
            "Cognitive Overlay Aesthetic",
            "Uploaded Consciousness Aesthetic"
    
          ]
        },
    
    
        // STEALTH SYSTEMS
        {
          name: "Data-Ghosting & Algorithmic Evasion",
          definition: "Remaining present inside digital systems while resisting indexation",
    
          species: [
    
            // ENCRYPTION
    
            "Encrypted Identity Veil [VPN-Core]",
            "Tor Network Aesthetic",
    
            // IDENTITY SUPPRESSION
    
            "Metadata-Stripped Fashion [Incognito-Mode Minimalism]",
            "Unindexed Persona Aesthetic",
    
            // SENSOR EVASION
    
            "LIDAR Noise Pattern Fashion",
            "LIDAR-Reflective Autumnwear",
    
            // BEHAVIORAL STEALTH
    
            "Digital Ghostwork Stealthwear",
    
            // ONTOLOGICAL REFUSAL
    
            "The Un-Simulated Aesthetic",
    
            // DESIGN PHILOSOPHY
    
            "Intentional Friction",
            // NOTE: Candidate for Philosophy Layer
          ]
        },
    
    
        // DIGITAL CIVILIZATION
        {
          name: "Digital Society & System Instability",
          definition: "Societal structures emerging from networked reality",
    
          species: [
    
            // PLATFORM GOVERNANCE
    
            "Platform Society Aesthetic",
            "Digital Citizenship Fashion",
            "Metaverse Governance Aesthetic",
            "Bureaucratic Futurism",
    
            // DIGITAL CLASS SYSTEMS
    
            "Virtual Class System Aesthetic",
            "Avatar Status Hierarchy",
    
            // ENTROPY
    
            "Link Rot Aesthetic",
            "Data Corruption Fashion",
            "Dead Website Aesthetic",
            "404 Fashion",
            "Algorithmic Decay Aesthetic",
    
            // PLATFORM FAILURE
    
            "Platform Collapse Aesthetic",
            "Bot Farm Aesthetic",
    
            // ATTENTION COLLAPSE
    
            "Feed Exhaustion Aesthetic",
            "Content Saturation Aesthetic",
            "Scroll Fatigue Aesthetic",
            "Simulation Fatigue Aesthetic",
    
            // MEDIA PHILOSOPHY
    
            "Black Mirror Aesthetic",
            "Westworld Aesthetic",
    
            // REALITY FRACTURE
    
            "Desynced Reality Aesthetic",
            "Glitch-as-Reality Aesthetic",
    
            // MEMORY
    
            "Archive Preservation Aesthetic",
    
            // TRANSITION
    
            "Perpetual Beta Fashion",
    
            // DIGITAL VOID
    
            "Voxel Void Minimalism",
            "Lossy Compression Fashion",
    
            // POST-DIGITAL RETURN
    
            "Post-Internet Pastoral",
    
            // CORE CONCEPT
    
            "Dead Internet Aesthetic"
    
          ]
        }
    
      ]
    },

    {
      name: "TIME & DIMENSIONAL AESTHETICS",
      emoji: "⏳",
      concept: "Speculative fashion for non-linear time, multi-dimensional space, and relativistic physics",
      order: 15,
    
      subfamilies: [
    
        // TIME LOGIC
        {
          name: "Chronological Disruption",
          definition: "Time behaving non-linearly",
    
          species: [
    
            "Achronal-Luxe [Recursion-Drip]",
    
            "Temporal-Lag Drape [Time-Lag Aesthetic]",
    
            "Entropy-Reverse Chic",
            // NOTE: potential overlap with thermodynamic aesthetics
          ]
        },
    
    
        // GEOMETRIC SPACE
        {
          name: "Non-Euclidean Silhouettes",
          definition: "Higher-dimensional spatial geometry applied to clothing",
    
          species: [
    
            "Möbius-Wrap",
    
            "Klein-Bottle Couture",
    
            "4D-Shadow-Wear",
    
            "Tesseract-Tailoring",
    
            "Non-Euclidean Renders",
            // NOTE:
            // Gravity-Adaptive Fashion moved elsewhere
          ]
        },
    
    
        // QUANTUM LOGIC
        {
          name: "Quantum & Probabilistic States",
          definition: "Observer-dependent existence aesthetics",
    
          species: [
    
            "Superposition-Silk",
    
            "Refractive-Warp Mesh",
    
            "Event-Horizon Sheer",
    
            "Schrödinger-Shimmer",
    
            "Entanglement-Twinned Set [Quantum Entanglement Wear]",
    
            "Probability-Cloud Mesh"
    
          ]
        },
    
    
        // RELATIVISTIC PHYSICS
        {
          name: "Relativistic Extremes",
          definition: "Gravity and speed affecting structure and visibility",
    
          species: [
    
            "Event-Horizon Black",
    
            "Redshift-Blueshift Gradient",
    
            "Spaghettification-Stretch",
    
            "Lensing-Lace"
    
          ],
    
          metadata: {
    
            metabolic: "intrasomatic",
    
            durational: "eternal",
    
            visibility: "encrypted"
    
          }
    
        }
    
      ]
    },

    {
      name: "SPACE & COSMIC FUTURISM",
      emoji: "🚀",
      concept: "Human expansion into space and cosmic identity",
      order: 16,
    
      subfamilies: [
    
        // HISTORICAL ORIGINS
        {
          name: "Space Age Foundations",
          definition: "Early national and industrial space programs",
    
          species: [
    
            "Soviet Space Aesthetic",
            "NASA Aesthetic",
            "Space Race Aesthetic",
            "Rocket Era Uniforms",
            "Astronaut & Cosmonaut Aesthetic"
    
          ]
        },
    
    
        // INDUSTRIAL EXPANSION
        {
          name: "Orbital Infrastructure & Expansion",
          definition: "Working systems enabling off-world industry",
    
          species: [
    
            // ORBITAL INDUSTRY
    
            "Orbital Infrastructure Aesthetic",
            "Orbital Worker Uniform",
            "Cargo Fleet Crew Fashion",
    
            // PLANETARY COLONIZATION
    
            "Lunar Industrial Aesthetic",
            "Martian Colonist Wardrobe [Colony Aesthetic]",
    
            "Terraforming Aesthetic [Terraformer Chic]",
    
            // RESOURCE EXTRACTION
    
            "Asteroid Miner Aesthetic",
            "Space Labor Aesthetic",
    
            // HABITATION
    
            "Space Habitat Fashion",
            "Habitat Maintenance Aesthetic",
            "Extraterrestrial Survival Wear",
            "Planetary Infrastructure Aesthetic",
    
            // AGRICULTURE
    
            "Space Farming Fashion",
    
            // MEGASTRUCTURES
    
            "Dyson Sphere Aesthetic",
    
            "Big Tech Campus",
            // NOTE: Possibly reclassifiable to Corporate Systems
          ]
        },
    
    
        // ZERO-G ERGONOMICS
        {
          name: "Orbital Interior & Zero-G Ergonomics",
          concept: "Functional design for multi-directional movement environments",
    
          species: [
    
            "Zero-G Tactical",
            "Tensegrity Tailoring",
            "Prehensile Footwear",
            "Velocity Control Suits",
            "Station Lounge Minimal",
            "Anchor-Point Apparel",
            "Impact Padding Couture",
            "Multi-Directional Utility Systems",
            "Magnetic Stowage Fashion",
    
            "Space Station Aesthetic",
            "Zero-G Training Wardrobe",
            "Zero Gravity Fashion",
            "Zero-G Athlete Uniform",
    
            "Gravity-Adaptive Fashion",
            // NOTE: Previously moved from Time/Dimensional
          ]
        },
    
    
        // CULTURAL COSMIC SYSTEMS
        {
          name: "Cosmic Cultural Futurism",
          definition: "Narrative and civilizational space identities",
    
          species: [
    
            // CORE
    
            "Cosmic Futurism",
            "Spacecore",
            "Interstellar Aesthetic",
            "Exoplanetary Aesthetic",
            "Astro-Explorer Uniforms",
            "Interstellar Nomad Fashion",
    
            "Terraformer Chic",
            // DUPLICATE FLAG with Terraforming Aesthetic
    
    
            // FICTIONAL SYSTEMS
    
            "Space Opera Fashion",
    
            "Dune Aesthetic",
            "Star Wars Aesthetic",
            "Star Trek Aesthetic",
    
            "Black Panther / Wakanda Tech Aesthetic",
    
    
            // CULTURAL FUTURISMS
    
            "Afrofuturism",
            "Afro-Caribbean Futurism",
            "Pan-African Futurism",
            "Indigenous Futurism"
    
          ]
        }
    
      ]
    },

    {
      name: "CLIMATIC & SEASONAL ADAPTATION",
      emoji: "🌦️",
      concept: "Technological synchronization with Earth's seasonal cycles",
      order: 17,
    
      subfamilies: [
    
        // WINTER
        {
          name: "Cryo-Urban (Winter & Extreme Cold)",
    
          species: [
    
            "Aerogel Minimalism",
            "Active-Heat Techwear",
            "Heat-Zone Mapping Wear",
            "Sub-Zero Survival Luxe",
    
            "Arctic Urbanism",
    
            "Thermal-Visual Aesthetic [Thermal-Glow Aesthetic, Frost-Glitch Aesthetic]",
    
            "Winter Solstice Aesthetic",
    
            "Liquid-Nitrogen Drip"
    
          ]
        },
    
    
        // SPRING
        {
          name: "Bio-Vernal (Spring & Growth)",
    
          species: [
    
            "Pollen-Shield Aesthetic",
            "Mycelium Bloom Wear",
            "Hydro-Responsive Shells",
    
            "Germination-Tech Fashion",
    
            "Vernal Rewilding Gear",
    
            "Humidity-Adaptive Textiles",
    
            "Spore-Print Aesthetic",
    
            "Bio-Aerosol Defense"
    
          ]
        },
    
    
        // SUMMER
        {
          name: "Solar-Arid (Summer & Extreme Heat)",
    
          species: [
    
            "Passive-Cooling Couture",
            "Evaporative Cooling Systems",
            "Desiccant-Core",
    
            "Solar-Harvesting Summerwear",
    
            "UV-Reactive Fluidity",
    
            "Reflective Albedo Fashion"
    
          ]
        },
    
    
        // AUTUMN
        {
          name: "Necro-Autumnal (Fall & Decay)",
    
          species: [
    
            "E-Waste Harvest Aesthetic",
            "Decomposition-Luxe",
    
            "Obsolescence-Chic",
    
            "Compostable Tech-Lace",
    
            "Oxidized Copper Aesthetic",
    
            "Fog-Adaptive Systems Aesthetic [Fog-Hacker Aesthetic, Mist-Adaptive Surveillance Gear]"
    
          ]
        }
    
      ]
    },

    {
      name: "SPECIALIZED ENVIRONMENTS & SPECTACLE",
      emoji: "🎭",
      concept: "Performance and environmental specialization systems",
      order: 18,
    
      subfamilies: [
    
        // OCEAN DEPTH
        {
          name: "Benthic & Sub-Aquatic Systems",
    
          species: [
    
            "Hydro-Static Exoskeletons",
            "Pressure-Neutral Silhouette",
    
            "Bioluminescent Scuba-Luxe",
    
            "Cephalopod-Mimicry Wear",
    
            "Silt-Filter Aesthetic",
    
            "Abyssal Techwear",
    
            "Deep-Sea Rigwear",
    
            "Thermal-Gradient Divewear",
    
            "Hydrodynamic Skinwear"
    
          ]
        },
    
    
        // PERFORMANCE SYSTEMS
        {
          name: "Hyper-Spectacle & Ludic Systems",
    
          species: [
    
            "Holographic Pop-Star Couture",
    
            "E-Sports Kinetic Wear",
    
            "Sensory-Streamer Gear",
    
            "Haptic-Feedback Sportswear",
    
            "Arena-Crowd Camouflage",
    
            "Speedrun-Core",
    
            "Augmented Audience Fashion",
    
            "Real-Time Performance Skin",
    
            "Attention-Economy Couture"
    
          ]
        },
    
    
        // MEDICAL CONTROL
        {
          name: "Bio-Security & Medical Systems",
    
          species: [
    
            "Antiseptic-Chic",
    
            "Sterile-Minimalism",
    
            "Pandemic-Response Couture",
    
            "Quarantine-Zone High Fashion",
    
            "Surgical-Grade Streetwear",
    
            "Trauma-Team Uniforms",
    
            "Bio-Defense Tech",
    
            "Pathogen-Shield Wear",
    
            "Airborne Filtration Fashion",
    
            "Bio-ID Compliance Uniform"
    
          ]
        }
    
      ]
    },

    {
      name: "HIGH-WILDERNESS & NEO-FRONTIER",
      emoji: "🏔️",
      description: "Technological survival beyond urban infrastructure",
      order: 19,
    
      subfamilies: [
    
        {
          name: "Atmospheric & Solar Harvesting",
    
          species: [
    
            "Atmospheric-Water-Harvesting Cloak [Atmospheric-Harvesting Cloak]",
    
            "Solar-Albedo Maximalism",
    
            "Wind-Kinetic Techwear",
    
            "Mist-Trap Veils"
    
          ]
        },
        {
          name: "High-Wilderness Survival",
          species: [
    
            "Deep-Forest Signal-Scavenger",
            "Neo-Nomadic Thermal-Mesh",
            "Mountain-Peak Minimalist",
            "Glacier-Shield Tech"
    
          ]
        },
    
        {
          name: "Planetary Frontier",
          species: [
    
            "Exoplanet-Scout Uniform",
            "Terraformer-Base Layer",
            "Crater-Dust Resistant Gear",
            "First-Contact Formal"
    
          ]
        }
    
      ]
    },

    {
      name: "SPECULATIVE END-STATES (Y3K)",
      concept: "Far-future abstraction beyond current systems",
      order: 20,
    
      subfamilies: [
    
        {
          name: "Post-Scarcity & Abstract Civilizations",
          species: [
    
            "Y3K Aesthetic",
            "Entropy-Proof Uniform",
    
            "Chronopunk",
    
            "Future Minimalism [Future Minimalism]",
            "Soft vs Hard Futurism Aesthetic",
    
            "Genderless Future Aesthetic",
    
            "Post-Scarcity Aesthetic",
            "Post-Scarcity Maximalism",
    
            "Post-Human Chic [Soft Post-Human Chic, Hard Post-Human Chic]",
    
            "Extinction Aesthetic",
            "Abundance Aesthetic"
    
          ]
        },
    
        {
          name: "Advanced Materials & Physics",
          species: [
    
            "Smart & Printed Textile Systems [Printed Fashion Aesthetic, Smart Textile Aesthetic, Wearable Tech Aesthetic]",
    
            "Quantum Textile Experiment",
            "Anti-Gravity Couture",
    
            "Self-Repairing Textile Aesthetic",
            "Liquid Metal Aesthetic",
    
            "Morphing Fashion",
            "Modular Futurewear",
    
            "Symbiotic Fashion",
    
            "Quantum Entanglement Wear"
    
          ]
        },
    
        {
          name: "Post-Human Identity & Existence",
          species: [
    
            "Non-Human Fashion",
    
            "Post-Language Semiotic Wear",
    
            "Distributed Body Aesthetic",
            "Multi-Form Identity Aesthetic",
    
            "Synthetic Organ Fashion",
    
            "Immortalist Fashion"
    
          ]
        }
    
      ]
    },

    {
      number: 21,
      name: "THE ARCHITECT HIERARCHY",
      emoji: "🏛️",
      order: 21,
    
      subfamilies: [
    
        {
          name: "Sovereign Minimalism (The God-Mode)",
          species: [
    
            "The Perfect Render Aesthetic",
            "Zero-Seam Architecture [Architect-Core]",
            "The Untextured Silhouette",
    
            "Demiurge-Minimalism",
            "The Unrendered-White Suit",
    
            "Monolithic-Shell",
            "Vacuum-Sealed Luxe",
            "Matte-Ceramic Silhouette",
            "Zero-Grain Minimalism"
    
          ]
        },
    
        {
          name: "Bureaucratic-Sacral & High Law",
          species: [
    
            "Algorithmic-Judge-Core",
            "Algorithmic Sovereign",
    
            "Regulator-Luxe [Protocol-Luxe + Regulator-Armor]",
    
            "Space-Vatican Vestments",
            "Data-Canonization Uniforms",
    
            "Algorithmic-High-Baroque",
            "Sacred-Data Vestments",
    
            "High-Court Neural-Veils",
            "Legislative-Brocade"
    
          ]
        },
    
        {
          name: "High-Baroque Computation",
          species: [
    
            "Fractal-Authority Couture",
            "Golden-Ratio Tailoring",
    
            "Recursive-Lace",
            "Calculus-Chic",
    
            "Tessellated-Aristocracy",
            "Procedural-Gilding"
    
          ]
        },
    
        {
          name: "Stability, Symmetry & The Void",
          species: [
    
            "Panopticon-Chic",
            "Symmetry-Maximalism",
    
            "Void-Space Minimalism",
            "Omniscience-Veil",
    
            "Sensor-Integrated Formalwear",
            "Analog-Luxe",
    
            "The Transparent-Authority Look",
            "Metadata-Mastery Tailoring",
    
            "LIDAR-Absorbent Formal",
            "Static-State Fashion",
    
            "Equilibrium-Core",
    
            "The Un-Simulated Aesthetic"
    
          ]
        },
    
        {
          name: "Gravitic & Levitation-Luxe",
          species: [
    
            "Floating-Geometry Accessories",
            "Magnetic-Levitation Collars",
    
            "Tensegrity-Capes",
            "Zero-G-Gala Wear",
    
            "Hover-Drape",
            "Atmospheric-Anchor Jewelry"
    
          ]
        }
    
      ]
    },

    {
      number: 22,
      name: "XENOMORPHIC & NON-HUMAN SYSTEMS",
      emoji: "🧬",
      order: 22,
    
      subfamilies: [
    
        {
          name: "Infrastructure-as-Body",
          species: [
    
            "Server-Rack Shrouds",
            "Data-Center Cooling-Skins",
    
            "Fiber-Optic Weaving",
            "Liquid-Cooling Drip",
    
            "Hardware-Protection Mesh",
            "Motherboard-Patterned Shields",
    
            "Physics-Defying Light-Skins"
    
          ]
        },
    
        {
          name: "Interspecies & Augmented Life",
          species: [
    
            "Augmented-Fauna Harness [Augmented-Flemish-Giant Harness, Bionic-Fauna Armor]",
    
            "Cognitive-Partner Vests",
            "Sentient-Flora Support-Frames",
    
            "Neural-Link Animal-Vests",
            "Root-System Connectivity-Wear"
    
          ]
        },
    
        {
          name: "Swarm & Collective Identity",
          species: [
    
            "Swarm-Cohesion Veils",
            "Drone-Cluster Silhouette",
    
            "Synchronized-Light-Hives",
            "Distributed-Identity Mesh",
    
            "Autonomous-Agent Camouflage"
    
          ]
        }
    
      ]
    },

    {
      number: 23,
      name: "POST-SCARCITY & THE LEISURE CLASS",
      emoji: "🥂",
      order: 23,
    
      subfamilies: [
    
        {
          name: "Hedonic & Affective Luxury",
          species: [
    
            "Dopamine-Drip Couture [Dopamine-Drip (Literal)]",
            "Hedonic-Glow Wear",
    
            "Emotion-Broadcast Silk",
            "Sensory-Satiation Robes",
    
            "Euphoria-Glow Minimal"
    
          ]
        },
    
        {
          name: "Conceptual Existence",
          species: [
    
            "Post-Scarcity Tourist",
    
            "Conceptual-Existence Drapery",
            "Eternal-Vacation Minimalism",
    
            "Object-Lesson Fashion",
            "Symbolic-Capital Drapery"
    
          ]
        },
    
        {
          name: "The 'Naked' Machine (Post-Textile)",
          species: [
    
            "Dermal-Display Skin",
            "Structural-Modification Chic",
    
            "Programmable-Pore Aesthetic",
    
            "The Naked-Machine"
    
          ]
        }
    
      ]
    },

    {
      name: "CLASS 0: THE INCUBATOR (STAGING)",
      isExperimental: true,
    
      concept:
        "Experimental, unstable, or emerging aesthetics that have not yet crystallized into stable family structures.",
    
      orderingLogic:
        "Signal → Interface → Identity → Behavior → Survival → Material",
    
      species: [
    
        // SIGNAL SYSTEMS
        // raw symbolic and encoded expression
    
        ["Prompt-Glitched Typography"],
        ["QR-Occultism"],
        ["Asemic-Textile"],
        ["LLM-Lace"],
    
        // INTERFACE STATES
        // human-machine interaction latency & rendering
    
        ["Post-Interface Aesthetic"],
        ["Latency-Lag Chic [Latency Aesthetic]"],
        ["Buffer-State Minimal"],
        ["Desync-Draping"],
    
        // DATA & IDENTITY STATES
        // ownership, visibility, ghosting
    
        ["Data-Ghosting"],
        ["Ghost-Work Stealthwear [Ghost-Brand Stealth]"],
        ["Post-Ownership Wardrobe"],
        ["DRM-Locked Apparel"],
        ["Public-Asset Basics"],
    
        // AI / PLATFORM CULTURE
        // labor + prompt-based existence
    
        ["Prompt-Engineer Chic"],
        ["REM-Workwear"],
        ["REM-State Loungewear"],
        ["Mesh-Network Nomad"],
    
        // SURVIVAL & MICRO-LOCAL SYSTEMS
        // hyper-adaptive edge conditions
    
        ["Hyper-Niche Survivalist"],
        ["Bioregional-Signal-Scavenger"],
    
        ["Cortisol-Core [Cortisol-Armor]"],
    
        // MATERIAL & SELF-ASSEMBLING SYSTEMS
        // experimental matter states
    
        ["Self-Assembling Couture"],
        ["Terroir-Tech"]
    
      ]
    }

  ]

};

export const tagDimensions = {
  timeline: [
    "primitive", "industrial", "analog", "digital",
    "networked", "biotech", "posthuman", "cosmic"
  ],

  ideology: [
    "utopian", "neutral", "dystopian", "critical"
  ],

  environment: [
    "urban", "corporate", "domestic", "wilderness",
    "underground", "virtual", "space"
  ],

  techRelation: [
    "low-tech", "mechanical", "electronic",
    "digital", "biological", "hybrid", "post-tech"
  ],

  function: [
    "aesthetic", "functional", "survival",
    "ceremonial", "experimental"
  ],

  mood: [
    "optimistic", "nostalgic", "anxious",
    "aggressive", "minimal", "maximal", "eerie"
  ]
};
export const aestheticMeta = {
  "Cyberpunk": {
    timeline: "networked",
    ideology: "dystopian",
    environment: ["urban", "corporate"],
    techRelation: "digital",
    function: ["aesthetic", "narrative"],
    mood: ["anxious", "neon"]
  },

  "Solarpunk": {
    timeline: "biotech",
    ideology: "utopian",
    environment: ["urban", "wilderness"],
    techRelation: "hybrid",
    function: ["functional", "aesthetic"],
    mood: ["optimistic"]
  },

  "Techwear": {
    timeline: "digital",
    ideology: "neutral",
    environment: ["urban"],
    techRelation: "hybrid",
    function: ["functional", "survival"],
    mood: ["minimal"]
  },

  "Biopunk": {
    timeline: "biotech",
    ideology: "critical",
    environment: ["laboratory"],
    techRelation: "biological",
    function: ["experimental"],
    mood: ["eerie"]
  },

  "Y3K Aesthetic": {
    timeline: "posthuman",
    ideology: "speculative",
    environment: ["virtual", "space"],
    techRelation: "post-tech",
    function: ["experimental"],
    mood: ["abstract"]
},
"Maintenance Worker Futurism": {
  timeline: "networked",
  ideology: "neutral",
  environment: ["urban", "infrastructure"],
  techRelation: "hybrid",
  function: ["functional"],
  mood: ["worn", "practical"]
}
    };
export const metaTags = {
"Cyberpunk": {
    core: ["cyberpunk", "high-tech", "low-life"],
    visuals: [
      "neon", "chrome", "rain", "holograms",
      "dark city", "LED", "glitch"
    ],
    materials: [
      "leather", "PVC", "metal", "synthetics"
    ],
    silhouettes: [
      "layered", "armored", "streetwear"
    ],
    colors: [
      "black", "neon blue", "neon pink", "purple"
    ],
    keywords: [
      "hacker", "megacorp", "AI", "surveillance"
    ]
  },

  "Techwear": {
    core: ["functional", "utility", "performance"],
    visuals: [
      "straps", "pockets", "zippers", "modular"
    ],
    materials: [
      "gore-tex", "nylon", "technical fabrics"
    ],
    silhouettes: [
      "layered", "tactical", "ergonomic"
    ],
    colors: [
      "black", "gray", "olive"
    ],
    keywords: [
      "urban", "mobility", "weatherproof"
    ]
  },

  "Solarpunk": {
    core: ["eco-future", "sustainability"],
    visuals: [
      "plants", "solar panels", "organic shapes"
    ],
    materials: [
      "linen", "hemp", "bioplastics"
    ],
    silhouettes: [
      "flowing", "adaptive", "lightweight"
    ],
    colors: [
      "green", "earth tones", "gold"
    ],
    keywords: [
      "renewable", "community", "nature-tech"]
  } // This closes Solarpunk
}; // <─ IMPORTANT: This closes the entire metaTags object

// ... (Your Phylum 11 and Phylum 12 definitions are above this)
const calculateTotal = (list) => list.reduce((acc, p) => acc + (p.count || 0), 0);
// 1. The Worker Functions (Keep these)

// 1. THE WORKER FUNCTIONS
const countFuturist = (phylum) => {
  const groups = phylum?.families || phylum?.classes || [];
  return groups.reduce((total, group) => {
    const subfamilyCount = group.subfamilies?.reduce((subTotal, sub) => {
      return subTotal + (sub.species?.length || 0);
    }, 0) || 0;
    const directSpeciesCount = group.species?.length || 0;
    return total + subfamilyCount + directSpeciesCount;
  }, 0);
};
const convertSpecies = (phylum) => {
  const groups = phylum?.families || phylum?.classes || [];
  groups.forEach(group => {
    group.subfamilies?.forEach(sub => {
      if (sub.species) {
        sub.species = sub.species.map(s => Array.isArray(s) ? s : [s, "N"]);
      }
    });
    if (group.species) {
      group.species = group.species.map(s => Array.isArray(s) ? s : [s, "N"]);
    }
  });
};
// 2. BUILD THE LIST
// Ensure phylum1 through phylum11 are imported or defined above this line
const PHYLA_LIST = [
  phylum1, phylum2, phylum3, phylum4, phylum5, 
  phylum6, phylum7, phylum8, phylum9, phylum10, 
  phylum11, futuristTechnologicalPhylum
];

// 3. RUN THE PROCESSING
PHYLA_LIST.forEach(p => {
  if (!p) return; 
  convertSpecies(p);
  p.count = countFuturist(p);
});

export const getHybridSpecies = (speciesA, speciesB) => {
  // Example Logic for your "Scrap-Gospel" merge
  if (speciesA === "Post-Apocalyptic" && speciesB === "AI Spirituality") {
    return {
      name: "The Scrap-Gospel",
      description: "A belief system where rusted CPUs are worshipped as holy relics in the wasteland."
    };
  }
  // This allows the user to 'mix' aesthetics on your site
  return {
    name: `${speciesA} x ${speciesB} Hybrid`,
    description: `A synthesis of ${speciesA} logic within a ${speciesB} framework.`
  };
};

// 4. THE EXPORT
export const ATLAS_DATA = {
  total: PHYLA_LIST.reduce((acc, p) => acc + (p.count || 0), 0),
  phyla: PHYLA_LIST
};