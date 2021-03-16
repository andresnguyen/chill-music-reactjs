import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
    volume: 1
}

const playMusic = createSlice({
    name: 'playmusic',
    initialState: initialValue,
    reducers: {
      changeVolume: (state, action) => {
        // const newPhoto = action.payload;
        state.volume = action.payload
      },
      
    }
  });
  
  const { reducer, actions } = playMusic;
  export const { changeVolume } = actions;
  export default reducer;