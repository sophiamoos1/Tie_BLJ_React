import type {Club} from './Club';

export type Player = {
    id: number;
    name: string;
    goals: number;
    club: Club;
};

export interface PlayerInterface {
    id: number,
    name: string,
    goals: number;
    club: Club;
}

