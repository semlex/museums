import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/shared/api';
import type { FeatureCollection } from 'geojson';

export const museumApi = createApi({
  reducerPath: 'museumApi',
  baseQuery,
  tagTypes: ['MuseumsPoints'],
  endpoints: (builder) => ({
    getMuseumsPoints: builder.query<FeatureCollection, void>({
      query: () => ({
        url: 'city/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3/services?city_service_type=%D0%9C%D1%83%D0%B7%D0%B5%D0%B9&geometryAsCenter=true',
        method: 'GET',
      }),
      providesTags: ['MuseumsPoints'],
    }),
  }),
});

export const { useGetMuseumsPointsQuery } = museumApi;
