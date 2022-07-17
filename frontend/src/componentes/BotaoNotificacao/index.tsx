import axios from 'axios';
import { toast } from 'react-toastify';
import iconBtn from '../../assets/img/icone_notificacao.svg';
import { BASE_URL } from '../../utils/request';
import './style.css';

type Props = {
  saleId: number;
}

function handleClick(id: number){
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(response => {
    toast.info("SMS enviado com sucesso!")
    console.log("SMS enviado com sucesso!");
  })
}

function BotaoNotificacao({saleId} : Props) {
  return (
    <div className="botao-vermelho" onClick={() => handleClick(saleId)}>
      <img src={iconBtn} alt="Avisar User"/>
    </div>
  )
}

export default BotaoNotificacao;
