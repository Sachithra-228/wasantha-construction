import {
  BadgeCheck,
  Building2,
  Clock,
  DraftingCompass,
  Factory,
  Fence,
  Hammer,
  HardHat,
  Home,
  Layers3,
  Medal,
  PackageCheck,
  ShieldCheck,
  Store,
  Sparkles,
  Star,
  Warehouse,
  Wrench,
} from "lucide-react";

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const images = {
  hero:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=85",
  fabrication:
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80",
  steel:
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80",
  welding:
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=80",
  warehouse:
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
  team:
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
};

export const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 24, suffix: "/7", label: "Customer Support" },
];

export const services = [
  {
    title: "Steel Gates",
    icon: Fence,
    image: images.steel,
    category: "Residential",
    description:
      "Custom fabricated sliding, swing, and decorative steel gates designed for strength, security, and curb appeal.",
    benefits: ["Heavy-duty frames", "Weather-resistant finishing", "Custom patterns"],
  },
  {
    title: "Window Grills",
    icon: ShieldCheck,
    image: images.fabrication,
    category: "Residential",
    description:
      "Elegant window grill systems that improve security while preserving ventilation and daylight.",
    benefits: ["Secure fixing", "Modern profiles", "Powder coated options"],
  },
  {
    title: "Balcony Railings",
    icon: Layers3,
    image: images.welding,
    category: "Residential",
    description:
      "Premium balcony railing solutions for homes, apartments, hotels, and commercial buildings.",
    benefits: ["Code-aware heights", "Clean welding", "Low-maintenance finishes"],
  },
  {
    title: "Stair Railings",
    icon: DraftingCompass,
    image: images.steel,
    category: "Residential",
    description:
      "Safe and refined stair handrails made to fit straight, curved, indoor, and outdoor staircases.",
    benefits: ["Accurate site measurement", "Smooth handrail finish", "Strong anchors"],
  },
  {
    title: "Rolling Shutters",
    icon: Store,
    image: images.warehouse,
    category: "Commercial",
    description:
      "Durable rolling shutters for shops, garages, warehouses, and industrial access points.",
    benefits: ["Manual or motorized", "Secure locking", "Reliable daily operation"],
  },
  {
    title: "Roof Structures",
    icon: Home,
    image: images.hero,
    category: "Commercial",
    description:
      "Steel roof frames for houses, workshops, canopies, retail buildings, and utility spaces.",
    benefits: ["Optimized spans", "Corrosion protection", "Precise installation"],
  },
  {
    title: "Steel Canopies",
    icon: Building2,
    image: images.fabrication,
    category: "Commercial",
    description:
      "Attractive and durable canopy structures for entrances, car parks, walkways, and loading areas.",
    benefits: ["Drainage planning", "Neat cladding", "Site-specific supports"],
  },
  {
    title: "Warehouse Structures",
    icon: Warehouse,
    image: images.warehouse,
    category: "Industrial",
    description:
      "Practical structural steel work for storage facilities, workshops, and industrial expansions.",
    benefits: ["Large-span frames", "Fabrication drawings", "Efficient erection"],
  },
  {
    title: "Industrial Fabrication",
    icon: Factory,
    image: images.welding,
    category: "Industrial",
    description:
      "Custom steel platforms, supports, ladders, frames, guards, and equipment structures.",
    benefits: ["Built to specification", "Workshop fabrication", "Heavy-duty materials"],
  },
  {
    title: "Custom Steel Designs",
    icon: Sparkles,
    image: images.steel,
    category: "Custom",
    description:
      "Bespoke steel solutions for architects, builders, homeowners, and business owners.",
    benefits: ["Design support", "Flexible finishes", "Made-to-measure fabrication"],
  },
];

export const features = [
  { title: "Experienced Team", icon: HardHat, text: "Skilled fabricators and installers with practical site experience." },
  { title: "Premium Materials", icon: Medal, text: "Quality steel, hardware, paints, and protective finishes." },
  { title: "Affordable Pricing", icon: BadgeCheck, text: "Clear quotations that balance durability, finish, and budget." },
  { title: "On-Time Delivery", icon: Clock, text: "Organized measurements, fabrication schedules, and installation planning." },
  { title: "Modern Equipment", icon: Wrench, text: "Reliable workshop tools for accurate cutting, welding, and finishing." },
  { title: "Customer Satisfaction", icon: Star, text: "Responsive communication before, during, and after every project." },
];

