import { configureStore } from '@reduxjs/toolkit'
import matchesSlice from '../features/matches/matchesSlice'

export const store = configureStore({
  reducer: {
    matches: matchesSlice,
  },
})