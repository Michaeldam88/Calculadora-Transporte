import { Link } from 'react-router-dom';

export function Menu() {
    return (
        <nav className="navbar">
            <img
                className="navbar__logo"
                src="../../../public/assets/delivery.png"
                alt="logo"
            />
            <ul className="navbar__list">
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
            <button className="navbar__login">
                <Link to={'/login'}>{'Login'}</Link>
            </button>
        </nav>
    );
}
