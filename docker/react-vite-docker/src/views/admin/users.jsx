import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Index() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res) => res.json())
    // .then((data) => {
    //   setUsers(data);
    // });

    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      setUsers(res.data)
    })
  },[users]);
  return (
    <>
      <Helmet>
        <title>Users</title>
        <meta name="description" content="Users content" />
        <meta name="keywords" content="react, meta tags, seo" />
        <meta name="author" content="Your Name" />
      </Helmet>
      <h1>Dashboard</h1>

      {users && users.map((item) => (
        <div className="list" key={item.id}>
          <span>{item.id}</span>
          <span>{item.name}</span>
          <span>{item.email}</span>
          <NavLink to={`/admin/user/${item.id}`}>Details</NavLink>
        </div>
      ))}
    </>
  );
}
