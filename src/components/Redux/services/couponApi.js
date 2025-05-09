import { baseApi } from "@/components/Redux/api/baseApi";

const couponApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postCoupon: build.mutation({
      query: (body) => ({
        url: `coupon`,
        method: 'POST',
        body: body,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
      }),
      invalidatesTags: ['Coupon'],
    }),
    getCoupon: build.query({
      query: () => ({
        url: `/coupon`,
        method: 'GET',
      }),
      providesTags: ['Coupon'],
    }),
    getSingleCoupon: build.query({
      query: (id) => ({
        url: `/coupon/get/${id}`,
        method: 'GET',
      }),
      providesTags: ['Coupon'],
    }),
    deleteCoupon: build.mutation({
      query: (id) => ({
        url: `coupon/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Coupon'],
    }),
    updateCoupon: build.mutation({
      query: ({id, body }) => ({
        url: `coupon/update/${id}`,
        method: 'PATCH',
        body: body,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
      }),
      invalidatesTags: ['Coupon'],
    }),
  }),
  overrideExisting: true,
});

export const {usePostCouponMutation, useGetCouponQuery,useGetSingleCouponQuery, useDeleteCouponMutation, useUpdateCouponMutation} = couponApi;
