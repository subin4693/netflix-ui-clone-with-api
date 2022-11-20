import { configureStore } from '@reduxjs/toolkit';
import emailReducer from '../features/emailSlice';
import userReducer from '../features/userSlice';

const store = configureStore({
	reducer: {
		email: emailReducer,
		user: userReducer,
	}
})
export default store;
