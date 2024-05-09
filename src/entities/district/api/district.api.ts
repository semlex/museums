import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/shared/api';
import { GetDistrictsResponse } from '../model/types';

export const districtApi = createApi({
  reducerPath: 'districtApi',
  baseQuery,
  tagTypes: ['Districts'],
  endpoints: (builder) => ({
    getDistricts: builder.query<GetDistrictsResponse, void>({
      query: () => ({
        url: 'city/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3/administrative_units?centers_only=false',
        method: 'GET',
      }),
      providesTags: ['Districts'],
    }),
  }),
});

export const { useGetDistrictsQuery } = districtApi;
