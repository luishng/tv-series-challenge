export interface EpisodeDTO {
  id: string;
  name: string;
  season: number;
  number: number;
  summary: string;
  rating: {
    average: number;
  };
  image?: {
    medium: string;
  };
}
