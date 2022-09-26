import './index.css';

export default function Header({ login, setLogin }) {
    return (
        <header>
            <h1><span>Nu</span> Kenzie</h1>
            <nav>
                <button onClick={() => {
                    setLogin(false)
                }}>Sair</button>
            </nav>
        </header>
    );
}