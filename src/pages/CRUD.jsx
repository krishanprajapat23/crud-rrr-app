import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, updateTask } from '../state-manage/tasksSlice'; // Redux actions
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const CRUD = () => {
  const tasks = useSelector((state) => state.tasks.tasks); // Access tasks from Redux
  const dispatch = useDispatch();

  // Local state to track the task being edited
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskName, setEditedTaskName] = useState('');

  // Handle adding a new task
  const handleAddTask = (taskName) => {
    if (taskName.trim()) {
      const newTask = { id: Date.now(), name: taskName };
      dispatch(addTask(newTask));  // Dispatch Redux action to add a task
    }
  };

  // Handle task deletion
  const handleDelete = (id) => {
    dispatch(deleteTask(id));  // Dispatch Redux action to delete task
  };

  // Start editing a task
  const handleEdit = (id, currentName) => {
    setEditingTaskId(id);
    setEditedTaskName(currentName);  // Set the current task name as input value
  };

  // Handle task update
  const handleUpdate = () => {
    if (editedTaskName.trim()) {
      dispatch(updateTask({ id: editingTaskId, updatedTask: { name: editedTaskName } }));
      setEditingTaskId(null);  // Reset editing mode
      setEditedTaskName('');  // Clear the input
    }
  };

  return (
    <div>
      {/* Task Form Component to Add New Tasks */}
      <TaskForm onAddTask={handleAddTask} />

      {/* Task List Component to Display Tasks and Enable Edit/Delete */}
      <TaskList 
        tasks={tasks} 
        handleDelete={handleDelete} 
        handleEdit={handleEdit} 
        editingTaskId={editingTaskId}
        editedTaskName={editedTaskName}
        setEditedTaskName={setEditedTaskName}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default CRUD;
