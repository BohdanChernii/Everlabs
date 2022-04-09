import { TASK_LIST_RECEIVED } from './todos.actions';
const initialState = {
  taskList: [],
};
export const taskListReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_LIST_RECEIVED: {
      return {
        ...state,
        taskList: action.payload.taskList,
      };
    }
    default:
      return state;
  }
};
