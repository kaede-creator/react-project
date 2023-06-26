// useStateを呼び出す↓
import styled from "styled-components";


const StyledComponent = () =>{
    return (<>
        <Wrapper>
        <Title>スタイルコンポーネントです</Title>
        </Wrapper>
        </>
    )
}


const Wrapper = styled.div`
        border: 1px solid red;
        `

const BaseTitle = styled.h1`
    color: blue;
    `
// 変数BaseTitleに入っているcssを継承することができる↓
// 共通部分の中で一か所だけ変えたいときに使うとよい
const Title = styled(BaseTitle)`
    background-color:lightgray;
`

// 他のファイルでも使えるようにしておく
export default StyledComponent