import { createSelector } from "reselect";

import { IState } from "../types";

const selectSidenavState = (state: IState) => state.sidenav;

export const selectSidenavSection = createSelector([selectSidenavState], (sidenav) => sidenav.section);
export const selectSidenavHidden = createSelector([selectSidenavState], (sidenav) => sidenav.hidden);
