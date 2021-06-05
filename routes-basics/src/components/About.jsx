import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const About = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    await fetch("https://60aec5625b8c300017deb3a5.mockapi.io/api/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  };

  return (
    <div>
      <h1 className="mt-3">Nosotros</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/nosotros/${user.id}`}>
              {user.names} {user.surnames}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
