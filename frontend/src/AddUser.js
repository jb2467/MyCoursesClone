import React, { Component } from 'react';
import { FormGroup, Label, Input, Button, Container, Card, CardBody} from 'reactstrap';
import {Link } from 'react-router-dom'
class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    }

  handleChange=(e)=>{
    const { name, value } = e.target;
    this.setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      console.log(this.state)
  }
  
  addUser = async () => {
    this.props.addUser(this.state)
  };
  isValid = () => {
    return this.state.username.trim() !== '' && this.state.email.trim() !== '' && this.state.password.trim() !== ''
      
  }

  render(){
    const isValid = this.isValid();
    return(
        <div>
          <h1 style={{ textAlign: 'center' }}>Register your account below</h1>
          <Container>
            <Card>
              <CardBody>
              <FormGroup>
                <Label for="Email">Please enter email</Label>
                <Input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="Username">Please enter username</Label>
                <Input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="Password">Please enter password</Label>
                <Input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} />
            </FormGroup>

            {isValid ? (
              <Link to="/add" onClick={() => this.addUser()}>
              <Button color='primary'>Add User</Button>
            </Link>
            ) : (
              <Button disabled>Add User</Button>
            )}     
            <p>{this.props.message}</p>
              </CardBody>
            </Card>  
          </Container>
            
        </div>
    );
  }
}
export default AddUser;
