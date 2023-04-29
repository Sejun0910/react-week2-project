import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'
import { addTodo } from '../redux/modules/todos';

function AddForm() {
    // 이름과 내용 입력 state
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    
    // uuid 라이브러리 사용해서 고유 id key값 만들기
    const uniqueId = () => uuidv4()

    // Redux
    const dispatch = useDispatch();

    // ToDoList 추가
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (name === "") {
            return alert("제목을 입력하세요.")
        }
        if (content === "") {
            return alert("내용을 입력하세요.")
        }

        dispatch(
            addTodo({
                id: uniqueId(),
                name,
                content,
                inSuccess: false,
            })
        )
        // 값을 입력하고 추가한 뒤에 입력한 input창의 값을 초기화
        setName('')
        setContent('')
    };

    return (
        <FormbarContainer>
            <form onSubmit={onSubmitHandler}>
                <FormbarContent>
                    <FrombarInput>
                        <label>제목</label>
                        <input
                            type='text'
                            value={name}
                            placeholder='제목을 입력하세요.'
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>내용</label>
                        <input
                            type='text'
                            value={content}
                            placeholder='내용을 입력하세요'
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </FrombarInput>
                    <button type='submit'>추가하기</button>
                </FormbarContent>
            </form>
        </FormbarContainer>
    )
}

export default AddForm

const FormbarContainer = styled.div`
    background-color: #d35e00;
    padding: 1.5rem;
    border-radius: 0.5rem;
    font-weight: bold;
`

const FormbarContent = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        background-color: #ffc87a;
        color: black;
        font-weight: bold;
        padding: 0.6rem 1rem;
        border-radius: 10px;
        border: none;
        :hover {
            cursor: pointer;
        }
    }
`

const FrombarInput = styled.div`
    display: flex;
    align-items: center;
    input {
        width: 15rem;
        padding: 0.7rem;
        border: none;
        border-radius: 10px;
    }
    label {
        margin: 0px 5px 0px 5px;
    }
    #content {
        margin-left: 2rem;
    }
`