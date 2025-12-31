export enum WineType {
  SPARKLING = 'Sparkling',
  STILL_WHITE = 'Still White',
  STILL_ROSE = 'Still Rosé',
  STILL_RED = 'Still Red'
}

export interface Product {
  id: string;
  name: string;
  type: WineType;
  price: number;
  vintage: string;
  grapeComposition: string;
  tastingNotes: string;
  awards?: string[];
  pairing?: string;
  description: string;
  image: string; // Placeholder URL
  isNew?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}