import './index.css';

import nuKenzie from './NuKenzie.png';
import nuGroup from './demoDisplay.svg'

export default function InitialPage({ setLogin }) {
    return (
        <main className='initPage'>
            <div className="leftSide">
                <figure><img src={nuKenzie} alt="Logo NuKenzie" /></figure>
                <h1 className='title1'>Centralize o controle das suas finanças</h1>
                <small>de forma rápida e segura</small>
                <button onClick={() => { setLogin(true) }}>Iniciar</button>
            </div>
            <div className="rightSide">
                <img src={nuGroup} alt="Imagem decorativa" />
            </div>
        </main>
    );
}