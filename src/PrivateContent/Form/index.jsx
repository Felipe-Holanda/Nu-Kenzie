import './index.css';

export default function Form() {
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
                        <option value="0">Entrada</option>
                        <option value="1">Despesa</option>
                    </select>
                </div>
            </div>
            <button type="submit">Inserir valor</button>
        </form>
    )
}