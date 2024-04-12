// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITeamsApiResponse, IUpcomingEventResponse } from '../types';

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://661643a0b8b8e32ffc7ce2ea.mockapi.io/api/v1',
  }),
  endpoints: builder => ({
    getTeams: builder.query<
      ITeamsApiResponse[],
      {
        page: number;
        limit?: number;
        name?: string;
      }
    >({
      query: ({ page, limit = 10, name }) => ({
        url: `/team`,
        params: {
          page,
          limit,
          name,
        },
      }),
    }),
    getEvents: builder.query<IUpcomingEventResponse[], void>({
      query: () => ({
        url: `/events`,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLazyGetTeamsQuery, useGetEventsQuery } = baseApi;
