import {createStore, combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import petReducer from './reducers/petReducer'
const initialState={}
const middleware=[thunk];

const rootReducer=combineReducers({
    pet:petReducer
})



export const configureStore=createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk)
    )
);

