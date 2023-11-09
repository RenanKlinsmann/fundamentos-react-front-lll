import React, {useState} from "react";

export default props => {
    const [valor, setValor] = useState();
    const [valorUm, setValorUm] = useState();
    const [valorDois, setValorDois] = useState();
    const [valorTres, setValorTres] = useState();


    function callBackValor(e){
        setValor(e.target.value);
    }

    function callBackValorUm(e){
        setValorUm(e.target.value);
    }

    function callBackValorDoisTres(){
        setValorDois(valor);
        setValorTres(valorUm);
    }

    return (
        <div>
            <h2>{valorDois}</h2>
            <h2>{valorTres}</h2>
            <input type="text" value={valor} onChange={callBackValor}/>
            <input type="text" value={valorUm} onChange={callBackValorUm}/>
            <button onClick={callBackValorDoisTres}>Apresentar Valor</button>
        </div>
    )



}