export interface SerieDTO {
  id: number;
  name: string;
  genres: string[];
  schedule: {
    time: string;
    days: string[];
  };
  image?: {
    medium: string;
  };
  summary: string;
}
