import './nav.css'



function Nav() {
	const handleOnLogClick = () => {
		document.getElementById("log-in-pop-up").style.height = "100vh";
		document.getElementById("log-in-pop-up").style.opacity = "1";
	}
	const handleOnRegClick = () => {
		document.getElementById("sign-up-pop-up").style.opacity = "1";
		document.getElementById("sign-up-pop-up").style.height = "100vh";
	}
	return (
		<div className="nav">
			<title className="title">Moy-Kanban</title>
			<div className="btn-form">
				<input type="button" className="login-btn" value={'Log In'} onClick={handleOnLogClick} />
				<input type="button" className="sign-btn" value={'Sign Up'} onClick={handleOnRegClick} />
			</div>
		</div>
	)
}

export default Nav;