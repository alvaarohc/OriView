import { EclipseData } from '@/types/schemas.valibot';
import { create } from 'zustand';

type EclipseStore = {
  selectedEclipse: EclipseData | null;
  setSelectedEclipse: (eclipse: EclipseData) => void;
};

export const useEclipseStore = create<EclipseStore>((set) => ({
  selectedEclipse: null,
  setSelectedEclipse: (eclipse) => set({ selectedEclipse: eclipse }),
}));
