import styled from '@emotion/styled';

interface ContainerProps {
    isTime?: boolean;
}

export const Container = styled.div<ContainerProps>`
    max-width: ${props => (props.isTime ? '148px' : '312px')};
    max-height: 48px;

    background: var(--primaryGray);
    border-radius: 8px;
    padding: 8px 24px;
`;

export const InputBase = styled.input`
    all: unset;

    width: 100%;
    height: 100%;

    &::placeholder {
        color: var(--gray);
    }
`;
