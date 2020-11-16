import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Logo from "../../Media/images/isaac-primary-logo-rgb-transparent-250px.png";
import './Login.css';
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
            <div className="Background">
            <Card className="LoginForm">
                <Card.Img className="LoginFormLogo" src={Logo}></Card.Img>
                <Card.Header style={{backgroundColor: 'white'}}>
                    <h1>Login</h1> <br/>
                    <span>Login to acces the ISAAC heatmap</span><br/>
                    <span>Did you <a href="/login"> Forget your password?</a></span></Card.Header>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button size="lg" variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Card>
            </div>
        );
    }
}

export default Login;