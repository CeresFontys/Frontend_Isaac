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
            <Card style={{width: '30rem', height: '30rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '14%', backgroundColor: 'white'}}>
                <Card.Img style={{marginLeft: '25%', width: '225px', height: '125px'}} variant="top"src={Logo}></Card.Img>
                <Card.Header style={{backgroundColor: 'white'}}>
                    <h1 style={{textAlign: 'center', color: 'grey'}}>Login</h1> <br/>
                    Welcome back! Login to acces the ISAAC heatmap</Card.Header>
                <Form>
                    <Form.Group style={{marginTop: '5%'}} controlId="formBasicEmail">
                        <Form.Control style={{width: '75%', marginLeft: 'auto',marginRight: 'auto'}} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control style={{width: '75%', marginLeft: 'auto',marginRight: 'auto'}} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button size="lg" style={{width: '80%', marginLeft: '10%'}} variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Card>
        );
    }
}

export default Login;