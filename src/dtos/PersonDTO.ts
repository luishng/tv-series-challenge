export interface PersonDTO {
  id: number;
  name: string;
  gender: string;
  birthday?: string;
  country?: {
    name: string;
  };
  image?: {
    medium: string;
  };
}
