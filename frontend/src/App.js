import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Input, Card, Container, CardBody } from 'reactstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import AddUser from './AddUser';
import LoginUser from './LoginUser';
import LogoutUser from './LogoutUser';

function App() {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const response = await fetch(`http://127.0.0.1:4999/users`);
    const data = await response.json();
    const userData = data.map((userArray) => ({
      username: userArray[1],
      email: userArray[3],
      key: userArray[4]
    }));
    setUsers(userData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Router>
      <Switch>
      <Route path ='/register'>
          <AddUser fetchData={fetchData}  />
        </Route>
        <Route path ='/login'>
          <LoginUser fetchData={fetchData} ></LoginUser>
        </Route>
        <Route path='/'>
          <h1>Users</h1>
          <LogoutUser fetchData={fetchData}></LogoutUser>
          <div className='App'>
            <Row md = '12'>
              {users.map((u) => (
                <Col key={u.id} md='4'>
                  <Card className="">
                    <p>{u.username}</p>
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
