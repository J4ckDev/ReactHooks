import React from "react";
import { useLocation } from "react-router";

export const Error404 = () => {
  let location = useLocation();
  return (
    <div>
      <h2>Error 404!</h2>
      La página {location.pathname} no se encuentra en este servidor.
    </div>
  );
};
