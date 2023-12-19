import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Input, Card, Container, CardBody } from 'reactstrap';
import logo from './logo.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const response = await fetch(`http://127.0.0.1:4999/users`);
    const data = await response.json();
    const userData = data.map((userArray) => ({
      id: userArray[0],
      name: userArray[1],
      username: userArray[2],
      email: userArray[3],
      key: userArray[4],
    }));
    setUsers(userData);
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="App">
      <h1>Users</h1>
      <Row md = '12'>
        {users.map((u) => (
          <Col key={u.id} md='4'>
            <Card className="">
              <p>{u.id}</p>
              <p>{u.name}</p>
              <p>{u.username}</p>
              <p>{u.email}</p>
              <p>{u.key}</p>
            </Card>
          </Col>
        ))}
        </Row>      
    </div>
  );
}

export default App;
