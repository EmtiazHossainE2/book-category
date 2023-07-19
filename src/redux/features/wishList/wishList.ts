import { api } from "../../api/apiSlice";

const wishlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getWishList: builder.query({
      query: () => "/wishlist",
      providesTags: ["wishlist"],
    }),
    addToWishList: builder.mutation({
      query: (data) => ({
        url: `/wishlist`,
        method: "POST",
        body: data,
      }),
    }),
    updateWishListBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/wishlist/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["wishlist"],
    }),
  }),
});

export const {
  useGetWishListQuery,
  useAddToWishListMutation,
  useUpdateWishListBookMutation,
} = wishlistApi;
