import { useForm } from 'react-hook-form';
import { Button } from '../Button';
import { Input } from '../Input';
import { Select } from '../Select';
import { Container, Title, InputBox } from './styles';

export function CreateEvent() {
    const { register } = useForm();

    return (
        <Container>
            <Title>Nova turma</Title>
            <Input
                name="teste"
                register={register}
                placeholder="Nome"
                type="date"
            />
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
            <Input name="teste" register={register} placeholder="Nome" />
            <Select name="teste" register={register} placeholder="Nome" />
            <Button>CRIAR</Button>
        </Container>
    );
}
