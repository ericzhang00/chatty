import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup, signInWithGoogle, signInWithGitHub } from "../helpers/auth";

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          email: '',
          password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.googleSignIn = this.googleSignIn.bind(this);
        this.githubSignIn = this.githubSignIn.bind(this);
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ error: '' });
        try {
          await signup(this.state.email, this.state.password);
        } catch (error) {
          this.setState({ error: error.message });
        }
    }

    async googleSignIn() {
        try {
          await signInWithGoogle();
        } catch (error) {
          this.setState({ error: error.message });
        }
    }

    async githubSignIn() {
        try {
          await signInWithGitHub();
        } catch (error) {
          this.setState({ error: error.message });
        }
      }

    render() {
        return (
          <div>
            <form
              onSubmit={this.handleSubmit}
            >
              <h1>
                Sign Up to
                <Link to="/">
                  Chatty
                </Link>
              </h1>
              <p>
                Fill in the form below to create an account.
              </p>
              <div className="form">
                <input
                  placeholder="Email"
                  name="email"
                  type="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </div>
              <div className="form">
                <input
                  placeholder="Password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  type="password"
                />
              </div>
              <div className="form">
                {this.state.error ? (
                  <p>{this.state.error}</p>
                ) : null}
                <button type="submit" className="btn" >Sign Up</button>
                <p>Or</p>
                <button className="googleBtn btn" onClick={this.googleSignIn} type="button">
                Sign up with Google
                </button>
                <button className="gitBtn btn" type="button" onClick={this.githubSignIn}>
                Sign up with GitHub
                </button>
              </div>
              <hr />
              <p>
                Already have an account? <Link to="/signup">Login</Link>
              </p>
            </form>
          </div>
        );
      }
}