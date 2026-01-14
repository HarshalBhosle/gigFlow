import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const slice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
    logout(state) {
      state.user = null
    }
  }
})

export const { setUser, logout } = slice.actions
export default slice.reducer

export const fetchSession = () => async (dispatch) => {
  const res = await axios.get("/session")
  if (res.data.user) dispatch(setUser(res.data.user))
}
