import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../constant';






export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Order'],

  endpoints: (builder) => ({

    getAllOrders: builder.query({
      query: (data) => ({
        url: '/',
        method: 'GET'
      }),
      providesTags: ['Order']
    }),

    orderById: builder.query({
      query: (data) => ({
        url: '/',
        method: 'GET'
      }),
      providesTags: ['Order']
    }),

    addOrder: builder.mutation({
      query: (query) => ({
        url: '/api/orderAdd',
        body: query.body,
        method: 'POST',
        headers: {
          Authorization: query.token,
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }),
      invalidatesTags: ['Order']
    }),






  }),
})


export const { useAddOrderMutation } = orderApi