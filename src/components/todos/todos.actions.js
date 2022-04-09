import {
  fetchTaskList,
  createTask,
  deleteTask,
  updateTask,
} from '../todogateway';
import { tasksListSelector } from './todos.selector';
export const TASK_LIST_RECEIVED = 'TASKLIST_RECEIVED';
export const TASK_LIST_UPDATED = 'TASK_LIST_UPDATED';
export const TASK_LIST_DELETED = 'TASK_LIST_DELETED';
export const taskListReceived = (taskList) => {
  return {
    type: TASK_LIST_RECEIVED,
    payload: {
      taskList,
    },
  };
};
export const fetchTaskListData = () => {
  const thunk = function (dispatch) {
    fetchTaskList().then((taskList) => dispatch(taskListReceived(taskList)));
  };
  return thunk;
};
export const createNewTask = (text) => {
  const thunk = function (dispatch) {
    const taskData = {
      text,
      done: false,
      createdAt: new Date().toISOString(),
    };
    createTask(taskData).then(() => dispatch(fetchTaskListData()));
  };
  return thunk;
};
export const updateTaskStatus = (taskId) => {
  const thunk = function (dispatch, getState) {
    const state = getState();
    const taskList = tasksListSelector(state);
    const task = taskList.find((task) => task.id === taskId);
    const updatedTask = {
      ...task,
      done: !task.done,
    };
    updateTask(taskId, updatedTask).then(() => dispatch(fetchTaskListData()));
  };
  return thunk;
};
export const updateTaskText = (taskId, newText) => {
  const thunk = function (dispatch, getState) {
    const state = getState();
    const taskList = tasksListSelector(state);
    const task = taskList.find((task) => task.id === taskId);
    const updatedTask = {
      ...task,
      text: newText,
    };
    updateTask(taskId, updatedTask)
      .then(() => dispatch(fetchTaskListData()))
      .then(() => document.location.reload());
  };
  return thunk;
};
export const removeTask = (taskId) => {
  const thunk = function (dispatch) {
    deleteTask(taskId).then(() => dispatch(fetchTaskListData()));
  };
  return thunk;
};
