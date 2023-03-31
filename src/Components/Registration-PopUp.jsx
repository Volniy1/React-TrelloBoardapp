import styled from "styled-components";

import '../App.css'

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
		height: 700px;
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
		user-select: none;
    align-items: center;
		color: #404040;
		`
const LogInSuggestion = styled.div`
	  display: flex;
    flex-direction: column;
		user-select: none;
    align-items: center;
		color: #404040;
		`

const SignUpLinks = styled.div`
	    list-style-type: none;
    display: flex;
    flex-direction: row;
		gap: 10px;
`

const Icon = styled.img`
	width: 50px;
`
const SignUpText = styled.span`
	color: black;
`


function RegistrationPopUp() {

	function HideForm() {
		window.open(`/`)
		// document.getElementById("sign-up-pop-up").style.height = "0vh";
		// document.getElementById("sign-up-pop-up").style.opacity = "0";
	}

	function handleLogIn() {
		document.getElementById("log-in-pop-up").style.height = "100vh";
		document.getElementById("log-in-pop-up").style.opacity = "1";
		document.getElementById("sign-up-pop-up").style.height = "0";
		document.getElementById("sign-up-pop-up").style.opacity = "0";
	}


	return (
		<PopUpWrapper className="Pop-up-wrapper" id="sign-up-pop-up">
			<LoginFormWrapper>
				<LoginForm>
					<LoginHeader >Registration</LoginHeader>
					<div>
						<span>Email</span>
						<LogPasForm className="Input-log-pass" />
					</div>
					<div >
						<span>Login</span>
						<LogPasForm className="Input-log-pass" />
					</div>
					<div >
						<span>Password</span>
						<LogPasForm className="Input-log-pass" type='password' />
					</div>
					<div>
						<div>
							<LoginButton className="Login-btn" onClick={HideForm}>SIGNUP</LoginButton>
						</div>
					</div>
				</LoginForm>
				<LogInSuggestion>
					<span>Have an accaunt already?</span>
					<SignUpText className="SignUpLink" onClick={handleLogIn}>Log In</SignUpText>
				</LogInSuggestion>
				<SignUpSuggestion>
					<span>Or Sign Up Using</span>
					<SignUpLinks>
						<a href="#Google">
							<Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="Google" />
						</a>
						<a href="#Odnoklassniki">
							<Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Odnoklassniki.svg/1200px-Odnoklassniki.svg.png" alt="Odnoklassniki" />
						</a>
						<a href="#Vkontakte">
							<Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/640px-VK_Compact_Logo_%282021-present%29.svg.png" alt="Vkontakte" />
						</a>
						<a href="#Instagramm">
							<Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagramm" />
						</a>
					</SignUpLinks>
				</SignUpSuggestion>
			</LoginFormWrapper>
		</PopUpWrapper>
	)
}

export default RegistrationPopUp