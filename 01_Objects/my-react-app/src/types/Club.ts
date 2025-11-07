import type { AlternativeCountryEnum, CountryEnum } from "./CountryEnum";

export type Club = {
    id: number;
    name: string;
    country: CountryEnum; 
}