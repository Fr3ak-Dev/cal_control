import { Activity } from "../types"

export type ActivityActions = {
    /**
     * Las acciones tiene un tipo y un payload
     * type: es la descripción de la acción
     * payload: es el objeto (información) que modifica o agrega al state
     */
    type: 'save-activity', payload: { newActivity: Activity }
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
    if (action.type === 'save-activity') {
        console.log('Desde el type save-activity')
    }
}
