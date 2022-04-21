import React from "react";

const Adduser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const user = { name, email };

    // send to the server side
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
