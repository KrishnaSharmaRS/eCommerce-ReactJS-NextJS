import { HYDRATE } from "next-redux-wrapper";
import { EUserActionType, IUserAction } from "./actionTypes";
import { IUserState } from "./types";

export enum EUserTitle {
    mr = "Mr.",
    mrs = "Mrs.",
    ms = "Ms.",
    other = "Other",
}

const INITIAL_STATE: IUserState = {
    id: "",
    title: EUserTitle.mr,
    firstName: "",
    lastName: "",
    email: "",
    authenticated: false,
    phones: [],
    addresses: [],
};

const userReducer = (state = INITIAL_STATE, action: IUserAction): IUserState => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload };
        case EUserActionType.setUserData:
            return {
                ...state,
                ...action.payload,
            };
        case EUserActionType.resetUserData:
            return {
                ...INITIAL_STATE,
            };
        default:
            return state;
    }
};

export default userReducer;
