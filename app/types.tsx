export interface EventCard {
  id: string;
  title: string;
  price: number;
  description: string;
  type: 'Event' | 'Contest' | 'Form';
  image: string;
}