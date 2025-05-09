import { baseApi } from "@/components/Redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({ category, page, size, price_start, price_end }) => ({
        url: `/product/category/${category}`,
        method: "GET",
        params: {
          page,
          size,
          price_start,
          price_end,
        },
      }),
      providesTags: ['ProductList'],
    }),
    getSingleProduct: build.query({
      query: (id) => ({
        url: `product/single/${id}`,
        method: 'GET',
      }),
      providesTags: ['ProductList'],
    }),
    getProductsByShop: build.query({
      query: (id) => ({
        url: `product/shop/${id}`,
        method: 'GET',
      }),
      providesTags: ['ProductList'],
    }),
    getShopInfo: build.query({
      query: (id) => ({
        url: `product/shopInfo/${id}`,
        method: 'GET',
      }),
      providesTags: ['ProductList'],
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery, useGetProductsByShopQuery, useGetShopInfoQuery } = productApi;
