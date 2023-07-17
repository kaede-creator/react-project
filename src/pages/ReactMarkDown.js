import { Link } from 'react-router-dom'
import MarkdownEditor from './ReactMarkDownEditor';

const ReactMarkDown = () => {

  return (<>
  <h1>Reactでマークダウンエディタ作成</h1>
  <p>https://zenn.dev/rinka/articles/b260e200cb5258 の記事を参考にマークダウンを作っていく</p>
  <h2>用意する材料</h2>
  <ul>
    <li>ReactHookの一つ、「useState」</li>
    <li>入力パーツ</li>
   </ul>
   
   <h2>レシピ</h2>
   <p>「npm install --save react-simplemde-editor easymde marked highlight.js dompurify」をインストールする</p>
   <span>
    解説：
    「--save」オプション…npm ver.5 以前に使われていたインストール方法で、「dependencies」 にパッケージを追加したい時に使っていたコマンド。
    現在だと「npm install」の デフォルトでdependenciesにパッケージが追加されるようになっている。
    私が使っているのはver.8なので不要。今回は削除します。
    「dependencies」…本番用にインストールするパッケージを追加する場所。

    「react-simplemde-editor」…今回欲しいマークダウンのプラグイン。
    「easymde」…こちらもマークダウン エディターのようです。「react-simplemde-editor」と何が違うんでしょう？
    https://www.npmjs.com/package/react-simplemde-editorを見ると「React SimpleMDE (EasyMDE)」と書かれています。
    さらにこちらの記事https://qiita.com/t_okkan/items/0a3318f90ee6c4468f82を見つけました。
    npmでマークダウンを使う場合、もともとは「SimpleMDE」というプラグインを使っていたけども、フォーク（ソフトウェアのコードをもとに新たな開発を行うこと）された「EasyMDE」が使われるようになったんですね。
    そして「EasyMDE」の欲しい機能・部品をReact用にを扱える「react-simplemde-editor」というものがあるので、それを使っていきましょうということですね。
    また、インストール時は「npm install --save react-simplemde-editor easymde」でワンセットとしているので、忘れないようにしたいですね。
    marked…マークダウン形式の文字列をHTMLに変換してくれるライブラリ。

    wrapper…関数やクラス、ライブラリなどをつつむクッションで、関数を包み込む外側の関数を作って、中の関数を隠すような構造になります。ハードウェアやOSに依存する部分の関数にラッパーを使うと移植性や流用性が高まり、仕様変更がしやすくなります。
    コンポーネント…Reactで画面に表示される部品のこと。

    highlight.js…名前の通り、ハイライトを付けてくれるjsです。コードの部分などに色を付けて、判別しやすくできます。
    「dompurify」…こちらもパッケージ。複数のパッケージを同時にインストールできるのは便利ですね。読み方は何でしょう？グーグル翻訳だとドムピュアファイって聞こえるけどリスニングできているかな…？
    https://www.npmjs.com/package/dompurifyを参照すると、
    「DOMPurify は HTML をサニタイズし、XSS 攻撃を防ぎます。汚い HTML でいっぱいの文字列を DOMPurify にフィードすると、(別途設定されていない限り) クリーンな HTML を含む文字列が返されます。DOMPurify は危険な HTML を含むものをすべて削除し、XSS 攻撃やその他の厄介な行為を防ぎます。それもめちゃくちゃ速いです。ブラウザーが提供するテクノロジーを使用して、XSS フィルターに変換します。ブラウザが高速であればあるほど、DOMPurify も高速になります。」と
    書かれています。サニタイズとはサイバー攻撃につながるような文字を無効化すること。マークダウンを入れるにあたって「dompurify」でセキュリティ面を確保しようということですね。
   </span>
   <p>
   「npm install  react-simplemde-editor easymde marked highlight.js dompurify」を実行し、問題なくインストールされたようです。
   added 12 packages, and audited 1537 packages in 14s

228 packages are looking for funding
  run `npm fund` for details

13 vulnerabilities (4 moderate, 9 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
   </p>
   <p>

   </p>
   <MarkdownEditor />
  </>)
}


export default ReactMarkDown