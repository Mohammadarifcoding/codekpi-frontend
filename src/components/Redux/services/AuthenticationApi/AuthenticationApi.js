import { baseApi } from "@/components/Redux/api/baseApi";
import { getLocalStorage } from "@/components/shared/LocalStorage/LocalStorage";

const AuthenticationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        url: "/user/get-profile",
        method: "GET",
      }),
    }),
    postRegister: build.mutation({
      query: (body) => ({
        url: "/auth/signup",
        method: "POST",
        body,
      }),
    }),

    PostLogin: build.mutation({
      query: (body) => ({
        url: "/auth/signin",
        method: "POST",
        body,
      }),
    }),
    changeUser: build.mutation({
      query: (userData) => ({
        url: "/user",
        method: "PATCH",
        body: userData,
        headers: { Authorization: `Bearer ${getLocalStorage("tokens")}` },
      }),
    }),
    PostForgetPassword: build.mutation({
      query: ({ email }) => ({
        url: `/auth/forgotpassword/${email}`,
        method: "POST",
      }),
    }),
    updateUser: build.mutation({
      query: (userData) => ({
        url: "/user",
        method: "PATCH",
        body: userData,
        headers: { Authorization: `Bearer ${getLocalStorage("tokens")}` },
      }),
    }),
    ChangePassword: build.mutation({
      query: (userData) => ({
        url: "/auth/changepassword",
        method: "PATCH",
        body: userData,
        headers: { Authorization: `Bearer ${getLocalStorage("tokens")}` },
      }),
    }),
    VerifyCode: build.mutation({
      query: (body) => ({
        url: "/auth/verifyCode",
        method: "POST",
        body,
      }),
    }),

    getVerify: build.query({
      query: () => ({
        url: "auth/verify",
        method: "GET",
        headers: { token: getLocalStorage("token") },
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useChangeUserMutation,
  usePostRegisterMutation,
  usePostLoginMutation,
  usePostForgetPasswordMutation,
  useChangePasswordMutation,
  useVerifyCodeMutation,
  useGetVerifyQuery,
  useUpdateUserMutation
} = AuthenticationApi;
