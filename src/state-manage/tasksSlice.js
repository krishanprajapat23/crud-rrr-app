import { createSlice } from '@reduxjs/toolkit';

// Initial state for the tasks
const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Action to add a new task
    addTask: (state, action) => {
       // use push here because immer will handle immutability
       state.tasks.push(action.payload);
    },
    // Action to delete a task
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    // Action to update a task
    updateTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...updatedTask };
      }
    },
  },
});

// Export actions for use in components
export const { addTask, deleteTask, updateTask } = tasksSlice.actions;

// Export the reducer to be used in the store
export default tasksSlice.reducer;
