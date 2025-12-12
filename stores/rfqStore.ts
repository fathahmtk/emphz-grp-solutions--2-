import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { RFQItem } from '../types';

interface RFQState {
  items: RFQItem[];
  addItem: (item: RFQItem) => void;
  removeItem: (cartId: string) => void;
  clear: () => void;
}

export const useRFQStore = create<RFQState>()(
  persist(
    (set) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          // Generate a unique cartId if not provided, based on ID and config
          const configStr = item.configuration ? JSON.stringify(item.configuration) : '';
          const cartId = item.cartId || `${item.id}-${configStr}`;
          const itemWithCartId = { ...item, cartId };

          const existing = state.items.find((i) => i.cartId === cartId);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.cartId === cartId ? { ...i, quantity: i.quantity + item.quantity } : i
              ),
            };
          }
          return { items: [...state.items, itemWithCartId] };
        }),

      removeItem: (cartId) =>
        set((state) => ({
          items: state.items.filter((i) => i.cartId !== cartId),
        })),

      clear: () => set({ items: [] }),
    }),
    {
      name: 'emphz-rfq-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);