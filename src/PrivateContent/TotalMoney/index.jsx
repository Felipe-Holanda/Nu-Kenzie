import './index.css'
import { useState } from 'react'


export default function TotalMoney({ listTransactions, setListTransactions, total, setTotal }) {

    return (
        <section>
            <div>
                <h3>Valor total:</h3>
                <small>O valor se refere ao saldo</small>
            </div>
            <h3 className='total'>R$ {total}</h3>
        </section>
    )
}