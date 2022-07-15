import logo from '../../assets/img/Logo.svg';
import './style.css';

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="Logo do sistema"/>
                    <h1>Inscrições Carteira Estudantil</h1>
                    <p>Desenvolvido por <a href="https://wa.me/88981935976">@AdrianoMatos</a></p>
            </div>
        </header>
    )
}

export default Header;