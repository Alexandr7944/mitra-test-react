import './App.css';
import About from './components/About';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import PostPage from './components/PostPage';
import Posts from './components/Posts';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/posts" element={<Posts/>} />
        <Route path="/posts/:userId" element={<PostPage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/*" element={<Posts/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
