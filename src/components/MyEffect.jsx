import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/MyEffect.css";
import { Link } from "react-router-dom";

function MyEffect() {
  const [users, setUsers] = useState([]);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [authMessage, setAuthMessage] = useState(" ");
  const [formSubmittied, setFormSubmittied] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(event) {
    event.preventDefault(); 
    setFormSubmittied(true);
    let id = document.getElementById("id").value;
    let email = document.getElementById("email").value;
    let inputObj = {
      userId: id,
      userEmail: email,
    };
    authenticateUser(inputObj, users);
  }

  function authenticateUser(inputObj, users) {
    const { userId, userEmail } = inputObj;
    for (let user of users) {
      // eslint-disable-next-line
      if (userId == user.id && userEmail == user.email) {
        setAuthenticatedUser(user); 
        setAuthMessage("User authenticated successfully");
        return; 
      }
    }
    setAuthenticatedUser(null); 
    setAuthMessage("User authenticated failed");
  }

  return (
    <div>
      <h1 className="h1">Fetching Data From API</h1>
      <form>
        <label htmlFor="id">ID</label>
        <input type="text" name="id" id="id" placeholder="Enter id" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter email" />
        <input type="submit" onClick={handleSubmit} />
      </form>

      {authenticatedUser && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{authenticatedUser.id}</td>
              <td>{authenticatedUser.name}</td>
              <td>{authenticatedUser.username}</td>
              <td>{authenticatedUser.email}</td>
              <td>{authenticatedUser.phone}</td>
              <td>{authenticatedUser.website}</td>
            </tr>
          </tbody>
        </table>
      )}
      {authMessage && <p>{authMessage}</p>}

      {formSubmittied && !authenticatedUser && (
        <p id="p">please try again with valid email address</p>
      )}

      {authenticatedUser && (
        <p id="p">
          Click{" "}
          <Link className="{text-align: center}" to="/products">
            here
          </Link>{" "}
          to see the products
        </p>
      )}
    </div>
  );
}

export default MyEffect;
