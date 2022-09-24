import './index.css';

import nuKenzie from './NuKenzie.png';
import nuGroup from './demoDisplay.svg'

export default function InitialPage() {
    return (
        <main>
            <div className="leftSide">
                <figure><img src={nuKenzie} /></figure>
                <h1 className='title1'>Centralize o controle das suas finanças</h1>
                <small>de forma rápida e segura</small>
                <button>Iniciar</button>
            </div>
            <div className="rightSide">
                <img src={nuGroup} />
            </div>
        </main>
    );
}