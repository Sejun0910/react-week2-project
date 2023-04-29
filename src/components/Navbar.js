import React from 'react'
import styled from 'styled-components'

function Navbar() {
    return (
        <Header>
            <div>My Todo List</div>
            <div>React</div>
        </Header>
    )
}

export default Navbar;

const Header = styled.div`
    border: 1px solid #d35e00;
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin: 10px 0px 10px 0px;
`