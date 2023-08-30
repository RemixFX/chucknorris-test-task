import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Joke {
  created_at: string;
  id: string;
  url: string;
  value: string;
}

interface JokesState {
  jokes: Joke[];
  loading: boolean;
  error: boolean;
}

const initialState: JokesState = {
  jokes: [],
  loading: false,
  error: false
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    cardsFetching: state => {
      state.jokes = []
      state.loading = true
      state.error = false
    },
    cardsFetchingSuccess: (state, action: PayloadAction<Joke[]>) => {
      state.jokes = action.payload
      state.loading = false
      state.error = false
    },
    cardsFetchingError: state => {
      state.loading = false
      state.error = true
    },
  }
})