import Cards from '../Cards'
import './index.css'
import { useState } from 'react'

export default function List({ listTransactions }) {

    const [filter, setFilter] = useState('all')

    let allTransactions = listTransactions

    function cardsFilter() {
        if (filter === 'all') {
            return allTransactions
        } else if (filter === 'positive') {
            return allTransactions.filter((item) => item.value > 0)
        } else if (filter === 'negative') {
            return allTransactions.filter((item) => item.value < 0)
        }
    }

    function listAll() {
        document.getElementById('all').className = 'active'
        document.getElementById('income').className = ''
        document.getElementById('outcome').className = ''
        setFilter('all')
    }

    function listIncome() {
        document.getElementById('all').className = ''
        document.getElementById('income').className = 'active'
        document.getElementById('outcome').className = ''
        setFilter('positive')
    }

    function listOutcome() {
        document.getElementById('all').className = ''
        document.getElementById('income').className = ''
        document.getElementById('outcome').className = 'active'
        setFilter('negative')
    }

    return (
        <aside class="extract">
            <div class="listHeader">
                <h2>Resumo financeiro</h2>
                <nav>
                    <button id='all' className='active' onClick={listAll}>Todos</button>
                    <button id='income' onClick={listIncome}>Entradas</button>
                    <button id='outcome' onClick={listOutcome}>Despesas</button>
                </nav>
            </div>
            <ul>
                {cardsFilter().map((transaction, index) => {
                    return (
                        <Cards key={index} props={transaction} />
                    )
                })}
            </ul>
        </aside>
    )
}