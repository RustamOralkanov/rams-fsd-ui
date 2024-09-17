import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Complex, Complexes, ComplexParams } from "../model/types/complex";
import { ComplexesFilter, ComplexesFilters } from "../model/types/filter";

export const complexesApi = createApi({
    reducerPath: "complexes",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_CLIENT_URL }),
    endpoints: (builder) => ({
        getComplexes: builder.query<Complex[], ComplexParams>({
            query: (props) => {
                const rooms = Array.isArray(props.rooms) ? props.rooms.map((room) => room.value).join(",") : props.rooms;

                return {
                    url: `/complexes`,
                    params: {
                        rooms: rooms,
                        status: props.status,
                        min_price: props.price?.[0] ?? "",
                        max_price: props.price?.[1] ?? "",
                        min_size: props.size?.[0] ?? "",
                        max_size: props.size?.[1] ?? "",
                        start_sale: props.start_sale ?? "",
                        is_discount: props.is_discount ?? "",
                        is_class_2: props.is_class_2 ?? "",
                        is_class_3: props.is_class_3 ?? "",
                        is_class_4: props.is_class_4 ?? "",
                    },
                };
            },
            transformResponse: (response: Complexes) => response.data,
        }),
        getComplexesFilter: builder.query<ComplexesFilter, ComplexParams>({
            query: (props) => {
                const rooms = Array.isArray(props.rooms) ? props.rooms.map((room) => room.value).join(",") : props.rooms;
                return {
                    url: `/complexes-filters`,
                    params: {
                        rooms: rooms,
                        status: props.status,
                        min_price: props.price?.[0] ?? "",
                        max_price: props.price?.[1] ?? "",
                        min_size: props.size?.[0] ?? "",
                        max_size: props.size?.[1] ?? "",
                        start_sale: props.start_sale ?? "",
                        is_discount: props.is_discount ?? "",
                        is_class_2: props.is_class_2 ?? "",
                        is_class_3: props.is_class_3 ?? "",
                        is_class_4: props.is_class_4 ?? "",
                    },
                };
            },
            transformResponse: (response: ComplexesFilters) => response.data,
        }),
    }),
});

export const { useGetComplexesQuery, useGetComplexesFilterQuery } = complexesApi;
