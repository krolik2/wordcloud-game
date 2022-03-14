import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWords } from "./wordsAPI";

export const getWords = createAsyncThunk("words/getWords", async () => {
  const response = await fetchWords();
  return response.data;
});

export interface Data {
  question: string;
  all_words: string[];
  good_words: string[];
}

export interface words {
  list: Data[];
  status: "loading" | "success"
}

const initialState: words = {
  list: [],
  status: "loading",
};

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWords.pending, (state) => {
      state.status = "loading";
    }).addCase(getWords.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    });
  },
});

export default wordsSlice.reducer;
