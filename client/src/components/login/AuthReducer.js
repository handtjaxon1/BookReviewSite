const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case "AUTH":
            console.log("Auth Reducer")
            console.log(action?.data);
            localStorage.setItem("user", JSON.stringify({ ...action?.data }));
            return { ...state, authData: null, loading: false, errors: null };
        case "LOGOUT":
            console.log("Auth Logout");
            localStorage.clear();
            return { ...state, authData: null, loading: false, errors: null };
        default:
            return state;
    }
}

export default authReducer;