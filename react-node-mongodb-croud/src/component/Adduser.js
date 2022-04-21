import React from "react";

const Adduser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const user = { name, email };

    // send to the server side

    fetch("http://localhost:5000/user", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <h1>Please Add a New User</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Your Name" required />
        <br />
        <input type="email" name="email" placeholder="Your emial" required />
        <br />
        <input type="submit" value="Add user" />
      </form>
    </div>
  );
};

export default Adduser;
