import { Link } from 'react-router-dom'
import MarkdownEditor from './ReactMarkDownEditor';

const ReactMarkDown = () => {

  return (<>
  <div className="markDown_wrap">
    <h1>Reactでマークダウンエディタ作成</h1>
    <MarkdownEditor />
    <p className="text">ひとまず形になりました！次回はデータベースへの保存処理を実装予定です！</p>
  </div>
  </>)
}


export default ReactMarkDown