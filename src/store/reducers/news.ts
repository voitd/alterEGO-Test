import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { newsApi } from "../../services/news";

interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
}

interface NewsState {
  news: Post[];
}

const initialState: NewsState = {
  news: [],
};

const { getNews, getPostsByUserId } = newsApi.endpoints;

const { reducer } = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        getNews.matchFulfilled,
        (state: NewsState, { payload: data }: PayloadAction<Post[]>) => {
          state.news = data;
        },
      )
      .addMatcher(
        getPostsByUserId.matchFulfilled,
        (state: NewsState, { payload: data }: PayloadAction<Post[]>) => {
          state.news = [...state.news, ...data];
        },
      );
  },
});

const selectNews = (state: RootState) => state.news.news;

export { selectNews };

export default reducer;
