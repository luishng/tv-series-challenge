export interface SearchPeopleDTO {
  person: {
    id: number;
    name: string;
    image?: {
      medium: string;
    };
  };
}
