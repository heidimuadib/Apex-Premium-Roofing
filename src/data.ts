import { Service, Review, FAQItem, ServiceArea } from "./types";

export const SERVICES: Service[] = [
  {
    id: "repairs",
    title: "Roof Repairs & Restoration",
    shortDesc: "High-precision structural repairs for commercial premises and premium residential estates. Specializing in slate, tile, and bespoke metal roofs.",
    longDesc: "A leaking or damaged roof can quickly compromise premium assets. Our master craftsmen utilize thermographic imaging and structural moisture diagnostic equipment to isolate leaks, repair structural timber foundations, replace broken slate or terracotta tiling, and secure metal joints.",
    iconName: "Wrench",
    features: [
      "24/7 Priority Emergency Leak Isolation",
      "Traditional Terracotta & Slate Hand-Fitting",
      "Advanced Non-Destructive Thermal Leak Detection",
      "Structural Timber Foundation Reinforcement",
      "Zinc & Copper Flashings Replacement"
    ],
    pricingRange: "$2,500 - $15,000+",
    deliveryTime: "1 - 3 Days Prompt Completion",
    image: "https://images.unsplash.com/photo-1632829172927-348532038581?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "replacement",
    title: "Full Roof Replacement Services",
    shortDesc: "Bespoke high-end architectural roof replacements utilizing premium Australian Colorbond® steel, fine natural Welsh slate, or premium European clay tiles.",
    longDesc: "An premium architectural roof replacement doesn't just protect—it elevates. We supply and install custom-engineered metal sheeting and hand-selected natural materials designed to withstand extreme thermal fluctuations and look exquisite for generations.",
    iconName: "Layers",
    features: [
      "True Slate, Clay, or Structural Metal Material Pairings",
      "Integrated Architectural Insulation & Ventilation Barriers",
      "Full Engineering Inspections & Building Standard Sign-off",
      "Commercial-Grade Colorbond® & Real Copper Material Choice",
      "10-Year Comprehensive Workmanship & 30-Year Material Warranties"
    ],
    pricingRange: "$15,000 - $85,000+",
    deliveryTime: "5 - 14 Days Architectural Build",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "commercial",
    title: "Commercial & Industrial Roofing",
    shortDesc: "Specialist structural and high-volume roof setups for warehouses, commercial factories, retail hubs, and high-rise office towers.",
    longDesc: "Corporate and commercial assets require long-term durability and minimum business downtime. We deliver commercial-grade roofing system management including box gutter fabrication, multi-layered insulation panels, siphonic drainage, and solar roof structural preparation.",
    iconName: "Building2",
    features: [
      "Zero-Business-Downtime Safe Access Scheduling",
      "Heavy-Duty Siphonic & Box Gutter Redesigns",
      "Full WH&S Safety Guardrail & Harness Setups In-House",
      "Engineered Structural Load Calculation Checks",
      "Comprehensive Asset Valuation & Structural Reporting"
    ],
    pricingRange: "$35,000 - $250,000+",
    deliveryTime: "Flexible Phased Industrial Execution",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "metal",
    title: "Premium Metal Roofing",
    shortDesc: "Architectural metal cladding, specialized standing seam, and premium Colorbond® roofing systems custom-crafted for modern luxury designs.",
    longDesc: "Metal roofing provides unmatched durability, fire resistance, and architectural cleanliness. We specialize in sophisticated European standing seam, natural copper installations, and heavy-gauge steel for cutting-edge modern aesthetics.",
    iconName: "Grid",
    features: [
      "Architectural Standing Seam & Custom Rollforming",
      "High-Clarity Colorbond® Ultra Premium Marine Grade Steel",
      "Thermal expansion-friendly concealed fastener hardware",
      "Advanced acoustic and radiant heat barriers",
      "Corrosion-resistant custom flashing trims"
    ],
    pricingRange: "$12,000 - $65,000+",
    deliveryTime: "4 - 8 Days Specialist Installation",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "storm",
    title: "Storm & Hail Damage Restoration",
    shortDesc: "Rapid-response emergency protection, forensic storm assessments, structural solid tarpaulin shielding, and complete insurance claim handling.",
    longDesc: "Severe storms, high winds, and hail strikes can breach roofs, risking total asset ruin. We deploy immediately to contain the damage and furnish exhaustive aerial drone evidence reports certified for insurance claims adjustments.",
    iconName: "ShieldAlert",
    features: [
      "1-Hour Emergency Structural Tarpaulin & Leak Blockage",
      "Certified Forensic Damage Reports for Insurance Adjusters",
      "Detailed High-Resolution Drone Aerial Photography & Mapping",
      "Seamless Direct-To-Insurer Billing Documents Assistance",
      "Structural and Plywood Decking Reinforcement"
    ],
    pricingRange: "$5,000 - $40,000+ (Typically Insurance Assisted)",
    deliveryTime: "24/7 Rapid Mitigation / 2-5 Days Build",
    image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "inspections",
    title: "Comprehensive Roof Inspection",
    shortDesc: "Forensic roofing asset assessments utilizing aerial drones, digital moisture sensors, thermal leakage mapping, and comprehensive engineers reports.",
    longDesc: "Whether protecting a new acquisition or verifying storm impacts, our inspections omit nothing. We supply structured diagnostic folders with visual evidence, anticipated service lives, thermal leak spots, and physical core test results.",
    iconName: "Search",
    features: [
      "High-Definition Drone Mapping of Multi-Tier Systems",
      "Infrared Thermal Moisture Survey of Sub-roof Spaces",
      "Tile Integrity Tests & Structural Joint Inspections",
      "Detailed Itemized Valuation & Repair Lifespan Index",
      "Consultant Engineer's Seal of Assessment Approval"
    ],
    pricingRange: "$450 - $2,500 (Credited against any subsequent repair)",
    deliveryTime: "Same-Day Report Turnaround",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev1",
    author: "Harrison Sterling",
    location: "Vaucluse, Sydney (AU)",
    rating: 5,
    text: "Apex solved an architectural slate roof leak that three other contractors had tried and failed to diagnose. Their diagnostic thermal camera and drone isolated the split lead valley perfectly. They carried out the repair with natural Welsh slate matching beautifully. Phenomenal professionalism and immaculate cleaning.",
    projectType: "Welsh Slate Roof Restoration",
    date: "May 2026",
    verified: true
  },
  {
    id: "rev2",
    author: "Sir Reginald Thornton",
    location: "Hampstead Heath, London (UK)",
    rating: 5,
    text: "For high-ticket commercial industrial replacements, Apex is outstanding. They coordinated the replacement of our 18,000 sq ft warehouse envelope in Canary Wharf with zero business interruption. The standing seam system looks magnificent & our energy performance index has improved by 35%. Highly recommended.",
    projectType: "Standing Seam Commercial Project",
    date: "April 2026",
    verified: true
  },
  {
    id: "rev3",
    author: "Victoria Montgomery",
    location: "Toorak, Melbourne (AU)",
    rating: 5,
    text: "Absolutely top tier service. We replaced our entire heritage villa roof with premium Colorbond Matte. The process was completely seamless. Outstanding attention to detail, transparent drone progress reports, and a tidy workspace. Cost was high, but well-justified by the perfectionism of the finishing joints.",
    projectType: "Premium Villa Colorbond Replacement",
    date: "March 2026",
    verified: true
  },
  {
    id: "rev4",
    author: "Marcus Vance",
    location: "Ascot, Brisbane (AU)",
    rating: 5,
    text: "After a severe hail event damaged our multi-level estate, Apex was on-site in 90 minutes. They sealed three structural holes and handled the entire structural claim from A to Z directly with our insurers. They rebuilt the roof with beautiful glazed terracotta tiles. Their responsiveness literally saved our interior.",
    projectType: "Emergency Hail Damage & Rebuild",
    date: "February 2026",
    verified: true
  },
  {
    id: "rev5",
    author: "Alastair Graham",
    location: "Richmond, London (UK)",
    rating: 5,
    text: "We commissioned Apex to deliver a full copper-clad roof for our riverside architectural residence. The precision of the custom fold work and the team's engineering background were evident at every turn. They designed custom concealed ventilation registers. An absolute masterpiece of engineering and architecture.",
    projectType: "Bespoke River Residence Copper Cladding",
    date: "June 2026",
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How long does a typical high-end roof replacement take?",
    answer: "Most premium residential roof replacements require 5 to 14 days, depending on scope, height layout, and chosen material systems (such as high-precision Welsh slate, architectural copper, or complex standing seam). Commercial assets can vary, but we execute in carefully coordinated phases to protect operational continuity."
  },
  {
    question: "Do you offer direct billing with insurance providers for storm damage?",
    answer: "Yes. Our team provides forensic, drone-supported damage files completely satisfying national criteria for Australia and the United Kingdom. We work hand-in-hand with leading loss adjusters and can establish direct-insurer billing setups to reduce your cash flow constraints."
  },
  {
    question: "What is the life expectancy of Welsh slate vs. premium Colorbond® steel?",
    answer: "Natural hand-split Welsh slate is a multi-generational mineral material that routinely lasts between 75 and 150 years. Colorbond® steel and architectural zinc systems are engineered for high-durability marine-grade resistance and deliver robust, elegant lifespans ranging from 40 to 65 years with minimum upkeep."
  },
  {
    question: "How do your diagnostic leak detection procedures operate?",
    answer: "We deploy forensic moisture diagnostics, including thermographic (infrared) thermal imaging and structural moisture impedance meters. This lets us isolate hidden leaks traveling down internal framing structures—even when silent to the naked eye—minimizing experimental cutting into plasterboards."
  },
  {
    question: "What workmanship guarantees does Apex Premium Roofing supply?",
    answer: "We proudly back all premium full residential and commercial roofing builds with our in-house, fully transferable 10-Year Master Craftsman Workmanship Warranty. This runs completely separate to, and in partnership with, manufacturer warranties which range from 20 to 50 years on metal, slate, and tile structures."
  },
  {
    question: "How quickly can your emergency response team reach our property?",
    answer: "For severe compromises, safety hazards, or major continuous leaks, our 24/7 Red Alert Storm Response crew responds within 90 minutes across all physical metropolitan service rings in Sydney, Melbourne, Brisbane, Perth, and Greater London."
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    city: "Sydney",
    slug: "sydney",
    region: "Australia",
    offices: ["Level 32, 200 George Street, Sydney NSW 2000", "Mosman & North Shore Hub, Spit Rd, Mosman NSW 2088"],
    phone: "+61 2 8000 0000",
    suburbs: ["Vaucluse", "Point Piper", "Mosman", "Double Bay", "Hunters Hill", "Turramurra", "Manly", "Woollahra", "Bellevue Hill"],
    lat: -33.8688,
    lng: 151.2093
  },
  {
    city: "Melbourne",
    slug: "melbourne",
    region: "Australia",
    offices: ["Level 50, 120 Collins Street, Melbourne VIC 3000", "Toorak Architectural Annex, Toorak Rd, Toorak VIC 3142"],
    phone: "+61 3 9000 0000",
    suburbs: ["Toorak", "Brighton", "South Yarra", "Kew", "Hawthorn", "Middle Park", "Canterbury", "Albert Park", "Malvern"],
    lat: -37.8136,
    lng: 144.9631
  },
  {
    city: "Brisbane",
    slug: "brisbane",
    region: "Australia",
    offices: ["Level 22, 111 Eagle Street, Brisbane QLD 4000"],
    phone: "+61 7 3000 0000",
    suburbs: ["Ascot", "Hamilton", "New Farm", "Paddington", "Kangaroo Point", "Clayfield", "Bulimba", "Teneriffe", "Hawthorne"],
    lat: -27.4698,
    lng: 153.0251
  },
  {
    city: "Perth",
    slug: "perth",
    region: "Australia",
    offices: ["Level 14, 191 St Georges Terrace, Perth WA 6000"],
    phone: "+61 8 6000 0000",
    suburbs: ["Dalkeith", "Peppermint Grove", "Cottesloe", "Nedlands", "City Beach", "Mosman Park", "Subiaco", "Claremont", "Applecross"],
    lat: -31.9505,
    lng: 115.8605
  },
  {
    city: "London",
    slug: "london",
    region: "United Kingdom",
    offices: ["One Canada Square, Canary Wharf, London E14 5AB", "Hampstead Village & Highgate Studio, High St, London NW3 1QD"],
    phone: "+44 20 7000 0000",
    suburbs: ["Hampstead", "Kensington", "Chelsea", "Belgravia", "Richmond", "Mayfair", "Knightsbridge", "Highgate", "St John's Wood"],
    lat: 51.5074,
    lng: -0.1278
  }
];
