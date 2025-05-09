import { baseApi } from "@/components/Redux/api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postCart: build.mutation({
      query: (body) => ({
        url: `cart`,
        method: 'POST',
        body: body,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
      invalidatesTags: ['Cart'],
    }),
    getCartList: build.query({
      query: () => ({
        url: `/cart`,
        method: 'GET',
      }),
      providesTags: ['Cart'],
    }),
    deleteCart: build.mutation({
      query: (id) => ({
        url: `cart/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),
    UpdateQuantity: build.mutation({
      query: ( body ) => ({
        url: `cart/quantity`,
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: ['Cart'],
    }),
    deleteCartAll: build.mutation({
      query: () => ({
        url: `cart/reset`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),
  }),
});

export const { usePostCartMutation, useGetCartListQuery, useDeleteCartMutation, useUpdateQuantityMutation, useDeleteCartAllMutation} = cartApi;
