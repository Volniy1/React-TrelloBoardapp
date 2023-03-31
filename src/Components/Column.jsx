import React, { useState } from "react"
import { Droppable, Draggable } from "react-beautiful-dnd"
import '../App.css'


import styled from 'styled-components';
import AddCardForm from "./AddCardForm/AddCardForm";
import DeleteBtn from "./DeleteButtons/DeleteBtn";

const Container = styled.div`
  display: flex;
  flex-direction: column;
	user-select: none;
	
  width: 220px;
  border: none;
`
const TaskList = styled.div`
padding: 22px 8px;
 transition: background-color 0.2s ease;
 background-color: ${({ isDraggingOver }) => (isDraggingOver ? 'rgba(255, 255, 255, 0.842)' : '#ffffff94;')};
 /* ${props => (props.isDraggingOver ? 'rgb(191, 235, 255)' : 'inherit')}; */
 flex-grow: 0;
 padding-bottom: 20px;
 border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`

const Icon = styled.img`
	width: 20px;
    position: absolute;
    height: 25px;
`

const IconForm = styled.a`
	width: 0;
	display: flex;
		margin-left: 190px;
	cursor: pointer;
`

const DropDownContext = styled.div`
	position: absolute;
`

function Column({ column, children, index, onClickAddCard, onClickDeleteColumn }) {
	const [isDropDown, setIsDropDown] = useState(false)

	const DeleteDropDown = () => {
		if (!isDropDown) {
			document.getElementById(`dropdown${index}`).style.height = '20px'
			setIsDropDown(!isDropDown)
		} else {
			setIsDropDown(!isDropDown)
			document.getElementById(`dropdown${index}`).style.height = '0px'
		}
		console.log(isDropDown);
		return isDropDown

	}
	return (
		<Draggable draggableId={column.id} index={index}>
			{provided => (
				<Container
					className="ColumnWrapper"
					{...provided.draggableProps}
					ref={provided.innerRef}
				>
					<div
						className="Title"
						{...provided.dragHandleProps}
					>
						<DropDownContext className="div">
							<ul className="dropdown" id={`dropdown${index}`}>
								<DeleteBtn className="delete-column-btn" DeleteSmth={onClickDeleteColumn} />
							</ul>
						</DropDownContext>
						{column.title}
						<IconForm onClick={DeleteDropDown}>
							<Icon src="https://www.svgrepo.com/show/124304/three-dots.svg" alt="svg" />
						</IconForm>
					</div>
					<Droppable droppableId={column.id} type="task">
						{(provided, snapshot) => (
							<TaskList
								className="TaskListWrapper"
								ref={provided.innerRef}
								{...provided.droppableProps}
								isDraggingOver={+snapshot.isDraggingOver}
							>
								{children}
								{provided.placeholder}
								<AddCardForm onAddCard={onClickAddCard}></AddCardForm>
							</TaskList>
						)}
					</Droppable>
				</Container>
			)}
		</Draggable>
	)
}


export default Column