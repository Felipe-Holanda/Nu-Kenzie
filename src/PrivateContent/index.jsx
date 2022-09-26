import Header from "./Header";
import Form from "./Form";
import TotalMoney from "./TotalMoney";
import List from "./List";
import Cards from "./Cards";

export default function PrivateContent() {
    return (
        <div>
            <Header />
            <div>
                <Form />
                <TotalMoney />
            </div>
            <List>
                <Cards />
            </List>
        </div>
    )
}