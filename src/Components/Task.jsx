import React from "react";
import { Draggable } from "react-beautiful-dnd";
import '../App.css'
import styled from 'styled-components';
import { ReactComponent as EditIcon } from '../icons/edit-icon.svg';

const Container = styled.div`
	display: block;
	min-height: 100px;
	box-shadow: 0px 2px 0px #00000060;
	@media (max-width: 768px) {
	min-height: 50px;
		 font-size:12px
	 }
`
const Header = styled.div`
	font-weight: 700;
	gap: 10px;
	display: flex; 
	justify-content: space-between;
`
const Content = styled.div`
	margin: 10px 0;
	overflow: hidden;
  max-height: 100px;
`

const ChangeBtn = styled.button`
	border: none;
	user-select: none;
	cursor: pointer;
	background: none;
	width:30px;
	height: 20px;
	min-width: fit-content;
	color: #000000;
	
`


const Task = ({ task, index, onTaskEdit, onDoubleClick }) => (
	<Draggable draggableId={task.id} index={index}>
		{(provided, snapshot) => (
			<Container
				className="TaskWrapper"
				{...provided.draggableProps}
				{...provided.dragHandleProps}
				ref={provided.innerRef}
				isDragging={snapshot.isDragging}
				onDoubleClick={onDoubleClick}
			>
				<Header className="TaskHeader" >
					{task.header}
					<ChangeBtn className="ChangeBtn" onClick={onTaskEdit}>
						<EditIcon />
					</ChangeBtn>
				</Header>
				<Content>
					{task.content}
				</Content>
			</Container>
		)}
	</Draggable >
)

export default Task