import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Data, Payments } from "../model/payments.model";
import { PaymentsForm } from "../model/paymentsForm.model";

export const paymentsApi = createApi({
    reducerPath: "payments",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_CLIENT_URL }),
    endpoints: (builder) => ({
        getPayments: builder.query<Data, { alias: string }>({
            query: (props) => ({
                url: `/pages${props.alias}`,
            }),
            transformResponse: (response: Payments) => response.data,
        }),
        getPaymentsForm: builder.query<PaymentsForm, { alias: string }>({
            query: (props) => ({
                url: `/pages/${props.alias}`,
            }),
        }),
    }),
});

export const { useGetPaymentsQuery, useGetPaymentsFormQuery } = paymentsApi;
