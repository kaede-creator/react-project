// defaultでのエクスポートをしていないので、関数をそれぞれ指定してあげる必要がある
import { getItems, getItem } from '../functions/item'

const GetItemComponent = () => {
    // 改めて変数に代入
    const items = getItems();
    const item = getItem(2);
    // jsx上で表示する
    return (<>
    <ul>
        {/* オブジェクト(items)をmapで配列として取り出す */}
        {/* javaScriptのES6以降ではmapメソッドを用いることでスマートに配列処理を行うことができます。 */}
        { items.map( item => (
            <li key={item.id}>{item.name}</li>
        ))}
        </ul>
        {/* getItem(2);側の情報が取り出される */}
        { item.name }
        </>)
}

// 他のファイルでも使えるようにしておく
export default GetItemComponent
