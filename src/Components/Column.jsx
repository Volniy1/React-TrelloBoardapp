import React, { useState } from "react"
import { Droppable, Draggable } from "react-beautiful-dnd"
import '../App.css'

import { ReactComponent as Icon } from '../icons/three-dots.svg';

import styled from 'styled-components';
import AddCardForm from "./AddCardForm/AddCardForm";
import DeleteBtn from "./DeleteButtons/DeleteBtn";


const Container = styled.div`
	 display: flex;
	 flex-direction: column;
	 user-select: none;
	 width: 220px;
	 border: none;


	
	 @media (max-width: 1168px) {
		 width:150px
		}
		@media (max-width: 768px) {
			width:120px;
		}
		`
const TaskList = styled.div`
		padding: 22px 8px;
		 transition: background-color 0.2s ease;
		 background-color: ${({ isDraggingOver }) => (isDraggingOver ? 'rgba(255, 255, 255, 0.842)' : '#ffffff94;')};
		 ${props => (props.isDraggingOver ? 'rgb(191, 235, 255)' : 'inherit')};
		 flex-grow: 0;
		 padding-bottom: 20px;
		 border-bottom-left-radius: 5px;
		 border-bottom-right-radius: 5px;
		
		 @media (max-width: 1168px) {
				 padding-inline:0;
			 }
		 `
const Title = styled.p`
	align-self:center;
	padding: 0;
  margin: 0;
	@media (max-width: 768px) {
		 font-size:14px
	 }
`
const IconForm = styled.a`
	position:relative;
	display: flex;

	cursor: pointer;

	@media (max-width: 768px) {
			position:relative;
			}
`




const DropDownContext = styled.div`
	position: relative;
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
						className="Column-header"
						{...provided.dragHandleProps}
					>
						<DropDownContext className="div">
							<ul className="dropdown" id={`dropdown${index}`}>
								<DeleteBtn Class="delete-column-btn" DeleteSmth={onClickDeleteColumn}>Delete</DeleteBtn>
							</ul>
						</DropDownContext>
						<Title>
							{column.title}
						</Title>
						<IconForm onClick={DeleteDropDown}>
							<Icon className="EditIcon" alt="svg" />
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