import React from 'react';
import { Form, Button, Caption, Container } from './LoginStyles';
import { withAuth } from './Auth';
import { Redirect } from "react-router-dom";

const Login = withAuth(({ isAuthorized, authorize }) => (
  isAuthorized ? <Redirect to="/public" /> :
  <Form>
    <Caption>
      <h1>autorisation</h1>
    </Caption>
    <Container>
      <Button onClick={authorize}>Login</Button>
    </Container>
  </Form>
));
export default Login;