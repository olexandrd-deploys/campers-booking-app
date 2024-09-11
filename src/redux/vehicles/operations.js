import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "vehicles/fetchCampers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/campers");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
