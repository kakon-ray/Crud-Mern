import React from "react";

const Adduser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const user = { name, email };

    // send to the server side

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("users added successfully!!!");
        event.target.reset();
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
