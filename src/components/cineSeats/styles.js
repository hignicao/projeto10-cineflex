import styled from "styled-components";

export const CineSeatsContainer = styled.div`
	margin: 100px 20px 150px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	> p {
		font-weight: 400;
		font-size: 24px;
		line-height: 28px;
		letter-spacing: 0.04em;
		color: #293845;
	}
`;

export const SeatsNumberContainer = styled.div`
	max-width: 400px;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 15px;
	padding: 30px 0px;
`;

export const InputsContainer = styled.form`
	margin-top: 40px;
	max-width: 350px;
	width: 100%;
	display: flex;
	flex-direction: column;
	button {
		margin-top: 20px;
		align-self: center;
		width: 225px;
		height: 42px;
		border: none;
		background: #e8833a;
		border-radius: 3px;
		font-weight: 400;
		font-size: 14px;
		line-height: 21px;
		letter-spacing: 0.04em;
		color: #ffffff;
	}
	input {
		height: 51px;
		background: #ffffff;
		border: 1px solid #d5d5d5;
		border-radius: 3px;
		margin-top: 3px;
		margin-bottom: 15px;
		font-weight: 400;
		font-size: 16px;
		line-height: 21px;
		padding: 10px;
		outline: none;
		::placeholder {
			color: #afafaf;
		}
	}
	label {
		font-weight: 400;
		font-size: 16px;
		line-height: 21px;
	}
`;

export const FooterInfoContainer = styled.div`
	position: fixed;
	bottom: 0;
	height: 117px;
	width: 100%;
	padding: 10px;
	background: #dfe6ed;
	border: 1px solid #9eadba;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 15px;
	img {
		width: 64px;
		border: solid 8px white;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
		border-radius: 2px;
	}
	p {
		font-weight: 400;
		font-size: 24px;
		line-height: 30px;
		color: #293845;
	}
`;

export const BackButton = styled.button`
	width: 35px;
	height: 35px;
	position: fixed;
	top: 17px;
	left: 17px;
	z-index: 3;
	border: none;
	background: #e8833a;
	border-radius: 50%;
	font-weight: 400;
	font-size: 22px;
	color: #ffffff;
	cursor: pointer;
`;

export const Loading = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.lds-ring {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;
	}
	.lds-ring div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 64px;
		height: 64px;
		margin: 8px;
		border: 8px solid #fff;
		border-radius: 50%;
		animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: #e8833a transparent transparent transparent;
	}
	.lds-ring div:nth-child(1) {
		animation-delay: -0.45s;
	}
	.lds-ring div:nth-child(2) {
		animation-delay: -0.3s;
	}
	.lds-ring div:nth-child(3) {
		animation-delay: -0.15s;
	}
	@keyframes lds-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	p {
		margin-top: 20px;
		color: #e8833a;
	}
`;
