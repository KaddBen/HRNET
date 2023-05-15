const { createSlice } = require("@reduxjs/toolkit");

const userInfoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addUserInfos: (state, action) => {
      state.push(action.payload);
      console.log(action.payload);
    },
  },
});
export const { addUserInfos } = userInfoSlice.actions;
export default userInfoSlice;
