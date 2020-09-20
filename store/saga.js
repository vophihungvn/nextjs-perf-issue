import { all, fork } from "redux-saga/effects";
import repos from "./repos/repos.saga";

export default function* mainSaga() {
  yield all([fork(repos)]);
}
