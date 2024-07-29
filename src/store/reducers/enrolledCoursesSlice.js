import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: null,
};

const enrolledCoursesSlice = createSlice({
  name: "EnrolledCourses",
  initialState: initialState,
  reducers: {
    courses: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const { courses } = enrolledCoursesSlice.actions;
export default enrolledCoursesSlice.reducer;
