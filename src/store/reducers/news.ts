import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { newsApi } from "../../services/news";

interface IPost {
  userId: string;
  id: string;
  title: string;
  body: string;
}

interface INewsState {
  news: IPost[];
}

const initialState: INewsState = {
  news: [],
};

const { getNews } = newsApi.endpoints;

const { reducer } = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(getNews.matchFulfilled, (state, { payload: data }) => {
      console.warn("data", data);
      state.news = data;
    });
  },
});

const selectNews = (state: RootState) => state.news.news;

export { selectNews };

export default reducer;
