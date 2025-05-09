import { baseApi } from "@/components/Redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: (gender) => ({
        url: `/auth/users/${gender}`,
        method: "GET",
      }),
      providesTags: ['users'],
    }),
    completeCall: build.mutation({
      query: (id) => ({
        url: `/auth/call/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["users"],
    }),
    completeMessage: build.mutation({
      query: (id) => ({
        url: `/auth/message/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["users"],
    }),
//     getSingleProduct: build.query({
//       query: (id) => ({
//         url: `product/single/${id}`,
//         method: 'GET',
//       }),
//       providesTags: ['ProductList'],
//     }),
//     getUsersByShop: build.query({
//       query: (id) => ({
//         url: `product/shop/${id}`,
//         method: 'GET',
//       }),
//       providesTags: ['ProductList'],
//     }),
//     getShopInfo: build.query({
//       query: (id) => ({
//         url: `product/shopInfo/${id}`,
//         method: 'GET',
//       }),
//       providesTags: ['ProductList'],
//     }),
  }),
});

export const { useGetUsersQuery, useCompleteCallMutation, useCompleteMessageMutation } = userApi;
