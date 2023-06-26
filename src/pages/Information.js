import { useNavigate } from 'react-router-dom'

const Information = () => {
    const navigate = useNavigate()
    const goToContact = () => navigate('/contact')
    return (<>
    <h2>Informationです</h2>
    <button onClick={goToContact}>お問い合わせ</button>
        </>
        )
}

// 他のファイルでも使えるようにしておく
export default Information
