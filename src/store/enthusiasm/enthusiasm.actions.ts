export const INCREMENT_ENTHUSIASM: string = 'INCREMENT_ENTHUSIASM';
export interface IncrementEnthusiasm { type: typeof INCREMENT_ENTHUSIASM; }
export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: INCREMENT_ENTHUSIASM
    };
}

export const DECREMENT_ENTHUSIASM: string = 'DECREMENT_ENTHUSIASM';
export interface DecrementEnthusiasm { type: typeof DECREMENT_ENTHUSIASM; }
export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: DECREMENT_ENTHUSIASM
    };
}

export type All = IncrementEnthusiasm | DecrementEnthusiasm;