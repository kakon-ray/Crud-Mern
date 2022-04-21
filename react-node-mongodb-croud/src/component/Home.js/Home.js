import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  console.log(users);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you deleted item");

    if (proceed) {
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = users.filter((user) => user._id != id);
            setUser(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h1>Abailable Users {users.length}</h1>
      {users.map((user) => {
        return (
          <div key={user._id}>
            <p>
              {user.name} : {user.email}
              <Link to={`update/${user._id}`}>
                <button style={{ marginLeft: "10px", cursor: "pointer" }}>
                  Update
                </button>
              </Link>
              <button
                style={{ marginLeft: "10px", cursor: "pointer" }}
                onClick={() => handleDelete(user._id)}
              >
                X
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
