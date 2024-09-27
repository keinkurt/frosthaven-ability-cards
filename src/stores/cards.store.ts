import { type Card } from '@/domain/cards.type';
import { type FrosthavenClass } from '@/domain/frosthaven-class.type';
import { GeminateForm } from '@/domain/geminate/cards';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AbilityCardsState {
  selectedClass: FrosthavenClass<Card> | undefined;
  selectClass: (playerClass: FrosthavenClass<Card>) => void;
  cards: Card[];
  selectCards: (cards: Card[]) => void;
  states: Card[][];
  currentStateIndex: number;
  setStateIndex: (index: number) => void;
  updateStates: <X extends Card>(states: X[][]) => void;
  currentForm: GeminateForm;
  setForm: (form: GeminateForm) => void;
}

export const useFrosthavenStore = create<AbilityCardsState>()(
  persist(
    (set, get) => ({
      selectedClass: undefined,
      selectClass: (playerClass: FrosthavenClass<Card>) => {
        if (playerClass.name !== get().selectedClass?.name) {
          set({ selectedClass: playerClass, cards: [] });
        }
      },
      cards: [],
      selectCards: (cards: Card[]) => set({ cards, states: [cards] }),
      states: [[]],
      updateStates: <X extends Card>(states: X[][]) => set({ states, currentStateIndex: states.length - 1 }),
      currentStateIndex: 0,
      setStateIndex: (index: number) => set({ currentStateIndex: index }),
      currentForm: GeminateForm.melee,
      setForm: (currentForm: GeminateForm) => set({ currentForm }),
    }),
    {
      name: 'frosthaven-ability-cards-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
