import { create } from 'zustand';

export interface CountState {
    count: number;
    increment: () => void;
    decrement: () => void;
}
export const useCountStore = create<CountState>((set, get) => ({
    count: 0,
    increment: () => {
        set({ count: get().count + 1 });
    },
    decrement: () => {
        set({ count: get().count - 1 });
    },
}));
