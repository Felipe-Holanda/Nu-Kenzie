import './style.css'
import Header from "./Header";
import Form from "./Form";
import TotalMoney from "./TotalMoney";
import List from "./List";
import Cards from "./Cards";
import { useState } from 'react';


export default function PrivateContent({ login, setLogin }) {

    const [listTransactions, setListTransactions] = useState([]);
    let [total, setTotal] = useState(0);

    return (
        <div>
            <Header login={login} setLogin={setLogin} />
            <main className='container'>
                <div className='left'>
                    <Form listTransactions={listTransactions} setListTransactions={setListTransactions} setTotal={setTotal} total={total} />
                    <TotalMoney listTransactions={listTransactions} setListTransactions={setListTransactions} total={total} setTotal={setTotal} />
                </div>
                <List listTransactions={listTransactions} setListTransactions={setListTransactions} />
            </main>
        </div>
    )
}