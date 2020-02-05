import styled from 'styled-components'

export const Section = styled.section`
	text-align: center;
	padding: 60px 0 40px 0;
	background-color: #707070;
	color: #ffffff;
`;

export const Title = styled.h1`
	margin: 0;
	font-weight: 400;
	font-size: 1.25rem;
`;

export const SubTitle = styled.h2`
	margin: 0 0 5px 0;
	font-size: 2.5rem;
`;

export const Text = styled.p`
	margin-bottom: 0;
	font-size: 0.875rem;
`;

export const Content = styled.ul`
	display: flex;
	justify-content: center;
	padding: 0;
	list-style-type: none;
`;

export const Box = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 160px;
	height: 40px;
	text-align: center;
	background-color: #ffffff;
	box-shadow: 0px 1px 6px #00000029;
	border: 1px solid #707070;
	border-radius: 4px;
	margin-top: 50px;
	font-size: 0.875rem;
	color: #888888;
	cursor: pointer;

	&:not(:last-child) {
		margin-right: 40px;
	}
`;