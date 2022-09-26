import Cards from '../Cards'
import './index.css'

export default function List({ listTransactions, setListTransactions }) {


    return (
        <aside class="extract">
            <div class="listHeader">
                <h2>Resumo financeiro</h2>
                <nav>
                    <button className='active'>Todos</button>
                    <button>Entradas</button>
                    <button>Despesas</button>
                </nav>
            </div>
            <ul>
                {listTransactions.map((transaction, index) => {
                    return (
                        <Cards key={index} props={transaction} />
                    )
                })}
            </ul>
        </aside>
    )
}