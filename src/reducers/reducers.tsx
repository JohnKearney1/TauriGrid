// This is main reducers file. This file combines all reducers into one.
import { combineReducers } from "redux";

// Import reducers here:
import layoutProvider from "./layoutProvider";

// Combine reducers here:
const allReducers = combineReducers({
    
    // Add reducers here with custom names (left) and imported reducers (right)
    layouts: layoutProvider,
});

export default allReducers;