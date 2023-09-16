import Lottie from 'lottie-react';
import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import animationVideo from './assets/animationVideo.json'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from './firebase/firebase.config';


function App() {
  const auth = getAuth(app);
  const handleRegisterSubmit = event => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(`
    Email: ${email}
    Password: ${password}
    `)
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const CreatedUser = result.user;
        console.log(CreatedUser)
      })
      .catch(error => {
        console.log('error', error.message)
      })
  }

  return (
    <div className='m-5 d-flex w-75 mx-auto'>
      <div className='w-50'>
        <Form onSubmit={handleRegisterSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className='w-50 margin-top-css'>
        <Lottie animationData={animationVideo}></Lottie>
      </div>
    </div >
  )
}

export default App
