import {createSelector} from "reselect"

const users = createSelector((state) => state.users, (users) => users)

export default users;