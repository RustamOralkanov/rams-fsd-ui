import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Banners, HomeBanners } from "../model/home.model";

export const homeBannersApi = createApi({
    reducerPath: "homeBanners",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_CLIENT_URL }),
    endpoints: (builder) => ({
        getHomeBanners: builder.query<Banners[], void>({
            query: () => ({
                url: `/pages/banners`,
            }),
            transformResponse: (response: HomeBanners) => response.data.items,
        }),
    }),
});

export const { useGetHomeBannersQuery } = homeBannersApi;
