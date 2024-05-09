import { fetchBaseQuery } from '@reduxjs/toolkit/query';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const baseQuery = fetchBaseQuery({
  baseUrl,
});
