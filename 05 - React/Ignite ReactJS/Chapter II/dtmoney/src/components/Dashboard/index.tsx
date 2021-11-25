import { Summary } from "../Summary";
import { TransationsTable } from "../TransationsTable";
import { Container } from "./style";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransationsTable />
        </Container>
    );
}