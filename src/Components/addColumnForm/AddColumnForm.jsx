import { useState } from "react";
import styled from "styled-components";
import "./AddColumnForm.css"
import { ReactComponent as AcceptIcon } from '../../icons/submit-icon.svg';


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
		 width:100px
	 }
`
const Title = styled.button`
	color: white;
	background-color: #00000069;
	cursor: pointer;
	border: 0;
  margin: 0;
  width: 100%;
	display: flex;
	justify-content: center;
  font-size: 18px;
  font-weight: 500;
	@media (max-width: 768px) {
		 font-size:11px
	 }
`

const AddContainer = styled.div`
	overflow: hidden;
	display: flex;
	flex-direction: row;
	background: #00000026;
	
	@media (max-width: 1168px) {
		flex-direction: column;
	 }

`
const Header = styled.input`
	outline-width: 0;
  display: flex;
  flex-direction: column;
  border: none;
	font-size: 14px;
`

const SubmitBtn = styled.button`
display: flex;
align-items: center;
border: 0;
  background: #0000009e;
  color: white;
	width: 100%;
  cursor: pointer;
	min-width: 25px;
	
	svg {
		width:100%
	}
	@media (max-width: 1168px) {
		svg {
			height:20px
		}
	 }
	
`

const AddColumnForm = ({ onAddColumn }) => {

	const [title, setTitle] = useState('')
	const [isEdit, setIsEdit] = useState(false)
	const handler = (callback) => (event) => {
		callback(event.target.value)
	}

	const save = () => {
		setIsEdit(false)
		onAddColumn(title)
		setTitle('')
	}
	const open = () => {
		setIsEdit(!isEdit)
	}

	return (
		<Container className="Add-col-cont">
			<Title className={"Title" + (isEdit ? " showTitle" : '')} onClick={open}>Add a collumn</Title>
			<AddContainer className={"form" + (isEdit ? " show" : '')}>
				<Header placeholder="Column Title" type="text" onChange={handler(setTitle)} value={title} />
				<SubmitBtn onClick={save}><AcceptIcon className="AcceptIcon" /></SubmitBtn>
			</AddContainer>
		</Container>
	)
}

export default AddColumnForm