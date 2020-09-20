import { createAction } from "redux-actions";

export const types = {
  FETCH_REPOS: "FETCH_REPOS",
  FETCH_REPOS_SUCCESS: "FETCH_REPOS_SUCCESS",
};

export const actionCreator = {
  fetchRepos: createAction(types.FETCH_REPOS),
  fetchReposSuccess: createAction(types.FETCH_REPOS_SUCCESS),
};
