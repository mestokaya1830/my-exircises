import { useContext } from 'react'
import { ThemeContext } from '../context/themeProvider.jsx'

export default function Index() {
  const { setTheme } = useContext(ThemeContext)
  let {theme} = useContext(ThemeContext)

  const changeTheme = () => {
    setTheme((item => item === 'dark' ? 'light' : 'dark'))
  }
  return (
    <>
      <h1>Home</h1>
      <h3>Current Theme is {theme[0].toUpperCase() + theme.slice(1)}</h3>
      <button onClick={() => changeTheme()}>Change Theme</button>
    </>
  )
}