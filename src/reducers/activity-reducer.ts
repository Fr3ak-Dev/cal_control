import { Activity } from "../types"

export type ActivityActions = {

}

// Define the state type
type ActivityState = {
    activities: Activity[]
}

export const initialState: ActivityState = {
    activities: []
}

// Reducer function to handle actions and update state
export const activityReducer = (
    state: ActivityState = initialState, // Default state
    action: ActivityActions // Action to process
) => {
    
}
