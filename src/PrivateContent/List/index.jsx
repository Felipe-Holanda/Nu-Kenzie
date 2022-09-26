export default function List({ children }) {
    return (
        <div>
            <h2>Resumo financeiro</h2>
            <nav>
                <button>Todos</button>
                <button>Entradas</button>
                <button>Despesas</button>
            </nav>
            <ul>
                {children}
            </ul>
        </div>
    )
}