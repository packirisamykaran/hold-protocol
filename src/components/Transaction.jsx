import React, { useState } from 'react'
import { Routes } from 'react-router-dom'
import "./style/Transaction.css"

export default function Transaction() {
    
    const transactionOption = ["deposit", "withdraw", "swap"]
    const [currentTransactionOption, setCurrentTransactionOption] = useState("deposit");

  return (
    <div className='transaction-page'>
        <div className="left-col">
            <div className="sidebar">
                <h3>My Deposits</h3>
                <div className="list">
                    <div className="item">
                    <img src="./" alt="Ic" />
                    <div className="volume">10 Sol</div>
                    </div>
                </div>
                <button>Details</button>
                </div>
                <div className="sidebar">
                <h3>My Withdrawals</h3>
                <div className="list">
                    <div className="item">
                    <img src="./" alt="Ic" />
                    <div className="volume">20 Sol</div>
                    </div>
                </div>
                <button>Claim All</button>
            </div>
      </div>
      <div className="right-col">
        <div className="transaction-options-info">
            <div className="transaction-options">
                    {transactionOption.map((option, index)=>{
                        return <button key={option}>{option}</button>
                    })}
            </div>
             <img src="https://www.flaticon.com/free-icon/info_471713" alt="I" />       
        </div>
        <div className="transaction">
            <h4>{currentTransactionOption}</h4>
            <div className="balance">balance: 1000 USDC</div>
            <div className="currency-volume">
                <select name="currency" id="">
                    <option value="">($)USDC</option>
                </select>
                <input type="text" name='volume' />
            </div>
            <img src="https://cdn-icons.flaticon.com/png/128/3313/premium/3313001.png?token=exp=1659420933~hmac=d3cf01b62b685957ed0f3773ba2a0890" alt="" />
            <div className="currency-volume">
                <select name="currency" id="">
                    <option value="">($)USDC</option>
                </select>
                <input type="text" name='volume' />
            </div>
            <div className="rate">Price 1USDC per VUSDC</div>
            <button>{currentTransactionOption}</button>
        </div>
      </div>

    </div>
  )
}

