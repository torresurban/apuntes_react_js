import React from 'react'

const Contact = () => {
  return (
    <div>
      <div >
        <h1>Contact Page</h1>
        <form>
          <div>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div >
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              id="exampleInputPassword1"
            />
          </div>
          <div >
            <input
              type="checkbox"
              id="exampleCheck1"
            />
            <label  htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact