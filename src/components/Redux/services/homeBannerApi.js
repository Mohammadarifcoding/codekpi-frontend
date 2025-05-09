import { baseApi } from "@/components/Redux/api/baseApi";

const HomeBannerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getToBanner: build.query({
      query: () => ({
        url: `/banner/big/all`,
        method: 'GET',
      }),
      providesTags:['Banner']
    }),
    getToBannerAdmin: build.query({
      query: () => ({
        url: `/banner/big/admin`,
        method: 'GET',
      }),
      providesTags:['Banner']
    }),
    getTosideBanner: build.query({
      query: () => ({
        url: `/banner/small/all`,
        method: 'GET',
      }),
      providesTags:['Banner']
    }),
    getTosideBannerAdmin: build.query({
      query: () => ({
        url: `/banner/small/admin`,
        method: 'GET',
      }),
      providesTags:['Banner']
    }),
    addToBanner: build.mutation({
      query: (body) => ({
        url: '/banner/big',
        method: 'POST',
        body: body,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
      invalidatesTags: ['Banner'],
    }),
    addTosideBanner: build.mutation({
      query: (body) => ({
        url: '/banner/small',
        method: 'POST',
        body: body,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
      invalidatesTags: ['Banner'],
    }),
    removeToBanner: build.mutation({
      query: (itemId) => ({
        url: `/banner/big/delete/${itemId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
      invalidatesTags: ['Banner'],
    }),
    removeTosideBanner: build.mutation({
      query: (itemId) => ({
        url: `/banner/small/delete/${itemId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
      invalidatesTags: ['Banner'],
    }),
    updateToBanner: build.mutation({
      query: ({ id, body }) => ({
        url: `/banner/big/update/${id}`,
        method: 'PATCH',
        body: body,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
      invalidatesTags: ['Banner'],
    }),
    updateTosideBanner: build.mutation({
      query: ({ id, body }) => ({
        url: `/banner/small/update/${id}`,
        method: 'PATCH',
        body: body,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
      invalidatesTags: ['Banner'],
    }),
  }),
});

export const {
  useGetToBannerQuery,
  useGetToBannerAdminQuery,
  useGetTosideBannerAdminQuery,
  useGetTosideBannerQuery,
  useAddToBannerMutation,
  useRemoveToBannerMutation,
  useAddTosideBannerMutation,
  useRemoveTosideBannerMutation,
  useUpdateToBannerMutation,
  useUpdateTosideBannerMutation,
} = HomeBannerApi;
