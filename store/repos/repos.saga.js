import { takeLatest, call, put } from "redux-saga/effects";
import Axios from "axios";
import { actionCreator } from "./repos.meta";

function* fetchRepos(action) {
  const { username } = action.payload;
  const response = yield call(
    Axios.get,
    `https://api.github.com/users/${username}/repos`
  );

  yield put(actionCreator.fetchReposSuccess(response.data));
}

export default function* repoSaga() {
  yield takeLatest("FETCH_REPOS", fetchRepos);
}
