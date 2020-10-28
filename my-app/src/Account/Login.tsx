import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { textChangeRangeIsUnchanged } from 'typescript';
class Login extends Component {

    // constructor(props) {
    //   super(props);
    //   this.userLoaded = this.userLoaded.bind(this); 
    //   this.userUnLoaded = this.userUnLoaded.bind(this);

    //   this.state = { user: undefined };
    // }  

    // userLoaded(user) {
    //   if (user)
    //     this.setState({ "user": user });
    // } 

    // userUnLoaded() {
    //   this.setState({ "user": undefined });
    // } 

    NotAuthenticated() {
        return <div>You are not authenticated, please click here to authenticate.</div>;
    }

    render() {
        return (
            <Card style={{width: '25rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '18%', backgroundColor: 'white'}}>
                <Card.Header style={{width: '25rem'}}>Login</Card.Header>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
        );
    }
}

export default Login;