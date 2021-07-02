import React, { useState } from 'react';
import PhotoList from './PhotoList';
import './Home.scss';
import axios from 'axios';
export default function Home(props) {
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const save = (first_name, last_name, email, password) => {
    let newUser = {
      first_name,
      last_name,
      email,
      password,
    };

    axios
      .put('http://localhost:8080/api/users', { newUser })
      .then(() => console.log('done'))
      .catch((err) => console.log('1111---v', err));
  };
  return (
    <div className="home-container">
      <div className="image-wall">
        <PhotoList image={props.image} />
      </div>
      <div className="register">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="forms">
            <div>
<<<<<<< HEAD
              <label for="first_name" className="label">
                First Name:
              </label>
              <input
                className="input"
                type="text"
                name="first_name"
                onChange={(e) => setFirst_name(e.target.value)}
              />
            </div>
            <div>
              <label for="last_name" className="label">
                Last Name:
              </label>
              <input
                className="input"
                type="text"
                name="last_name"
                onChange={(e) => setLast_name(e.target.value)}
              />
            </div>
            <div>
              <label for="email" className="label">
                email:
              </label>
              <input
                className="input"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label for="password" className="label">
                password:
              </label>
              <input
                className="input"
                type="text"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
=======
              <label for="first_name" className="label" style={{ marginTop: "50px" }} >First Name:</label>
              <input className="input" type="text" name="first_name" />
            </div>
            <div>
              <label for="last_name" className="label" style={{ marginTop: "50px" }}>Last Name:</label>
              <input className="input" type="text" name="last_name" />
            </div>
            <div>
              <label for="email" className="label" style={{ marginTop: "50px" }}>email:</label>
              <input className="input" type="email" name="email" />
            </div>
            <div>
              <label for="password" className="label" style={{ marginTop: "50px" }}>password:</label>
              <input className="input" type="text" name="password" />
>>>>>>> f138b87491ad993b68207b2bddf20ab4b7f75c7c
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => {
                  save(first_name, last_name, email, password);
                }}
              >
                sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
