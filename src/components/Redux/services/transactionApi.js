import { baseApi } from "@/components/Redux/api/baseApi";

const transactionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllTransaction : build.query({
      query: () => ({
        url: `/transaction/admin/all`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      providesTags: ["Transaction"],
    }),
    getMyTransaction: build.query({
      query: () => ({
        url: `/transaction/my`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      providesTags: ["Transaction"],
    }),
    deleteTransaction: build.mutation({
      query: (id) => ({
        url: `Transaction/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Transaction"],
    }),
    updateTransaction: build.mutation({
      query: ({ id, body }) => ({
        url: `Transaction/update/${id}`,
        method: "PATCH",
        body: body,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["Transaction"],
    }),
  }),
  overrideExisting: true,
});

export const {
 useGetAllTransactionQuery,
 useGetMyTransactionQuery
} = transactionApi;
