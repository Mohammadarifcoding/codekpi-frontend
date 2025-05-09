import { getCookie } from '@/components/shared/LocalStorage/LocalStorage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials } from '../features/AllSlice/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://code-kpi-backend.vercel.app/api/v1',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const state = api.getState();
  const token = state.auth.token;
  if (!token) {
    return baseQuery(args, api, extraOptions);
  }
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 500) {
   const refreshToken = getCookie("refreshToken");
    if (refreshToken) {
      try {
        const refreshTokenResult = await baseQuery({
          url: "/auth/refresh-token",
          method: "GET",
          headers: { "token": refreshToken },
        }, api, extraOptions);

        if (refreshTokenResult?.data) {
          const newToken = refreshTokenResult.data.data.accessToken;
          api.dispatch(setCredentials({ token: newToken }));
          result = await baseQuery(args, api, extraOptions);
        } else {
          toast.error('Failed to refresh token, please login');
        }
      } catch (error) {
        console.error('Error during token refresh:', error);
      }
    }
  }

  return result;
};


export const baseApi = createApi({
  reducerPath: 'baseApi', 
  baseQuery:baseQueryWithReauth,
  tagTypes:["users"],
  endpoints: () => ({}),
});


