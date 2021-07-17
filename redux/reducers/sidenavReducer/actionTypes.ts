export enum ESidenavActionType {
    showSidenav = "SHOW_SIDENAV",
    hideSidenav = "HIDE_SIDENAV",
}

export interface ISidenavAction {
    type: ESidenavActionType;
    payload: any;
}