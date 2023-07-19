import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseUrl } from "../constant";
//  baseurl http://192.168.1.70:5000/
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({

    getAllProducts: builder.query({
      query: (data) => ({
        url: '/',
        method: 'GET'
      }),
      providesTags: ['Product']
    }),


    //mutation because it is post request

    addProduct: builder.mutation({
      query: (query) => ({
        url: '/api/add/product',
        body: query.body,
        method: 'POST',
        headers: {
          Authorization: query.token
        }
      }),
      invalidatesTags: ['Product']
    }),
    updateProduct: builder.mutation({
      query: (query) => ({
        url: `/api/update/product/${query}`,
        body: query.body,
        method: 'PATCH'
      })
    }),

    deleteProduct: builder.mutation({
      query: (query) => ({
        url: `/api/remove/product/${query}`,
        method: 'DELETE'
      })
    }),

  })

})

export const { useGetAllProductsQuery, useAddProductMutation } = productApi