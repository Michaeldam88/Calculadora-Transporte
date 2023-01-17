import { Link } from 'react-router-dom';

export function Menu() {
    return (
        <nav className="menu">
            <ul>
                <li>
                    <Link to={'/home'}>{'Calculadora'}</Link>
                </li>

                <li>
                    <Link to={'/agencias'}>{'Agencias'}</Link>
                </li>
                <li>
                    <Link to={'/nueva-agencia'}>{'Nueva Agencia'}</Link>
                </li>
                <li>
                    <Link to={'/nueva-tarifa'}>{'Nueva Tarifa'}</Link>
                </li>
            </ul>
            <button>
                <Link to={'/login'}>{'Login'}</Link>
            </button>
        </nav>
    );
}
