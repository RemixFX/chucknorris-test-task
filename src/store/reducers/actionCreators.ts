import { getJokes } from "../../api";
import { AppDispatch } from "../store";
import { Joke, cardSlice } from "./cardSlice";

// Получение массива цитат
export const findJokes = (query: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(cardSlice.actions.cardsFetching())
    const response = await getJokes(query)
    const jokes: Joke[] = response.result
    console.log(response)
    dispatch(cardSlice.actions.cardsFetchingSuccess(jokes))
  } catch {
    dispatch(cardSlice.actions.cardsFetchingError())
  }
}
