import type { Club } from "./Club";

export interface PlayerInterface {
    id: number;
    name: string;
    club: Club;
    goals: number;
}

const club1: Club = {
    id: 1,
    name: "Barcelona",
    country: CountryEnum.SPAIN
  }

  const player1: PlayerInterface = {
    id: 1,
    name: "Pablo Martín Páez Gavira",
    club: club1,
    goals: 28
  }