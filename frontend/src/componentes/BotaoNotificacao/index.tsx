import iconBtn from '../../assets/img/icone_notificacao.svg';
import './style.css';

function BotaoNotificacao() {
  return (
    <div className="botao-vermelho">
      <img src={iconBtn} alt="Avisar User"/>
    </div>
  )
}

export default BotaoNotificacao;
