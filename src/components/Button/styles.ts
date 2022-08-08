import styled from '@emotion/styled';

interface ContainerProps {
    isLoading?: boolean;
}
export const Container = styled.button<ContainerProps>`
    all: unset;

    cursor: pointer;

    max-width: 312px;
    max-height: 48px;

    border: ${props => (props.isLoading ? 'none' : '1px solid var(--green)')};
    border-radius: 8px;

    padding: 8px;

    transition: 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-weight: 700;
        font-size: 16px;
        color: var(--white);
    }
`;

export const Loading = styled.div`
    width: 16px;
    height: 16px;

    border: 3px solid var(--white);
    border-top: 3px solid var(--white);
    border-right: 3px solid var(--primaryGray);
    border-radius: 50%;

    margin: 0 auto;
    animation: loading 0.5s linear infinite;
`;
