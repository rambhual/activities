/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStore";

export interface Store {
  activityStore: ActivityStore;
  commonStore: CommonStore;
}

export const store: Store = {
  activityStore: new ActivityStore(),
  commonStore: new CommonStore(),
};
export const StoreContext = createContext(store);
export function useStore() {
  return useContext(StoreContext);
}
