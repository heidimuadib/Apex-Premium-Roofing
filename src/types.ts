export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  features: string[];
  pricingRange: string;
  deliveryTime: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  projectType: string;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceArea {
  city: string;
  slug: string;
  region: "Australia" | "United Kingdom";
  offices: string[];
  phone: string;
  suburbs: string[];
  lat: number;
  lng: number;
}
