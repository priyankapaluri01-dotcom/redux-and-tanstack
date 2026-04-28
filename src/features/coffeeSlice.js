import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchCoffee = createAsyncThunk(
  'coffee/fetchCoffee',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://api.sampleapis.com/coffee/hot');
      return response.data; 
    } catch (error) {

      return rejectWithValue("issues with server");
    }
  }
);

const initialState = {
  menu: [],
  isLoading: false,
  errorMessage: null,
};


const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
     
      .addCase(fetchCoffee.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(fetchCoffee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.menu = action.payload; 
      })
      .addCase(fetchCoffee.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || "Something went wrong!";
      });
  },
});

export default coffeeSlice.reducer;