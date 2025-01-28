import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  const params = {
    bl_lat: "34.488131",
    bl_lng: "25.479116",
    tr_lat: "42.940058",
    tr_lng: "44.79308",
    speed: "10,99999",
  };

  const res = await api.get("/flights/list-in-boundary", { params });
  const formatted = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2],
    lng: i[3],
    deg: i[4],
  }));
  return formatted;
});

export const getDetails = createAsyncThunk("detail/getDetails", async (id) => {
  const params = {
    flight: id,
  };
  const res = await api.get("/flights/detail", { params });
  return res.data;
});
