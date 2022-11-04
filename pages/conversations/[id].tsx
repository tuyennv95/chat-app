import Head from "next/head"
import styled from "styled-components"
import Sidebar from "../../components/Sidebar"

const StyledContainer = styled.div`
    display:flex;
`
const Conversation = () => {
  return (
    <StyledContainer>
        <Head>
            <title>Conversation with Tui</title>
        </Head>

        <Sidebar/>
        <h1>hahahah</h1>
    </StyledContainer>
  )
}

export default Conversation