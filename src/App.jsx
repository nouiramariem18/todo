import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container className="mt-5">
      <h1 className="mb-4 text-center">ToDo </h1>
      <AddTask />
      <ListTask />
    </Container>
  );
}

export default App;
