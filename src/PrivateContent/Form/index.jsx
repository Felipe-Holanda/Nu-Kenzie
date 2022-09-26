import './index.css';

export default function Form({ listTransactions, setListTransactions, setTotal, total }) {


    function handleSubmit(e) {
        e.preventDefault();
        const description = document.getElementById('description').value;
        const value = parseInt(document.getElementById('value').value);
        const type = document.getElementById('type').value;
        if (description.length === 0 || value.length === 0) {
            alert('Preencha todos os campos!');
        } else {
            if (type === 'Despesa') {
                setListTransactions([...listTransactions, {
                    description: description,
                    value: -value,
                    type: type
                }]);
                setTotal(total + -value);
            } else {
                setListTransactions([...listTransactions, {
                    description: description,
                    value: value,
                    type: type
                }]);
                setTotal(total + value);
            }
            document.getElementById('description').value = '';
            document.getElementById('value').value = '';
            document.getElementById('type').value = 'Entrada';
        }
    }

    return (
        <form>
            <div className="descriptionField">
                <label htmlFor="description">Descrição</label>
                <input type="text" id="description" name="description" placeholder="Digite aqui sua descrição" />
                <small>Ex: Compra de roupas</small>
            </div>
            <div className="type-n-value">
                <div className="valueField">
                    <label htmlFor="value">Valor</label>
                    <input type="number" id="value" name="value" placeholder="12" />
                    <span name="value">R$</span>
                </div>
                <div className="typeField">
                    <label htmlFor="type">Tipo</label>
                    <select name="type" id="type">
                        <option value="Entrada">Entrada</option>
                        <option value="Despesa">Despesa</option>
                    </select>
                </div>
            </div>
            <button type="submit" onClick={handleSubmit}>Inserir valor</button>
        </form >
    )
}