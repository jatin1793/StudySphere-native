import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice.js'
import enrolledCoursesReducer from './reducers/enrolledCoursesSlice.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
    enrolledCourses: enrolledCoursesReducer
  },
});