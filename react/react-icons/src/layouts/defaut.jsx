import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import { IconContext } from "react-icons";

export default function defaut() {
  return (
    <>
      <IconContext.Provider value={{ color: "purple", size: "100px" }}>
        <Navbar />
        <main className="router">
          <Outlet />
        </main>
      </IconContext.Provider>
    </>
  );
}
