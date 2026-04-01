import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';

export default function Index() {
  return (
    <>
      <Navbar />
      <main className='router'>
        <Outlet />
      </main>
    </>
  )
}
