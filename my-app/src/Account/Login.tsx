import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Logo from "../images/isaac-primary-logo-rgb-transparent-250px.png";
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                <Card.Img variant="top" src={Logo}></Card.Img>
                <Card.Header>Welcome back! Login to acces the ISAAC heatmap</Card.Header>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button size="lg" style={{marginLeft: '42%'}} variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Card>
        );
    }
}

export default Login;