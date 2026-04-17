export interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  time: string;
  category: string;
  isHighlighted?: boolean;
}
