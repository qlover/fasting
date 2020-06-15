import { getTimestampByUnix } from '../Lib/Utilities'

const F_NEXT_TIME_SET = 'F_NEXT_TIME_SET'
const F_NEXT_TIME_GET = 'F_NEXT_TIME_GET'

type TimeState = {
  start: number,
  end: number
}


// 初始化state数据
const initialState: TimeState = {
  start: +new Date('2020/04/12 10:00:00'),
  end: +new Date('2020/04/13 23:40:00')// 1586792400000
}


/* ------------- Types and Action Creators ------------- */

const getNextTimeAction = (payload) => {
  return {
    type: F_NEXT_TIME_GET,
    payload
  }
}

const setNextTimeAction = (payload) => {
  return {
    type: F_NEXT_TIME_SET,
    payload
  }
}

/* ------------- Reducers ------------- */

const getNextTimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case F_NEXT_TIME_GET:
      return state.payload;
      break;
    default:
      return state
  }
};

const setNextTimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case F_NEXT_TIME_SET:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
};

export {
  getNextTimeAction,
  getNextTimeReducer,
  setNextTimeAction,
  setNextTimeReducer
}
