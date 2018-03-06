import { User } from '../../models/user.model';

export const SET = 'SET';
export interface Set { type: typeof SET; payload: User; }
export function set(user: User): Set {
    return {
        type: SET,
        payload: user
    };
}

export const CLEAR = 'CLEAR';
export interface Clear { type: typeof CLEAR; }
export function clear(): Clear {
    return {
        type: CLEAR
    };
}

export type All = Set | Clear;