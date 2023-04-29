import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components'

function Detail() {

    const todos = useSelector((state)=>{
        return state.todos.todos
    })

    const navigate = useNavigate()

    const params = useParams()

    const foundData = todos.find((item)=> {
    return item.id === params.id || item.id === parseInt(params.id, 10)
    })

    return (
        <Main>
            <Box>
                <Head>
                    <h4>ID : {foundData.id} </h4>
                    <BackBtn onClick={()=>{navigate('/')}}>뒤로가기</BackBtn>
                </Head>
                <Body>
                    <h2>{foundData.name}</h2>
                    <h3>{foundData.content}</h3>
                </Body>
            </Box>
        </Main>
    )
}

export default Detail;

const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Box = styled.div`
    width: 500px;
    height: 250px;
    border: 1px solid #d35e00;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 50px;
`
const Head = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Body = styled.div`
    justify-content: space-between;
`

const BackBtn = styled.button`
    border: 2px solid #ffc87a;
    height: 40px;
    width: 120px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    cursor: pointer;
`