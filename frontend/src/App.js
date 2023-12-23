import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Input, Card, Container, CardBody } from 'reactstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser';

function App() {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const response = await fetch(`http://127.0.0.1:4999/users`);
    const data = await response.json();
    const userData = data.map((userArray) => ({
      id: userArray[0],
      username: userArray[1],
      password: userArray[2],
      email: userArray[3],
      key: userArray[4],
    }));
    setUsers(userData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const addUser = (newUser) => {
    fetch('http://127.0.0.1:4999/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    }).then(()=>{
      fetchData();
    }
    )
  }


  return (
    <Router>
      <Switch>
        <Route path ='/add'>
          <AddUser addUserCallback={addUser} />
        </Route>
        <Route path='/'>
        <h1>Users</h1>
        <div className='App'>
          <Row md = '12'>
          {users.map((u) => (
            <Col key={u.id} md='4'>
              <Card className="">
                <p>{u.id}</p>
                <p>{u.username}</p>
                <p>{u.password}</p>
                <p>{u.email}</p>
                <p>{u.key}</p>
              </Card>
            </Col>
          ))}
          </Row>    
        </div>
        </Route>

      </Switch>
    </Router>
    
  );
}

export default App;
