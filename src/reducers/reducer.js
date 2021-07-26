const initialState = {
    users: [
        {
            username: "Agent",
            password: "123",
            type: "agent"
        },
        {
            username: "Manager",
            password: "123",
            type: "manager"
        }
    ],
    logged_user: {},
    loans: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD":
            const loans = [...state.loans, action.payload];
            return {...state, loans};
        case "LOGIN":
            return{...state, logged_user: action.payload}
        case "LOGOUT":
            return{...state, logged_user: {}}
        case "UPDATE":
            const isIndex = (ele) => ele.id === action.payload.id;
            const index = state.loans.findIndex(isIndex);
            const nloans = [...state.loans];
            nloans[index] = action.payload;
            return {...state, loans: nloans}
        default:
            return state;
    }
}

export default reducer;