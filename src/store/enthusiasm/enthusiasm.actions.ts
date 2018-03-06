export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
export interface IncrementEnthusiasm { type: typeof INCREMENT_ENTHUSIASM; }
export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: INCREMENT_ENTHUSIASM
    };
}

export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';
export interface DecrementEnthusiasm { type: typeof DECREMENT_ENTHUSIASM; }
export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: DECREMENT_ENTHUSIASM
    };
}

export type All = IncrementEnthusiasm | DecrementEnthusiasm;