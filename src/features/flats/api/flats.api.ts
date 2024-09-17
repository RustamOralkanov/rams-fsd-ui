import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Flats, FlatsItems } from "../model/types/flats.model";
import { FlatsFilters, FlatsFiltersData } from "../model/types/flatsFilter.model";

export const flatsApi = createApi({
    reducerPath: "flats",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_CLIENT_URL }),
    endpoints: (builder) => ({
        getFlats: builder.query<FlatsItems[], void>({
            query: () => ({
                url: "/properties",
            }),
            transformResponse: (response: Flats) => response.data.data,
        }),
        getFlatsFilter: builder.query<FlatsFiltersData, void>({
            query: () => ({
                url: "/properties-filters",
            }),
            transformResponse: (response: FlatsFilters) => response.data,
        }),
    }),
});

export const { useGetFlatsQuery, useGetFlatsFilterQuery } = flatsApi;