export const projects = [
  { title: "Modern Steel Gate Installation", location: "Colombo", category: "Residential", year: "2025", image: images.steel },
  { title: "Warehouse Roof Structure", location: "Kurunegala", category: "Industrial", year: "2024", image: images.warehouse },
  { title: "Balcony Railing Upgrade", location: "Kandy", category: "Residential", year: "2025", image: images.fabrication },
  { title: "Retail Rolling Shutter System", location: "Gampaha", category: "Commercial", year: "2024", image: images.hero },
  { title: "Factory Platform Fabrication", location: "Biyagama", category: "Industrial", year: "2023", image: images.welding },
  { title: "Steel Canopy Entrance", location: "Negombo", category: "Commercial", year: "2025", image: images.fabrication },
];

export const process = [
  "Consultation",
  "Site Visit",
  "Design",
  "Fabrication",
  "Installation",
  "Quality Inspection",
];

export const testimonials = [
  {
    name: "Nuwan Perera",
    location: "Colombo",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    review:
      "The gate and balcony railing work was clean, strong, and completed on schedule. Communication was excellent from the first visit.",
  },
  {
    name: "Sanduni Jayasinghe",
    location: "Kandy",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    review:
      "They helped us choose a practical design and delivered a premium finish. The installation team worked very professionally.",
  },
  {
    name: "Chaminda Silva",
    location: "Gampaha",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    review:
      "Our warehouse shutter and steel supports are solid. The quote was clear and the final result matched the promised quality.",
  },
];

export const faqs = [
  {
    question: "How long does fabrication take?",
    answer:
      "Most residential items take 7 to 21 days after measurements and design approval. Larger commercial and industrial projects are scheduled after reviewing scope, materials, and site readiness.",
  },
  {
    question: "Do you provide free quotations?",
    answer:
      "Yes. We provide free initial quotations based on project details, photos, drawings, or a site visit when required.",
  },
  {
    question: "Do you work outside Colombo?",
    answer:
      "Yes. Wasantha Construction handles steel fabrication and installation projects across Sri Lanka, subject to project size and scheduling.",
  },
  {
    question: "What materials do you use?",
    answer:
      "We use quality mild steel, galvanized options where suitable, stainless steel for selected applications, durable hardware, primers, and protective paint or powder coated finishes.",
  },
];

export const gallery = [
  ...projects,
  { title: "Custom Grill Pattern", location: "Matara", category: "Residential", year: "2024", image: images.fabrication },
  { title: "Industrial Guard Rails", location: "Biyagama", category: "Industrial", year: "2025", image: images.welding },
  { title: "Entrance Canopy", location: "Colombo", category: "Commercial", year: "2023", image: images.hero },
];

export const companyValues = [
  "Safety-first fabrication and installation",
  "Honest quotations and practical advice",
  "Durable finishes suited to Sri Lankan weather",
  "Respectful service for homes and business sites",
];

export const timeline = [
  { year: "2014", title: "Workshop Founded", text: "Started with residential grill work, gates, and repair services." },
  { year: "2017", title: "Expanded Fabrication", text: "Added roof structures, canopies, and commercial shutters." },
  { year: "2021", title: "Industrial Projects", text: "Built capacity for warehouse, platform, and factory fabrication work." },
  { year: "2026", title: "Islandwide Service", text: "Serving homeowners, builders, and companies across Sri Lanka." },
];

export const contact = {
  phone: "+94 76 966 9074",
  email: "info@wasanthaconstruction.lk",
  address: "No. 25, Main Road, Colombo, Sri Lanka",
  hours: "Monday - Saturday: 8:00 AM - 6:00 PM",
  whatsapp: "https://wa.me/94769669074",
};

export const trustBadges = [
  { label: "Quality Checked", icon: PackageCheck },
  { label: "Site Measured", icon: DraftingCompass },
  { label: "Expert Fabrication", icon: Hammer },
];

