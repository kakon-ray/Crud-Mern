import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateingUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleUpdateUer = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const updateUser = { name, email };

    // send to the server side update user
    const url = `http://localhost:5000/user/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("users added successfully!!!");
        event.target.reset();
      });
  };

  console.log(id);
  return (
    <div>
      <h1 style={{ textAligen: "center" }}>Updating User {user.name}</h1>

      <div>
        <form onSubmit={handleUpdateUer}>
          <input type="text" name="name" placeholder="Your Name" required />
          <br />
          <input type="email" name="email" placeholder="Your emial" required />
          <br />
          <input type="submit" value="Add user" />
        </form>
      </div>
    </div>
  );
};

export default UpdateingUser;
