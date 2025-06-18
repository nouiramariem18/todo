import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, InputGroup } from 'react-bootstrap';

function AddTask() {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (description.trim() === '') return;
    dispatch({
      type: 'ADD_TASK',
      payload: {
        id: Date.now(),
        description,
        isDone: false
      }
    });
    setDescription('');
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Nouvelle tâche..."
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <Button variant="primary" onClick={handleAdd}>
        Ajouter
      </Button>
    </InputGroup>
  );
}

export default AddTask;
