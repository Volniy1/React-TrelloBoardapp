import { useState } from "react";
import styled from "styled-components";
import "./AddColumnForm.css"


const Container = styled.div`
display: flex;
flex-direction: column;
user-select: none;

width: 220px;
border: none;
`
const Title = styled.button`
	color: white;
	background-color: #00000069;
	cursor: pointer;
	border: 0;
  margin: 0;
  width: 100%;
	display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
`

const AddContainer = styled.div`
	overflow: hidden;
	display: flex;
	flex-direction: column;
	background: #00000026;
`
const Header = styled.input`
	outline-width: 0;
  display: flex;
  flex-direction: column;
  border: none;
	font-size: 14px;
`

const SubmitBtn = styled.button`
	border: 0;
  background: #0000009e;
  color: white;
  cursor: pointer;
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
		<Container>
			<Title className={"Title" + (isEdit ? " showTitle" : '')} onClick={open}>Add a collumn</Title>
			<AddContainer className={"form" + (isEdit ? " show" : '')}>
				<Header placeholder="Column Title" type="text" onChange={handler(setTitle)} value={title} />
				<SubmitBtn onClick={save}>Submit</SubmitBtn>
			</AddContainer>
		</Container>
	)
}

export default AddColumnForm