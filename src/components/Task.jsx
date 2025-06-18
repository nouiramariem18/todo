import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, InputGroup } from 'react-bootstrap';

function Task({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const toggleDone = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  };

  const saveEdit = () => {
    if (newDescription.trim() === '') return;
    dispatch({ type: 'EDIT_TASK', payload: { id: task.id, description: newDescription } });
    setIsEditing(false);
  };

  const deleteTask = () => {
    dispatch({ type: 'DELETE_TASK', payload: task.id });
  };

  return (
    <InputGroup className="mb-2">
      <InputGroup.Checkbox checked={task.isDone} onChange={toggleDone} />
      {isEditing ? (
        <>
          <Form.Control
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            autoFocus
            onKeyDown={e => { if(e.key === 'Enter') saveEdit(); }}
          />
          <Button variant="success" onClick={saveEdit}>Save</Button>
          <Button variant="secondary" onClick={() => setIsEditing(false)}>Cancel</Button>
        </>
      ) : (
        <>
          <Form.Control
            plaintext
            readOnly
            defaultValue={task.description}
            style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}
          />
          <Button variant="warning" onClick={() => setIsEditing(true)}>Edit</Button>
          <Button variant="danger" onClick={deleteTask}>Supprimer</Button>
        </>
      )}
    </InputGroup>
  );
}

export default Task;
