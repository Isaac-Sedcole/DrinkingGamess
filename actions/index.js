export const SET_HOUSE_RULES = "SET_HOUSE_RULES"


export function setHouseRules(houseRulesArr) {
    return {
        type: SET_HOUSE_RULES,
        houseRulesArr
    }
}