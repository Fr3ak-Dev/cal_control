import { Activity } from "../types"

export type ActivityActions =
    /**
     * Las acciones tiene un tipo y un payload
     * type: es la descripción de la acción
     * payload: es el objeto (información) que modifica o agrega al state
     */
    { type: 'save-activity', payload: { newActivity: Activity } } |
    { type: 'set-activeId', payload: { id: Activity['id'] } }

// Define the state type
type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}

export const initialState: ActivityState = {
    activities: [],
    activeId: ''
}

// Reducer function to handle actions and update state
export const activityReducer = (
    state: ActivityState = initialState, // Default state
    action: ActivityActions // Action to process
) => {
    if (action.type === 'save-activity') {
        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity] // Add new activity to the state
        }
    }

    if (action.type === 'set-activeId') {
        return {
            ...state,
            activeId: action.payload.id // Set the active ID in the state
        }
    }

    return state
}
