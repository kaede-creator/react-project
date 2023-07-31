import './App.css';
import './css/index.css';
import './css/layout.css';
import './css/markDown.css';
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
import { motion } from 'framer-motion';
import Others from './pages/Others';
import ReactNote from './pages/ReactNote';
import ReactMarkDown from './pages/ReactMarkDown';

<link href="https://fonts.googleapis.com/earlyaccess/hannari.css" rel="stylesheet"></link>

function App() {
  const isAuthenticated = true

  return (<>
      <Routes>
      {/* Layoutファイルからリンクを呼び出し */}
      {/* Header */}
      {/* カレントのページの場合のcss付与 */}
        <Route element={<Layout />}>
          {/* <Route index element={<Home />} />  */}
          <Route path="/react-project" element={<Home />} />
          <Route path="/book-list" element={<BookList />} />
          <Route path="/react-note" element={<ReactNote />} />
          <Route path="/react-markDown" element={<ReactMarkDown />} />
          <Route path="/others" element={<Others  />} />
          <Route path="/auth" element={isAuthenticated ? <Navigate to="/contact" /> : <Home /> } />
          <Route path="/book-list" element={<BookList />}>
            <Route index element={<BookIndex/>} />
            <Route path=":id" element={<BookDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <BookList />
    </>);
}
// App関数をエクスポートする処理
// indexe.jsに出力できる
export default App;
