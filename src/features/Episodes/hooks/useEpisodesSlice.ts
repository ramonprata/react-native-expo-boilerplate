import { useStore } from "@shared/store";

import {
  IEpisodesInitialState,
  TEpisodesActions,
} from "../store/episodesSliceStore";

export const useEpisodesAction = <K extends keyof TEpisodesActions>(
  actionName: K
) => {
  const action = useStore((state) => state[actionName]);
  return action;
};

export const useEpisodesState = <K extends keyof IEpisodesInitialState>(
  stateName: K
) => {
  const state = useStore((state) => state[stateName]);
  return state;
};
