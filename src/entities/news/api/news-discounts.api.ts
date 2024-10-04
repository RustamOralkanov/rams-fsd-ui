import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NewsDiscounts, NewsDiscountsData, NewsDicountsParams, AllNewsDiscounts, NewsDicountsItem, SingleNewsDicounts } from "../model/types";

export const newsDiscountsApi = createApi({
    reducerPath: "news-discounts",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_CLIENT_URL }),
    endpoints: (builder) => ({
        getNewsDiscounts: builder.query<NewsDiscountsData, void>({
            query: () => ({
                url: "/pages/news-discounts",
            }),
            transformResponse: (response: NewsDiscounts) => response.data,
        }),
        getAllNewsDiscounts: builder.query<NewsDicountsItem[], NewsDicountsParams>({
            query: (props) => ({
                url: "/pages/news-discounts/items",
                params: {
                    type: props.type ?? "",
                },
            }),
            transformResponse: (response: AllNewsDiscounts) => response.data,
        }),
        getSingleNewsDiscounts: builder.query<NewsDicountsItem, NewsDicountsParams>({
            query: (props) => ({
                url: `/pages/news-discounts/items/${props.id}`,
            }),
            transformResponse: (response: SingleNewsDicounts) => response.data,
        }),
    }),
});

export const { useGetNewsDiscountsQuery, useGetAllNewsDiscountsQuery, useGetSingleNewsDiscountsQuery } = newsDiscountsApi;
