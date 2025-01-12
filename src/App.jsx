import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DefaultLayout from "./pages/DefaultLayout"

import HomePage from "./pages/HomePage"
import Contact from "./pages/Contact"
import About from "./pages/About"
import PostsPage from "./pages/PostsPage"
import PostPage from "./pages/PostPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout} >
            <Route path='/' Component={HomePage} />
            <Route path='/contact' Component={Contact} />
            <Route path='/about' Component={About} />
            <Route path='/posts' >
              <Route index Component={PostsPage} />
              <Route path=":id" Component={PostPage} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App