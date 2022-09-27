import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:5000/users", user);
    history.push("/");
  };
  return (
    <div>
      <div>
        <h2>Agregar un usuario</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div>
            <input
              type="text"
              
              placeholder="Ingresa tu nombre"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
            <input
              type="text"
              
              placeholder="Ingresa tu Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
            <input
              type="email"
              
              placeholder="Ingresa tu direccion de E-mail"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
            <input
              type="text"
              
              placeholder="Ingresa tu numero telefonico"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
            <input
              type="text"
              
              placeholder="Ingresa el nombre de tu Pagina web"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button>Agregar Usuario</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;