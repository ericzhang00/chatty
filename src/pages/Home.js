import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <section>
          <div >
            <div >
              <h1 >Welcome to Chatty</h1>
              <p >A great place to share your thoughts with friends</p>
              <div >
                <Link className="btn" to="/signup">Create New Account</Link>
                <Link className="btn" to="/login">Login to Your Account</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}