import './App.css';
import TestComponent from './compornets/TestComponent';
import GetItemComponent from './compornets/GetItemComponent';
import StyledComponent from './compornets/StyledComponent';
import Home from './pages/Home';
import Information from './pages/Information';
import Contact from './pages/Conttact';
import NotFound from './pages/NotFound';
import Layout from './Layout';
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  const isAuthenticated = true
  return (<>
  {/* <nav>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/information">Information</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
    <a href='/information'>aタグです</a>
  </nav> */}
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/information" element={<Information />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/auth" element={isAuthenticated ? <Navigate to="/contact" />: <Home/> } />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
  </>
  );
}
// App関数をエクスポートする処理
// indexe.jsに出力できる
export default App;
