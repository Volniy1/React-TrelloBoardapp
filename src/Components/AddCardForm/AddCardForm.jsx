import { useState } from "react"
import styled from "styled-components"

import './AddCard.css'

const InputBox = styled.input`
	border: none;
  width: 100%;
  outline-width: 0;
`

const Button = styled.button`
	border: none;
    background: #00000081;
    color: white;
    width: 100%;
		cursor: pointer;
`

function AddCardForm({ onAddCard }) {
	const [isEdit, setIsEdit] = useState(false)
	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')

	const handler = (callback) => (event) => {
		callback(event.target.value)
	}

	const save = () => {
		setIsEdit(false)
		onAddCard(title, desc)
		setTitle('')
		setDesc('')
	}

	return (
		<div className={"add-card-form" + (isEdit ? " showCardForm" : '')}>
			<button className="edit-btn" onClick={() => setIsEdit(!isEdit)}>Add Card</button>
			<div className={"form" + (isEdit ? " show" : '')}>
				<InputBox placeholder="Title" type="text" onChange={handler(setTitle)} value={title} />
				<InputBox placeholder="Content" type="text" onChange={handler(setDesc)} value={desc} />
				<Button onClick={save}>submit</Button>
			</div>
		</div>
	)
}

export default AddCardForm