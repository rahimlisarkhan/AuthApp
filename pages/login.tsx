import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ChangeEvent, useLayoutEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const [form, setForm] = useState({});
  const router = useRouter();

  useLayoutEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken) {
      router.push("/");
    }
  }, []);

  const handleChange = (e: ChangeEvent) => {
    const name = e.target?.name;
    const value = e.target?.value;

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async () => {
    const res = await axios.post("/api/login", form);

    localStorage.setItem("access_token", res.data.access_token);

    router.push("/");
  };

  return (
    <div className={styles.container}>
      <input
        type="email"
        name="email"
        placeholder="email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
      />
      <br />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
};

export default Login;
