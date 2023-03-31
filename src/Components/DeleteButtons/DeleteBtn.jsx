import styled from "styled-components";

const DeleteBtnForm = styled.button`
	border: none;
	user-select: none;
	cursor: pointer;
	background-color: #00000081;
	height: 20px;
	min-width: fit-content;
	color: white;
`


function DeleteBtn({ DeleteSmth }) {



	return (
		<DeleteBtnForm onClick={DeleteSmth}>
			Delete
		</DeleteBtnForm>
	)
}

export default DeleteBtn