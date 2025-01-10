import { BrowserRouter,Routes,Route } from "react-router-dom"

import Home from "./pages/Home"
import Logo from "./components/Logo"
import News from "./pages/News"
import About from "./pages/About"

import "./style/index.scss"

function App() {

  return (
    <>
      <Logo />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/News" element={<News />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
