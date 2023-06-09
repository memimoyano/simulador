import React, { useState } from "react";

export default function Coin(){

    const[money, setMoney] = useState(0);
    const[profit, setProfit] = useState(0);
    const[headsAmount, setHeadsAmount] = useState(0);
    const[tailsAmount, setTailsAmount] = useState(0);

    //Si el nº random es mayor a 0.5 sale Cara, sino Cruz
    const isHead = () => {
        let random = Math.random();
        return (random > 0.5);
    } 

    const onCoinFlip = () => {
        setMoney(money - 10);
        if(isHead()){
            setHeadsAmount(headsAmount + 1);
            if(headsAmount - tailsAmount === 3){
                setProfit(profit + 100);
                setMoney(money + 100);
                setHeadsAmount(0);
                setTailsAmount(0);
            }
        }
        else{
            setTailsAmount(tailsAmount + 1);
        }
    }

    return(
        <div className="flex flex-col w-full p-5 gap-3">
            <h1 className="flex flex-row text-2xl gap-2 items-center font-bold">Lanzamiento de Monedas
                <img className="w-14 h-14" src="../resources/img/toss.png"/>
            </h1>
            <div className="flex flex-col gap-5">
                <p className="text-xl flex flex-row items-center gap-2 ">
                <img className="w-12 h-12" src="../resources/img/money.png"/>
                    Dinero Acumulado:
                    <span className="font-bold text-emerald-500">{money}</span>
                </p>
                <p className="text-xl flex flex-row items-center gap-2" >
                <img className="w-12 h-12" src="../resources/img/profits.png"/>
                    Ganancia:
                    <span className="font-bold text-emerald-500">{profit}</span>
                </p>
                <p className="text-xl flex flex-row items-center gap-2">
                    Cantidad de veces que salió Cara:
                    <span className="font-bold text-blue-500">{headsAmount}</span>
                </p>
                <p className="text-xl flex flex-row items-center gap-2">
                    Cantidad de veces que salió Cruz:
                    <span className="font-bold text-blue-500">{tailsAmount}</span>
                </p>
            </div>
            <button className="bg-emerald-500 text-white text-xl font-bold" 
            onClick={onCoinFlip}> Lanzar moneda</button>
        </div>
    )

}