export default function Cards() {
    return (
        <li>
            <span className="income"></span>
            <div>
                <h4>TEF Salário</h4>
                <small>Entrada</small>
            </div>
            <p>R$ 4.500,00</p>
            <box-icon className="trash" type='solid' name='trash-alt'></box-icon>
        </li>
    )
}