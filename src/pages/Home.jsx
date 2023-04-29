import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import AddForm from '../components/AddForm';
import WorkingToDos from '../components/WorkingToDos';
import DoneToDos from '../components/DoneToDos';

function Home() {
    return (
        <Main>
            <Container>
                <Navbar />
                <AddForm />
                <WorkingToDos />
                <DoneToDos />
            </Container>
        </Main>
    )
}

export default Home;

const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    max-width: 1200px;
    min-width: 800px;
    display: flex;
    flex-direction: column;
`