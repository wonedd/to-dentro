import { Container, Content } from '../../shared/pages/home.styles';
import { CreateEvent } from '../components/CreateEvent';

export default function Home() {
    return (
        <Container>
            <Content>
                <CreateEvent />
            </Content>
        </Container>
    );
}
