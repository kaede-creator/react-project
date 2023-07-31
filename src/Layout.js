import { NavLink, Outlet } from "react-router-dom"

const Layout = () =>{
    return(
        <>
        <header>
            <nav className="pc_nav">
                <ul className="flex justify-between">
                <li><NavLink to="/react-project">Top</NavLink></li>
                <li><NavLink to="/book-list">Books</NavLink></li>
                {/* <li><NavLink to="/react-note">Note</NavLink></li> */}
                <li><NavLink to="/react-markDown">ReactMarkDown</NavLink></li>
                <li><NavLink to="/others">Others</NavLink></li>
                </ul>
            </nav>
            <nav className="sp_nav">
                <ul className="flex justify-between">
                <li><NavLink to="/react-project">Top</NavLink></li>
                <li><NavLink to="/book-list">Books</NavLink></li>
                {/* <li><NavLink to="/react-note">Note</NavLink></li> */}
                <li><NavLink to="/react-markDown">ReactMarkDown</NavLink></li>
                <li><NavLink to="/others">Others</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
        <Outlet/>
        </main>
        <footer>
            <nav>
                <ul className="flex justify-between">
                <li><NavLink to="/react-project">Top</NavLink></li>
                <li><NavLink to="/book-list">Books</NavLink></li>
                {/* <li><NavLink to="/react-note">Note</NavLink></li> */}
                <li><NavLink to="/react-markDown">ReactMarkDown</NavLink></li>
                <li><NavLink to="/others">Others</NavLink></li>
                </ul>
            </nav>
        </footer>
        </>
        )
}
export default Layout