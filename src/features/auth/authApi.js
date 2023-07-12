import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
//  baseurl http://192.168.1.70:5000/
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.71:5000/' }),
  endpoints: (builder) => ({

    //mutation because it is post request

    userLogin: builder.mutation({
      query: (data) => ({
        url: '/api/userLogin',
        body: data,
        method: 'POST'
      })
    }),
    userSignUp: builder.mutation({
      query: (data) => ({
        url: '/api/userSignup',
        body: data,
        method: 'POST'
      })
    }),

  })

})

export const { useUserLoginMutation, useUserSignUpMutation } = authApi