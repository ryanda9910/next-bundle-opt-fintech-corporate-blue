'use client'
import { create } from 'zustand'
type State = { range: '7d'|'30d', setRange: (r: '7d'|'30d') => void }
export const useDashboardStore = create<State>((set)=> ({
  range: '7d',
  setRange: (r) => set({ range: r }),
}))
