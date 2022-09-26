import './index.css'

export default function Cards({ props }) {
    return (
        <li className={`cards ${props.type}`}>
            <div>
                <h4>{props.description}</h4>
                <small>{props.type}</small>
            </div>
            <p>R$ {props.value}</p>
            <i class='bx bxs-trash-alt' ></i>
        </li>
    )
}