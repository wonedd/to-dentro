import { InputHTMLAttributes, useEffect } from 'react';
import { FieldValues, UseFormRegister, useForm } from 'react-hook-form';
import { Container, InputBase } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    register: UseFormRegister<FieldValues>;
    initialValue?: InitialValue;
    isTime?: boolean;
}

type InitialValue = {
    fieldName: string;
    fieldValue: string;
};
export function Input({
    name,
    register,
    required,
    initialValue,
    isTime,
    ...rest
}: InputProps) {
    const { setValue } = useForm();

    useEffect(() => {
        if (initialValue) {
            setValue(initialValue.fieldName, initialValue.fieldValue);
        }
    }, [initialValue, setValue]);
    return (
        <Container isTime={isTime}>
            <InputBase {...register(name, { required })} {...rest} />
        </Container>
    );
}
