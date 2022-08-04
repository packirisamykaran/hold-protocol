import React from "react";
import "./style/Stake.css"

export default function Stake() {

    const stakeoption = ["stake", "unstake"]

    return (
        <div className="stake">
            <div className="left-col">
                <div className="sidebar">
                    <h3>Total Staked</h3>
                    <div className="list">
                        <div className="item">
                            <img src="./" alt="Ic" />
                            <div className="volume">10 Sol</div>
                        </div>
                    </div>
                </div>
                <div className="sidebar">
                    <h3>My Stake</h3>
                    <div className="list">
                        <div className="item">
                            <img src="./" alt="Ic" />
                            <div className="volume">20 Sol</div>
                        </div>
                    </div>
                </div>
                <button>Stake</button>
            </div>
            <div className="right-col">
                <div className="stakeoption-info">
                    <div className="stakeoption">
                        {stakeoption.map((option, index) => {
                            return <button key={option}>{option}</button>;
                        })}

                    </div>
                    <img src={"https://cdn-icons-png.flaticon.com/512/471/471713.png"} alt="I" />
                </div>

                <div className="staking">
                    <h4>Stake</h4>
                    <div className="balance">Balance: 1000 HOLD</div>
                    <div className="container">
                        <input type="text" /> | HOLD
                    </div>
                    <button>Stake</button>
                </div>
            </div>
        </div>
    );
}
