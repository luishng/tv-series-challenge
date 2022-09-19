import { SerieDTO } from "@dtos/SerieDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Serie: {
        id: number;
      };
      Serie: undefined;
      Episode: {
        serieId: number;
        episodeSeason: number;
        episodeNumber: number;
      };
    }
  }
}
