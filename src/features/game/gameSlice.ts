import { createSlice } from "@reduxjs/toolkit";

export interface Game {
  score: number
  player: string;
  selectedWords: string[];
  correctAnswers: string[];
  wrongAnswers: string[];
  gameStatus: 'idle' | 'playing' | 'answers' | 'score'
  scenario: number | undefined
}

const initialState: Game = {
  score: 0,
  player: "",
  selectedWords: [],
  correctAnswers: [],
  wrongAnswers: [],
  gameStatus: "idle",
  scenario: undefined
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    score: (state, action) => {
      state.score = action.payload;
    },
    addPlayer: (state, action) => {
      state.player = action.payload;
    },
    addWord: (state, action) => {
      state.selectedWords.push(action.payload);
    },
    removeWord: (state, action) =>{
      state.selectedWords = state.selectedWords.filter(el => el !== action.payload)
    },
    selectRandomScenario: (state, action) => {
      state.scenario = action.payload
    },
    correctAnswers: (state, action) => {
      state.correctAnswers = action.payload;
    },
    wrongAnswers: (state, action) => {
      state.wrongAnswers = action.payload;
    },
    updateGameStatus: (state, action) => {
      state.gameStatus = action.payload
    }
  },
});

export const { score, addPlayer, addWord, removeWord, selectRandomScenario, correctAnswers, wrongAnswers, updateGameStatus } = gameSlice.actions;

export default gameSlice.reducer;
