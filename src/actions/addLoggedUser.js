const loggedUser = user => ({
    type: "LOGIN",
    payload: user
})

export default loggedUser;