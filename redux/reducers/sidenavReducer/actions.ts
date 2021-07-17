import { ESidenavSection } from ".";
import { ESidenavActionType } from "./actionTypes";

export const showSidenav = (section: ESidenavSection) => ({
    type: ESidenavActionType.showSidenav,
    payload: section,
});

export const hideSidenav = () => ({
    type: ESidenavActionType.hideSidenav,
});
