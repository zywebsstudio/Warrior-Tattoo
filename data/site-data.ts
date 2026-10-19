export interface TattooStyle {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  featured?: boolean;
}

export interface ArtistProfile {
  name: string;
  role: string;
  bio: string;
  image: string;
  instagram: string;
  experience: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  review: string;
  style: string;
  rating: number;
}

export const SITE_CONFIG = {
  brandName: "WARRIOR TATTOO STUDIO",
  tagline: "Your Vision. Our Art.",
  subheadline: "Distinctive tattoo artistry. Personal expression. Crafted with precision.",
  logoUrl: "/warrior-logo.png",
  phone: "+91 82812 52625",
  whatsappNumber: "918281252625",
  whatsappUrl: "https://wa.me/918281252625?text=Hi%20Warrior%20Tattoo%20Studio%2C%20I%20would%20like%20to%20inquire%20about%20a%20tattoo%20session.",
  instagramUrl: "https://instagram.com",
  youtubeUrl: "https://youtube.com",
  mapsUrl: "https://maps.google.com",
  locationName: "Kozhikode, Kerala, India",
  copyrightYear: 2026,
};

export const NAV_LINKS = [
  { label: "TATTOOS", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "GALLERY", href: "#gallery" },
  { label: "ARTISTS", href: "#artists" },
  { label: "CONTACT", href: "#booking" },
];

export const TATTOO_STYLES: TattooStyle[] = [
  {
    id: "black-grey",
    title: "Black & Grey",
    description: "Classic contrast, smooth shading, and timeless monochromatic elegance.",
    image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "fine-line",
    title: "Fine Line",
    description: "Delicate, single-needle precision designed with micro-detail and grace.",
    image: "https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "realism",
    title: "Realism",
    description: "Lifelike portraits, wildlife, and hyper-detailed photo-realistic compositions.",
    image: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "traditional",
    title: "Traditional",
    description: "Bold outlines, heavy saturated pigments, and iconic heritage motifs.",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "geometric",
    title: "Geometric & Sacred",
    description: "Intricate mandala patterns, architectural symmetry, and sacred geometry.",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "custom",
    title: "Custom Concepts",
    description: "One-of-a-kind tailored artwork translating personal stories onto the skin.",
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=800&auto=format&fit=crop",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Warrior Sleeve Shading",
    category: "Black & Grey",
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "gal-2",
    title: "Intricate Botanical Forearm",
    category: "Fine Line",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "gal-3",
    title: "Monochrome Realism Portrait",
    category: "Realism",
    image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "gal-4",
    title: "Minimalist Celestial Ink",
    category: "Fine Line",
    image: "https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "gal-5",
    title: "Full Back Mythological Art",
    category: "Custom",
    image: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  
  {
    id: "gal-7",
    title: "Mandala Precision Chestpiece",
    category: "Geometric",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "gal-8",
    title: "Abstract Line Art Canvas",
    category: "Custom",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop",
  },
];

export const ARTISTS_DATA: ArtistProfile[] = [
  {
    name: "Lead Artist & Founder",
    role: "Master Tattooist & Creative Director",
    bio: "Dedicated to the mastery of tattoo craftsmanship, blending bold contrasts, fine needlework, and customized anatomical flow. Every piece is crafted in a sterile, welcoming, and artistic studio environment.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    instagram: "https://instagram.com",
    experience: "Custom Artistry Specialist",
  },
  {
    name: "Senior Fine-Line Artist",
    role: "Micro-Realism & Fine Line Artist",
    bio: "Specializing in micro-details, delicate botanical motifs, and architectural fine lines crafted with single-needle precision and flawless healing clarity.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    instagram: "https://instagram.com",
    experience: "Micro-Precision Specialist",
  },
  {
    name: "Blackwork & Sacred Geometry Artist",
    role: "Geometric & Dotwork Tattooist",
    bio: "Focused on high-contrast blackwork, intricate mandala geometry, and symmetrical anatomical compositions designed to flow naturally with bodily movement.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    instagram: "https://instagram.com",
    experience: "Sacred Geometry Specialist",
  },
];

export const ARTIST_DATA: ArtistProfile = ARTISTS_DATA[0];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Rahul M.",
    review: "The level of detail and sterile hygiene at Warrior Tattoo Studio is unmatched. My custom sleeve turned out even better than the original sketch.",
    style: "Custom Realism Sleeve",
    rating: 5,
  },
  {
    id: "test-2",
    clientName: "Ananya S.",
    review: "Got my first fine-line piece here. The artist was patient, explained the aftercare thoroughly, and the line work is unbelievably clean.",
    style: "Fine Line Botanical",
    rating: 5,
  },
  {
    id: "test-3",
    clientName: "David K.",
    review: "Genuine master of black and grey shading. He took my concept and turned it into an absolute masterpiece. Highly recommended!",
    style: "Black & Grey Warrior Chestpiece",
    rating: 5,
  },
];
