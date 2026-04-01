import { FaReact } from "react-icons/fa"; //font awesome
import { MdAddAlert } from "react-icons/md"; //meterial design
import { BsAlarmFill } from "react-icons/bs"; //bootstrap

export default function Index() {

  return (
    <>
      <h1>Home</h1>
      <h3>Global Settings In Layout</h3>
      <FaReact />
      <MdAddAlert />
      <h3>Override Global Settings</h3>
      <BsAlarmFill  color="green" size="100px"/>
    </>
  )
}