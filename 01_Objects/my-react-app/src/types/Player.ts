import type { Club } from "./Club";

export type Player = {
    id: number; 
    name: string; 
    club: Club; 
    goals: number; 
};