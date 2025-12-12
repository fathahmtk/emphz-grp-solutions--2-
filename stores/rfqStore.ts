import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { RFQItem } from '../types';

interface RFQState {
  items: RFQItem[];
  addItem: (item: RFQItem) => void;
  removeItem: (id: string) => void;
  clear: () => void;
}

export const useRFQStore = create<RFQState>()(
  persist(
    (set) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
              ),
            };
          }
          return { items: [...state.items, item] };
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),

      clear: () => set({ items: [] }),
    }),
    {
      name: 'emphz-rfq-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);