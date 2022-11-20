import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	user: false,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUser: (state, action) => { state.user = action.payload },

	}
})

export const { loginUser } = userSlice.actions;
export default userSlice.reducer;




