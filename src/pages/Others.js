import { Outlet } from 'react-router-dom'

const Others= () => {

  return (<>
    <Outlet />
    <div className='others_wrap'>
      <p>その他のreactで制作したアプリケーションは以下の通りです。</p>
      <ul className='my-4'>
        <li className='my-2'>
          <a href="/section5/dogApi.html">犬の画像取得API</a>
        </li>
        <li className='my-2'>
          <a href="/section4/toDo.html">項目追加</a>
        </li>
        <li className='my-2'>
          <a href="/section5/useEffect.html">カウントアップ</a>
        </li>
      </ul>
    </div>
  </>)
}

export default Others
