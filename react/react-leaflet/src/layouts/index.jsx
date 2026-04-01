import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <>
      <main className="router">
        <Outlet />
      </main>
    </>
  )
}
