import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:5000/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Regresar a Inicio
      </Link>
      <h1 className="display-4">Usuario con Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Nombre: {user.name}</li>
        <li className="list-group-item">Username: {user.username}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Phone: {user.phone}</li>
        <li className="list-group-item">Website: {user.website}</li>
      </ul>
    </div>
  )
}

export default User