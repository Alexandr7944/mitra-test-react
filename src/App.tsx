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
        <Route path="/mitra-test-react/posts" element={<Posts/>} />
        <Route path="/mitra-test-react/posts/:userId" element={<PostPage />} />
        <Route path="/mitra-test-react/about" element={<About/>} />
        <Route path="/*" element={<Posts/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
