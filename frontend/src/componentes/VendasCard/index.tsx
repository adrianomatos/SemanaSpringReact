import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import BotaoNotificacao from '../BotaoNotificacao';
import './style.css';

function VendasCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 31));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    useEffect(() => {
        axios.get("http://localhost:8080/sales")
        .then(response => {
            console.log(response.data);
        })
    }, [])

    return (
        <div className="card">
            <h2 className="vendas-titulo">Vendas</h2>

            <div>
                <div className="form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="vendas-tabela">
                    <thead>
                        <tr>
                            <th className="exibeCom992">ID</th>
                            <th className="exibeCom576">Data Nascimento</th>
                            <th>Vendedor</th>
                            <th className="exibeCom992">Visitas</th>
                            <th className="exibeCom992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="exibeCom992">01</td>
                            <td className="exibeCom576">18/02/1986</td>
                            <td>Adriano</td>
                            <td className="exibeCom992">122</td>
                            <td className="exibeCom992">97</td>
                            <td>123.000,00</td>
                            <td>
                                <div className="botao-vermelho-container">
                                    <BotaoNotificacao />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="exibeCom992">02</td>
                            <td className="exibeCom576">31/08/1988</td>
                            <td>Rebeca</td>
                            <td className="exibeCom992">250</td>
                            <td className="exibeCom992">150</td>
                            <td>456.789,00</td>
                            <td>
                                <div className="botao-vermelho-container">
                                    <BotaoNotificacao />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="exibeCom992">03</td>
                            <td className="exibeCom576">18/03/2009</td>
                            <td>Juninho</td>
                            <td className="exibeCom992">312</td>
                            <td className="exibeCom992">160</td>
                            <td>789.080,00</td>
                            <td>
                                <div className="botao-vermelho-container">
                                    <BotaoNotificacao />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VendasCard;