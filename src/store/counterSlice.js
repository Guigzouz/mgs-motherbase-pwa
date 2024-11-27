import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch scorecount from the backend
export const fetchScoreCount = createAsyncThunk(
  "counter/fetchScoreCount",
  async (_, { getState }) => {
    const state = getState();
    const jwt = state.auth.jwt;

    const response = await fetch(
      `${process.env.REACT_APP_REST_API}/motherbase/get`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch motherbase");
    }

    const data = await response.json();
    return data.motherbase.gmp_count;
  }
);

// Define the slice
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    status: "idle",
    error: null,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchScoreCount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchScoreCount.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value = action.payload;
      })
      .addCase(fetchScoreCount.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Export actions
export const { incremented, decremented } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
