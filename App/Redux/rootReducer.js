// 根 reducer
// 对所有的 reducer 做整合
import { combineReducers } from "redux";
import { getNextTimeReducer } from './FastingTimeRedux'

export default combineReducers({
  //every modules reducer should be define here
  getNextTimeReducer
});
