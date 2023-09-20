import { configureStore } from '@reduxjs/toolkit'
import incdceReducer from './reducers/index'


export default configureStore({
    reducer:{
        number: incdceReducer
    }
})
    
