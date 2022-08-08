import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container, Loading } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    isLoading?: boolean;
    variant?: 'default' | 'delete';
}

export function Button({ isLoading, children, ...rest }: ButtonProps) {
    return (
        <Container isLoading={isLoading} {...rest}>
            {isLoading ? <Loading /> : children}
        </Container>
    );
}
