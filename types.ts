
export interface Achievement {
  year: string;
  title: string;
  category: string;
  description: string;
  highlight?: string;
}

export interface RaceEvent {
  date: string;
  name: string;
  track: string;
  category: string;
}

export interface Sponsor {
  name: string;
  logo: string;
}
