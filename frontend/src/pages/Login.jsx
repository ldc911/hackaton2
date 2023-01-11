/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const { VITE_BACKEND_URL } = import.meta.env;

function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${VITE_BACKEND_URL}/api/login`, {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="width content">
      <form className="px-10 pt-10" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Adresse email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <Link to="/register">
          <div>Vous n'avez pas de compte ?</div>
        </Link>
        <button
          type="submit"
          className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4"
        >
          SE CONNECTER
        </button>
      </form>
    </div>
  );
}

export default Login;
