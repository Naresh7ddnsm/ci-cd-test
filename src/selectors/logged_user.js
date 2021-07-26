import { createSelector } from "reselect"

const loggedUser = createSelector((state) => state.logged_user, (user) => user)

export default loggedUser;