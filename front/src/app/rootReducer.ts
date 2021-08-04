import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
      // dashboard: dashboardReducer,
      // user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer