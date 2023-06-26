import './App.css';
import TestComponent from './compornets/TestComponent';
import GetItemComponent from './compornets/GetItemComponent'

function App() {
  return (
    <div className="App">
      {/* コンポーネントの表示↓ */}
      <TestComponent/>
      <GetItemComponent/>
      <header className="App-header">
        <p>
          Reeactテスト中です
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a>
      </header>
    </div>
  );
}
// App関数をエクスポートする処理
// indexe.jsに出力できる
export default App;
