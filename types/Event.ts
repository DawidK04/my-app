export interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  category: string;
  speaker: string;
  isHighlighted?: boolean;
}