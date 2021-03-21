
export const postLikeReducer = (state = {
    1:true
}, action) => {
    switch (action.type) {
        case "LIKE":
            return {
                ...state,
                [action.id]:true,
            }
        case "DISLIKE":
            return {
                ...state,
                [action.id]:false,
            }
    
        default:
            return state;
    }
}
