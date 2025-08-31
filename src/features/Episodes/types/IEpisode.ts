export interface IEpisodesResponse {
  stories: IEpisodeDto[];
}

export interface IEpisodeDto {
  content: {
    _uid: string;
    ep: string;
    title: string;
    description: string;
    classification: string;
    duration: string;
    uri: string;
  };
}

export interface IEpisodeView {
  id: string;
  ep: string;
  title: string;
  description: string;
  classification: string;
  duration: string;
  uri: string;
}
