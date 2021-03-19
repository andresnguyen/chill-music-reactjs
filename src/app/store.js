// import counterReducer from '../features/Counter/counterSlice';
import musicReducer from '../features/PlayMusic/PlayMusicSlice'
const { configureStore } = require('@reduxjs/toolkit')

const rootReducer = {
    music: musicReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store
