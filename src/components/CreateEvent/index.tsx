import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import { Container, Title, InputBox } from './styles';

export function CreateEvent() {
    const { register } = useForm();

    return (
        <Container>
            <Title>Nova turma</Title>
            <Input name="teste" register={register} placeholder="Nome" />
            <InputBox>
                <Input
                    type="time"
                    isTime
                    name="startHour"
                    register={register}
                    placeholder="Início"
                />
                <Input
                    type="time"
                    isTime
                    name="endHour"
                    register={register}
                    placeholder="Fim"
                />
            </InputBox>
        </Container>
    );
}
