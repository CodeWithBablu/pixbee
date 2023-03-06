import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/NavBar/Navbar'

const App = () => {

  const [theme, setTheme] = useState(0)

  const toggleTheme = () => {
    setTheme((prev) => prev == 0 ? 1 : 0);
  }

  return (
    <div className={`${theme == 0 ? `` : `dark bg-secondary`}`}>
      <div className=' relative mx-auto max-w-7xl'>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Home />
      </div>
    </div>
  )
}

export default App
