import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { ButtonGroup, Button } from 'react-bootstrap';

function ListTask() {
  const tasks = useSelector(state => state.tasks);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'not_done') return !task.isDone;
    return true;
  });

  const setFilter = (newFilter) => {
    dispatch({ type: 'SET_FILTER', payload: newFilter });
  };

  return (
    <>
      <ButtonGroup className="mb-3">
        <Button variant={filter === 'all' ? 'primary' : 'outline-primary'} onClick={() => setFilter('all')}>
          Toutes
        </Button>
        <Button variant={filter === 'done' ? 'primary' : 'outline-primary'} onClick={() => setFilter('done')}>
          Terminées
        </Button>
        <Button variant={filter === 'not_done' ? 'primary' : 'outline-primary'} onClick={() => setFilter('not_done')}>
          Non terminées
        </Button>
      </ButtonGroup>

      {filteredTasks.length === 0 ? (
        <p>Aucune tâche à afficher.</p>
      ) : (
        filteredTasks.map(task => <Task key={task.id} task={task} />)
      )}
    </>
  );
}

export default ListTask;
