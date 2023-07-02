const Home = () => {
    
    return (<>
    <div className="top_wrap">
        <h1 className="mb-8 text-3xl">welcome !!</h1>
        <p>こちらは今野楓のポートフォリオサイトです。</p>
        <p>実務ではReactを扱わないので、個人開発でReactを用いたアプリケーションをこちらに公開しています。</p>

        <div className="mt-8 top_sub_wrap">
            <h2 className="">そのほか、利用しているもの</h2>
            <ul className="list-disc my-4">
                <li className="my-2">Tailwind.css（CSS）</li>
                <li className="my-2"><a href="https://github.com/kaede-creator/react-project" target="_blank">GitHub（ソースコード管理）</a></li>
                <li className="my-2">VSCode（コーディング、GitHubへのcomit・pushなど）</li>
            </ul>
        </div>
    </div>
    </>
    )
}

// 他のファイルでも使えるようにしておく
export default Home
