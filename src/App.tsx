import './App.css';
import About from './pages/About/About';
import Header from './components/Header/Header';
import PostPage from './pages/PostPage';
import Posts from './pages/Posts';
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
