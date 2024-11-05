// src/components/TaskList.jsx
import React from 'react';

const TaskList = ({
  tasks,
  handleDelete,
  handleEdit,
  editingTaskId,
  editedTaskName,
  setEditedTaskName,
  handleUpdate
}) => {

  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {/* If the task is being edited, show an input */}
              {editingTaskId === task.id ? (
                <>
                  <input
                    type="text"
                    value={editedTaskName}
                    onChange={(e) => setEditedTaskName(e.target.value)}  // Update local state
                  />
                  <button onClick={handleUpdate}>Update</button>
                  <button onClick={() => handleEdit(null, '')}>Cancel</button> {/* Cancel Edit */}
                </>
              ) : (
                <>
                  <span>{task.name}</span>
                  <button onClick={() => handleEdit(task.id, task.name)}>Edit</button>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
