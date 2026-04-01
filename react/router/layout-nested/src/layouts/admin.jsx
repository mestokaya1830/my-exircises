import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <>
      <h1>Admin Layout</h1>
      <main>
        <Outlet />
      </main>
    </>
  )
}