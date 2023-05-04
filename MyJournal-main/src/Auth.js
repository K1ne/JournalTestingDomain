
import React, { useEffect, useState } from "react"
import "./Auth.css"
import App from "./App";
import { useNavigate } from 'react-router-dom';
import { createLogin } from './graphql/mutations';
import { listLogins } from './graphql/queries';
import { API, Amplify } from 'aws-amplify';
import background from "./Pictures/loginbackgroundimage.jpg";

export default function (props) {

  const login = async (e) => {
    e.preventDefault()
    const { target } = e

    const loginData = await API.graphql({
      query: listLogins,
      variables: {
        filter: {
          username: {
            eq: target.usernameInput.value
          }
        }
      }
    })

    if (loginData.data.listLogins.items[0].password == target.passwordInput.value) {
      console.log('Logged In');
      localStorage.setItem('id', loginData.data.listLogins.items[0].id)
      localStorage.setItem('username', loginData.data.listLogins.items[0].username)
      navigate('./push')
    } else {
      errorLogin("error-label")
    }


    console.log(loginData)
  }

  const newLogin = async (e) => {
    e.preventDefault()
    const { target } = e

    const loginData = await API.graphql({
      query: listLogins,
      variables: {
        filter: {
          username: {
            eq: target.usernameInput.value
          }
        }
      }
    })

    const exists = loginData.data.listLogins.items[0] == null

    if (exists == false) {
      console.log('Username already exists')
      errorLogin("error-label-signup")
    } else {
      try {
        await API.graphql({
          query: createLogin,
          variables: {
            input: {
              name: target.nameInput.value,
              username: target.usernameInput.value,
              password: target.passwordInput.value
            },
          },
        })
        console.log('Successfully sent')
      } catch (e) {
        console.log(e)
      }

      changeAuthMode()
    }
  }

  let [authMode, setAuthMode] = useState("signin")
  const navigate = useNavigate();

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
    document.getElementById("login").reset()
  }

  const errorLogin = (target) => {
    var element = document.getElementById(target);
    // element.style.visibility = element.style.visibility === "visible" ? "hidden" : "visible"
    element.style.visibility = "visible"
  }

  if (authMode === "signin") {

    return (
      <div style={{ backgroundImage: `url(${background})` }} >

        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={login} id="login">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  name="usernameInput"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  name="passwordInput"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
              <p id="error-label" className="error-login">
                Username or password is incorrect
              </p>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundImage: `url(${background})` }} >
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={newLogin} id="login">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="name"
                className="form-control mt-1"
                placeholder="Full Name"
                name="nameInput"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                name="usernameInput"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                name="passwordInput"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn-submit">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
            <p id="error-label-signup" className="error-login">
                This user already exists
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
