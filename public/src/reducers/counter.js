const initialState = {
   count: 0
}

// Action Types
const INCREASE_COUNT = 'INCREASE_COUNT'
const DECREASE_COUNT = 'DECREASE_COUNT'

// Reducer
export default function counterReducer(state = initialState, action) {
   switch (action.type) {
      case INCREASE_COUNT:
         return {
            count: state.count + action.payload
         }
      case DECREASE_COUNT:
         return {
            count: state.count - action.payload
         }
      default:
         return state
   }
}

// Action Creators
export function increase(amount) {
   return {
      type: INCREASE_COUNT,
      payload: amount
   }
}

export function decrease(amount) {
   return {
      type: DECREASE_COUNT,
      payload: amount
   }
}
