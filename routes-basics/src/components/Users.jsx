import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router";

export const Users = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [fetchState, setFetchState] = useState("loading");

  useEffect(() => {
    const getUser = async () => {
      const dataReceived = await fetch(
        `https://60aec5625b8c300017deb3a5.mockapi.io/api/users/${id}`
      ).then((response) => response.json());
      if (dataReceived === "Not found") {
        setFetchState("userNotExist");
      } else {
        setFetchState("userLoaded");
        setUser(dataReceived);
      }
    };
    getUser();
  }, [id]);

  const loadingUser = () => {
    return <h2>Obteniendo datos del usuario</h2>;
  };

  const userNotExist = () => {
    return <h2>Usuario no encontrado</h2>;
  };

  const showUser = () => {
    return (
      <div>
        <h2>
          {user.names} {user.surnames}
        </h2>
        <p>
          <i className="fa fa-envelope-o"></i> {user.email}
        </p>
        <p>
          <i className="fa fa-phone"></i> {user.telephone}
        </p>
        <p>
          <i className="fa fa fa-map-marker"></i> {user.city}, {user.country}
        </p>
      </div>
    );
  };

  const userStates = {
    loading: loadingUser(),
    userLoaded: showUser(),
    userNotExist: userNotExist(),
  };

  return <Fragment>{userStates[fetchState]}</Fragment>;
};
