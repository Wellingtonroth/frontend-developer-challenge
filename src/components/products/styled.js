import styled from 'styled-components'

export const Section = styled.section`
	padding: 48px 0 164px 0;
`;

export const Title = styled.h1`
	text-align: center;
	padding-bottom: 50px;
	font-size: 1.125rem;
	color: #888888;
	margin: 0;
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	width: 64%;
	margin: auto;
`;

export const Box = styled.div`
	width: 20%;
	margin-bottom: 40px;
	margin-right: 41px;

	&:nth-child(4n) {
		margin-right: 7px;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 150px;
	border: 1px solid #707070;
	margin-bottom: 14px;
`;

export const Information = styled.div`
	color: #888888;
`;

export const Product = styled.div`
	font-size: 0.875rem;
	margin-bottom: 10px;
`;

export const Description = styled.div`
	font-size: 0.75rem;
	margin-bottom: 6px;
`;

export const OldPrice = styled.div`
	font-size: 0.75rem;
	margin-bottom: 6px;
`;

export const NewPrice = styled.div`
	font-weight: 700;
	margin-bottom: 7px;
`;

export const Split = styled.div`
	font-size: 0.75rem;
	margin-bottom: 10px;
`;

export const Buy = styled.button`
	width: 100%;
	padding: 6px 68px;
	color: #888888;
	border: 1px solid #707070;
	border-radius: 4px;
	cursor: pointer;
`;

export const BoxMore = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const More = styled.button`
	padding: 11px 36px;
	color: #888888;
	border: 1px solid #707070;
	border-radius: 4px;
	cursor: pointer;
`;