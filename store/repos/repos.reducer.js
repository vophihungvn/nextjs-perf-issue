import { handleActions } from "redux-actions";

export default handleActions(
  {
    FETCH_REPOS_SUCCESS: (store, action) => ({
      ...store,
      repos: action.payload,
    }),
  },
  { repos: [] }
);
