import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import type {
  IProductsInitialState,
  TProductsActions,
} from "@features/Products/store/productsSliceStore";
import productsSliceStore from "@features/Products/store/productsSliceStore";

import type {
  IEpisodesInitialState,
  TEpisodesActions,
} from "@features/Episodes/store/episodesSliceStore";
import episodesSliceStore from "@features/Episodes/store/episodesSliceStore";

export type TGlobalInitialState = IProductsInitialState & IEpisodesInitialState;
// combine with other initial states as needed. Example: & HomeInitialState

export type TGlobalActions = TProductsActions & TEpisodesActions;
// combine with other initial actions as needed: Example: & HomeActions

export type Store = ReturnType<(typeof slices)["productsSliceStore"]> &
  ReturnType<(typeof slices)["episodesSliceStore"]>;
// combine slices types. Example: & ReturnType<(typeof slices)["homeSliceStore"]>

export type StateCallback = (state: TGlobalInitialState) => TGlobalInitialState;
export type SetCallback<T> = (set: (state: T) => void) => void;

export const slices = {
  productsSliceStore: productsSliceStore.slice,
  episodesSliceStore: episodesSliceStore.slice,
  // add other slices here.
  // Example: homeSliceStore: homeSliceStore.slice,
};

export const useStore = create(
  immer<Store>((set) => ({
    ...productsSliceStore.slice(set as SetCallback<IProductsInitialState>),
    ...episodesSliceStore.slice(set as SetCallback<IEpisodesInitialState>),
    // add other slices here.
    // ...homeSliceStore.slice(set as SetCallback<IHomeInitialState>),
  }))
);
