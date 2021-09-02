import { SET_HOUSE_RULES } from "../actions";

const initalState = {}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_HOUSE_RULES:
            return action.houseRulesArr
        default:
            return state
    }
}

export default reducer