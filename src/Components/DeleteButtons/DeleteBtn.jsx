function DeleteBtn({ DeleteSmth, Class, children }) {
	return (
		<button onClick={DeleteSmth} className={Class}>
			{children}
		</button>
	)
}

export default DeleteBtn