import styled from "styled-components";

import '../App.css'
import OutsideClicker from "./Hooks/useOutsideClick";

const PopUpWrapper = styled.div`
	 position: absolute;
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
const LoginFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
		background-color: white;
		width: fit-content;
    padding: 77px 55px 33px;
		height: 500px;
		border-radius: 10px;
		box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);;
	margin-top: 50px;
	`


const LoginForm = styled.div`
	display: grid;
	width: 350px;
	gap: 45px;
	
	`

const LoginHeader = styled.h1`
    text-align: center;
    font-size: 33px;
    font-weight: 700;
    color: #404040;
    padding-bottom: 40px;
		margin: 0;
		
		`

const LogPasForm = styled.input`
	  display: flex;
    flex-direction: column;
		border: none;
		border-bottom: 1px solid black;
		width: 100%;
		
		font-size: 18px;
		`
const LoginButton = styled.div`
			display: flex;
			align-items: center;
			place-content: center;
			transition: background 0.2s ease;
			background: #000000c5;
			color: white;
			border: none;
			border-radius: 10px;

			width: 100%;
			height: 50px;

			margin-top: 30px;

			user-select: none;
			font-size: 18px;
		`

const SignUpSuggestion = styled.div`
	  display: flex;
    flex-direction: column;
    align-items: center;
		user-select: none;
		color: #404040;
		`
const SignUpText = styled.span`
	color: black;
`

function LoginPopUp() {

	function HideForm(evt) {
		window.open(`/`)
		// document.getElementById("log-in-pop-up").style.height = "0vh";
		// document.getElementById("log-in-pop-up").style.opacity = "0";
	}

	function handleSignUp() {
		document.getElementById("log-in-pop-up").style.height = "0vh";
		document.getElementById("log-in-pop-up").style.opacity = "0";
		document.getElementById("sign-up-pop-up").style.height = "100vh";
		document.getElementById("sign-up-pop-up").style.opacity = "1";
	}




	return (
		<PopUpWrapper className="Pop-up-wrapper" id="log-in-pop-up">
			<OutsideClicker>
				<LoginFormWrapper>
					<LoginForm>
						<LoginHeader >
							Welcome
						</LoginHeader>
						<div>
							<span>Email</span>
							<LogPasForm className="Input-log-pass" />
						</div>
						<div >
							<span>Password</span>
							<LogPasForm className="Input-log-pass" type='password' />
						</div>
						<div>
							<div>
								<div></div>
								<LoginButton className="Login-btn" onClick={HideForm}>LOGIN</LoginButton>
							</div>
						</div>
					</LoginForm>
					<SignUpSuggestion>
						<span>
							Don’t have an account?
						</span>
						<SignUpText className="SignUpLink" onClick={handleSignUp}>
							Sign Up
						</SignUpText>
					</SignUpSuggestion>
				</LoginFormWrapper>
			</OutsideClicker>
		</PopUpWrapper>
	)
}

export default LoginPopUp