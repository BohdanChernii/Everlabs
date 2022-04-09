import { createSelector } from 'reselect';
export const tasksListSelector = (state) => state.taskList;
export const sortedTaskListSelector = createSelector(
  [tasksListSelector],
  (taskList) => {
    return taskList.slice().sort((a, b) => a.done - b.done);
  }
);
