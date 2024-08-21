import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IHomeBanners, IHomeBanner } from "./home.model";

export const homeBannersApi = createApi({
    reducerPath: "homeBanners",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_CLIENT_URL }),
    endpoints: (builder) => ({
        getHomeBanners: builder.query<IHomeBanner[], string>({
            query: () => ({
                url: `/home-page-banners`,
            }),
            transformResponse: (response: IHomeBanners) => response.banners,
        }),
    }),
});

export const { useGetHomeBannersQuery } = homeBannersApi;
