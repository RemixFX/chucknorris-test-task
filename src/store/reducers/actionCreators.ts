import { getJokes } from "../../api";
import { AppDispatch } from "../store";
import { Joke, cardSlice } from "./cardSlice";

// Получение массива цитат
export const findJokes = (query: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(cardSlice.actions.cardsFetching())
    const response: Joke[] = await getJokes(query)
    dispatch(cardSlice.actions.cardsFetchingSuccess(response))
  } catch {
    dispatch(cardSlice.actions.cardsFetchingError())
  }
}
