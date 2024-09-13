import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Complex, Complexes, ComplexParams } from "../model/types/complex";
import { ComplexesFilter, ComplexesFilters } from "../model/types/filter";

export const complexesApi = createApi({
    reducerPath: "complexes",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_CLIENT_URL }),
    endpoints: (builder) => ({
        getComplexes: builder.query<Complex[], ComplexParams>({
            query: (props = {}) => ({
                url: `/complexes`,
                params: {
                    status: props.status === "" ? "on_sale" : props.status,
                    rooms: props.rooms,
                    min_price: props.price ? props.price[0] : "",
                    max_price: props.price ? props.price[1] : "",
                    min_size: props.size ? props.size[1] : "",
                    max_size: props.size ? props.size[1] : "",
                    start_sale: props.start_sale,
                    is_discount: props.is_discount,
                },
            }),
            transformResponse: (response: Complexes) => response.data,
        }),
        getComplexesFilter: builder.query<ComplexesFilter, void>({
            query: () => ({
                url: `/complexes-filters`,
            }),
            transformResponse: (response: ComplexesFilters) => response.data,
        }),
    }),
});

export const { useGetComplexesQuery, useGetComplexesFilterQuery } = complexesApi;
