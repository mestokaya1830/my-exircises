import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [user, setUser] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("/api")
      .then((result) => {
        setUser(result.data);
        console.log(result.data)
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div>
        {user.map((item) => (
          <div key={item.id}>
            <span>{item.full_name} </span>
            <span>{item.age} </span>
            <span>State: {item.active ? "Aktif" : "Pasif"}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
