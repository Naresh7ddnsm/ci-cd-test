import { createSelector } from "reselect";


const loans = createSelector((state) => state.loans, loans => loans);

export default loans;