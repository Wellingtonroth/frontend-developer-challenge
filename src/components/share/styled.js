import styled from 'styled-components'

export const Section = styled.section`
    text-align: center;
    margin-bottom: 150px;
    color: #888888;
`;

export const Title = styled.h1`
    font-weight: 700;
    font-size: 1.125rem;
`;

export const Text = styled.div`
    font-size: 0.875rem;
    padding-bottom: 39px;
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    text-align: left;
    padding-bottom: 50px;

    @media (max-width: 767px) {
        align-items: center;
        flex-direction: column;
	}
`;

export const Type = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;

    @media (min-width: 768px) {
        &:first-child {
            margin-right: 40px;
            padding-bottom: 8px;
        }
    }

    @media (max-width: 768px) {
        &:first-child {
            padding-bottom: 8px;
        }
    }
`;

export const Input = styled.input`
    margin-top: 7px;
    width: 340px;
    height: 30px;

    @media (max-width: 767px) {
        width: 280px;
	}
`;

export const Send = styled.div`
	align-items: center;
	justify-content: center;
	display: flex;
`;
export const Button = styled.button`
	padding: 11px 85px;
	color: #888888;
	border: 1px solid #707070;
	border-radius: 4px;
	cursor: pointer;
`;