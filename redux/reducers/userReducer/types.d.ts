import { EUserTitle } from ".";

export interface IUserPhone {
    number: number;
    countryCode: number;
    userId?: string;
    verified: boolean;
}

export interface IUserAddress {
    landmark: string;
    street: string;
    city: string;
    state: string;
    country: string;
}

export interface IUserState {
    id: string;
    title: EUserTitle;
    firstName: string;
    lastName: string;
    email: string;
    phones: IUserPhone[];
    addresses: IUserAddress[];
    authenticated: boolean;
}