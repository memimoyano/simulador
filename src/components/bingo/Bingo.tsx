import React, { useState, useRef } from "react";
import _ from 'lodash';
import { useReactToPrint } from 'react-to-print';
import './Bingo.css'
import BingoService from "./BingoService";

export default function Bingo() {

    const [number, setNumber] = useState(20);
    const componentRef = useRef<HTMLDivElement>(null)
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });

    const generateBingoRow = (i, bingoArray) => {
        return bingoArray[i].map((value, idx) => 
            <td key={idx} className={value === null ? 'bingo-empty-td' : 'bingo-td'}>
                 {value}
            </td>
        );
    }

    const generateBingoRows = (bingoArray) =>
     bingoArray.map((value, idx) =>
        <tr key={idx}>
            {generateBingoRow(idx, bingoArray)}
        </tr>
     );

    const onNumberChange = (event) => {
        let num = parseInt(event.target.value);
        if (num > 50) {
            return;
        }
        setNumber(num);
    }


    let bingoTables = _(number).times((i) => {
        return(
        <div className="bingo-table-wrapper" key={i}>
            <table className="bingo-table">
                <tbody>
                    {generateBingoRows(BingoService.generateBingo())}
                </tbody>
            </table>
        </div>);
        }
    );

    return (
        <div className="flex flex-col gap-2 w-full justify-center p-4">
            <h1 className="self-center text-2xl font-bold text-indigo-600">Cartones Bingo</h1>
            <div className="flex flex-row gap-3 self-center">
                <p className="font-bold">Numero de cartones:</p>
                <input className="border border-indigo-500 pl-2" type='number' min='1' max='50' value={number} onChange={onNumberChange}/>
            </div>
            
            <button className=" bg-indigo-400 text-white w-1/2 self-center" onClick={handlePrint} >Imprimir cartones</button>
            <div className='tables-wrapper' ref={componentRef}>
                {bingoTables}
            </div>
        </div>
    );

}