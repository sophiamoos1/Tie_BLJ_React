export enum CountryEnum {
    SPAIN = "Spain",
    ENGLAND = "England",
    ITALY = "Italy",
};

// Alternative Way - Const Object:
export const AlternativeCountryEnum = {
    SPAIN: "Spain",
    ITALY: "Italy",
    ENGLAND: "England",
} as const; 

// Make a type out of the Enum, only need if you have to assign the right key to the value
export type AlternativeCountry = (typeof AlternativeCountryEnum)[keyof typeof AlternativeCountryEnum];