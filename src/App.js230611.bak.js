import './App.css';
import './css/index.css';
import TestComponent from './compornets/TestComponent';
import GetItemComponent from './compornets/GetItemComponent';
import StyledComponent from './compornets/StyledComponent';
import Home from './pages/Home';
import Information from './pages/Information';
import Contact from './pages/Conttact';
import NotFound from './pages/NotFound';
import Layout from './Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import BookIndex from './pages/BookIndex';
import BookList from './pages/BookList';
import BookDetail from './pages/BookDetail';
import MotionIndex from './motion/index';

function App() {
  const isAuthenticated = true

  return (<>
      {/*<nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/information">Information</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
  <a href="information">aタグです</a>*/}
  <MotionIndex />
   <div className="border border-gray-400 rounded-2xl p-2 m-2 flex justify-around items-center">
      <h1 className="text-3xl font-bold underline">
        Hello Tailwind CSS!
      </h1>
      <p className="m-0 text-gray-400">Tailwind CSSです</p>
      <button className="bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white">ボタン</button>
    </div>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="/information" element={<Information />} />
          <Route path="/contact" element={<Contact  />} />
          <Route path="/auth" element={isAuthenticated ? <Navigate to="/contact" /> : <Home /> } />
          <Route path="/book-list" element={<BookList />}>
            <Route index element={<BookIndex/>} />
            <Route path=":id" element={<BookDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>);
}
// App関数をエクスポートする処理
// indexe.jsに出力できる
export default App;
