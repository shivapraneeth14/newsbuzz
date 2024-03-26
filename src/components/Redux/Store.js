import { configureStore } from '@reduxjs/toolkit'
import Dataslicereducer from './Slice.js'

const store = configureStore({
    reducer:Dataslicereducer
})
export default store