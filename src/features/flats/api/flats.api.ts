import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFlatsFilterValues } from "../model/flatsFilter.model";
import { Flats, FlatsItems } from "../model/types/flats.model";
import { FlatsFilters, FlatsFiltersData, FlatsFilterValues, FlatsTypes, PropertyType } from "../model/types/flatsFilter.model";

export const flatsApi = createApi({
    reducerPath: "flats",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_CLIENT_URL }),
    endpoints: (builder) => ({
        getFlats: builder.query<FlatsItems[], IFlatsFilterValues>({
            query: (props) => {
                return {
                    url: "/properties",
                    params: {
                        property_type_id: props?.property_type_id ?? "",
                        complex_ids: Array.isArray(props.complex)
                            ? props.complex
                                  .map((item) => {
                                      if (item.id) {
                                          return item.id;
                                      } else {
                                          return item;
                                      }
                                  })
                                  .join(",")
                            : props.complex,
                        complex_class_ids: props.class ?? "",
                        min_price: props?.price?.[0] ?? "",
                        max_price: props?.price?.[1] ?? "",
                        min_size: props?.size?.[0] ?? "",
                        max_size: props?.size?.[1] ?? "",
                        city_id: props?.city ?? "",
                        min_floor: "",
                        max_floor: "",
                        rooms: props.rooms ?? "",
                        property_facings: props.facing ?? "",
                        check_in_dates: props.check_in_date ?? "",
                    },
                };
            },
            transformResponse: (response: Flats) => response.data.data,
        }),
        getFlatsTypes: builder.query<PropertyType[], void>({
            query: () => ({
                url: "/properties-types",
            }),
            transformResponse: (response: FlatsTypes) => response.data,
        }),
        getFlatsFilter: builder.query<FlatsFiltersData, FlatsFilterValues>({
            query: (props) => ({
                url: "/properties-filters",
                params: {
                    property_type_id: props.property_type_id,
                },
            }),
            transformResponse: (response: FlatsFilters) => response.data,
        }),
    }),
});

export const { useGetFlatsQuery, useGetFlatsFilterQuery, useGetFlatsTypesQuery } = flatsApi;
