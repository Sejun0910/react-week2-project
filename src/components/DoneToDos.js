import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, togleTodo } from '../redux/modules/todos'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


function DoneToDos() {
    const todos = useSelector((state) => {
        return state.todos.todos
    })

    const dispatch = useDispatch()

    const DeleteBtn = (id) => {
        const newtodo = todos.filter(item => item.id !== id)
        dispatch(deleteTodo(newtodo))
    }

    const TogleBtn = (id) => {
        const newtodo = todos.map(item =>
            item.id === id ? { ...item, inSuccess : !item.inSuccess} : item)
            dispatch(togleTodo(newtodo));
    }

    const doneTodo = todos.filter(item => item.inSuccess)

    return (
        <>
    <DoneName>Done 🐶</DoneName>
        <ToDoListLine>
            {doneTodo.map((item) => (
            <ToDoListBox key={item.id} >
            <div>
                <Link to={`/detail/${item.id}`}>상세보기</Link>
                <h2>{item.name}</h2>
                <div>{item.content}</div> 
            </div>
                <ToDoListButton>
                    <DeleteButton onClick={() => DeleteBtn(item.id)}
                    >삭제하기</DeleteButton>
                    <CancleBtn onClick={() => TogleBtn(item.id)}
                    >취소</CancleBtn>
                </ToDoListButton>
            </ToDoListBox>
    ))}
        </ToDoListLine>
    </>
    )
}

export default DoneToDos

const DoneName = styled.div`
    padding: 20px 0px 20px 0px;
    font-size: 30px;
    font-weight: 700;
`;

const ToDoListLine = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

const ToDoListBox = styled.div`
    border: 4px solid #d35e00;
    border-radius: 12px;
    padding: 12px 24px 24px;
    width: 270px;
`;

const ToDoListButton = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 25px;
`;

const DeleteButton = styled.button`
    background-color: #a94b00;
    height: 40px;
    width: 130px;
    border: none;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 600;
    color: #ffffff;
`;

const CancleBtn = styled.button`
    background-color: #ffc87a;
    height: 40px;
    width: 130px;
    border: none;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 600;
    color: #ffffff;
`;