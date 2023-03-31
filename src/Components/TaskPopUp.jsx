import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";

import '../App.css'
import DeleteBtn from "./DeleteButtons/DeleteBtn";
import { setState } from "./store/kanban/kanban";

const Main = styled.div`
	position: fixed;
	 transition: opacity 0.2s ease-in-out;
	 overflow: hidden;
	 z-index: 1;
	 opacity: 0;
	 height: 0;
	 background-color: #0000009a;
	 width: 100%;
	 display: flex;
	 justify-content: center;
`
const TaskBox = styled.div`
	gap: 10px;
		display: flex;
    flex-direction: column;
    background-color: white;
    width: fit-content;
    padding: 33px 16px 16px;
		min-width: 50%;
    min-height: 30%;
    height: fit-content;
    border-radius: 10px;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
    margin-top: 50px;
	
`
const Header = styled.input`
	font-size: 24px;
	border: none;
`
const Content = styled.textarea`
	word-wrap: break-word;
	border: none;
	font-size: 18px;
	resize: none;
	min-height: 140px;
	max-height: 50vh;
	
	

`
const SubmitButton = styled.button`
	border: none;
  background-color: whitesmoke;
  cursor: pointer;
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
`
const ButtonContainer = styled.div`
	display: flex;
`
const HeaderTitle = styled.div`
	justify-content: space-between;
  display: flex;
	color: gray;
	font-size: 20px;
	font-weight: 600;
`


function TaskPopUp({ id = '', header = '', content = '', onDeleteTask }) {
	// const [isEditText, setIsEditText] = useState('change')
	const [isEdit, setIsEdit] = useState(false)
	const [taskHeader, setTaskHeader] = useState(header)
	const [taskContent, setTaskContent] = useState(content)

	const state = useSelector(state => state.kanban)
	const dispatch = useDispatch()



	const handlerHeader = (callback) => (event) => {
		callback(event.target.value)
	}
	const handlerContent = (callback) => (event) => {
		callback(event.target.value)
	}

	const handleEdit = (callback) => () => {
		callback(!isEdit)
		if (isEdit === false) {
			setTaskHeader(header)
			setTaskContent(content)
			// setIsEditText('reset')
		}
		// else (setIsEditText('change'))
	}
	const handleLeave = (callback) => () => {
		callback(false)
		setTaskHeader(header)
		setTaskContent(content)
		// setIsEditText('change')

	}


	const handleSubmit = (taskHeader, taskContent) => () => {
		if (isEdit === false) {
			taskHeader = header
			taskContent = content
		} else if (!taskHeader) {
			taskHeader = header
		}
		const taskData = {
			id,
			header: taskHeader,
			content: taskContent,
		}
		console.log(taskData);
		const newState = {
			...state,
			tasks: {
				...state.tasks,
				[id]: taskData,
			},

		}
		console.log(newState);
		document.getElementById('task-pop-up').style.height = "0";
		document.getElementById('task-pop-up').style.opacity = "0";
		setIsEdit(false)
		dispatch(setState(newState))

	}
	const handleKeyDown = (submitTask, closeTask, deleteTask) => (e) => {
		if (e.key === 'Enter') {
			submitTask()
		} else if (e.key === 'Escape') {
			console.log('exit');
			closeTask()
		} else if (e.key === 'Delete') {
			console.log('delete');
			deleteTask()
		} else return

	}

	return (
		<Main
			id='task-pop-up'
			onMouseEnter={handleEdit(setIsEdit)}
			onMouseLeave={handleLeave(setIsEdit)}
			onKeyDown={
				handleKeyDown(
					handleSubmit(taskHeader, taskContent),
					handleSubmit(header, content),
					onDeleteTask
				)
			}>
			<TaskBox>
				<Container>
					<HeaderTitle>Task:
						<DeleteBtn DeleteSmth={onDeleteTask}></DeleteBtn>
					</HeaderTitle>
					<Header className="Input-Title-Desc" value={isEdit ? taskHeader : header} onChange={handlerHeader(setTaskHeader)}></Header>
				</Container>
				<Container>
					<HeaderTitle>Description: </HeaderTitle>
					<Content className="Input-Title-Desc" value={isEdit ? taskContent : content} onChange={handlerContent(setTaskContent)}></Content>
				</Container>
				<ButtonContainer>
					<SubmitButton onClick={handleSubmit(taskHeader, taskContent)}>Submit</SubmitButton>
				</ButtonContainer>
			</TaskBox>
		</Main>
	)
}

export default TaskPopUp