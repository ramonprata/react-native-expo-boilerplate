import type { SetCallback } from "@shared/store";
import { IEpisodeView } from "../types/IEpisode";

export interface IEpisodesInitialState {
  selectedEpisode: IEpisodeView | null;
}

export const initialState: IEpisodesInitialState = {
  selectedEpisode: null,
};

const actions = (set: SetCallback<IEpisodesInitialState>) => ({
  selectEpisode: (episode: IEpisodeView | null) =>
    set((state: IEpisodesInitialState) => {
      state.selectedEpisode = episode;
    }),
});

const slice = (set: SetCallback<IEpisodesInitialState>) => ({
  ...initialState,
  ...actions(set),
});

export type TEpisodesActions = ReturnType<typeof actions>;

const episodesSliceStore = {
  slice,
  initialState,
};

export default episodesSliceStore;
