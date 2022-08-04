import React from 'react'
import "./style/Home.css"

export default function Home() {


  const sectionHeader = ["wallet", "token", "time", "details"]

  return (
    <div className="home">
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
        <div className="section">
          <h3>Latest Transaction</h3>
          <table>
            <thead>
              <tr>
                {sectionHeader.map((head, index) => {
                  return <th key={head}>{head}</th>
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wallet Address</td>
                <td>
                  <div className="volume">10</div>
                  <div className="coin">Sol</div>
                </td>
                <td>
                  time
                </td>
                <td>
                  <button>Report</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="section">
          <h3>My Reports</h3>
          <table>
            <thead>
              <tr>
                {sectionHeader.map((head, index) => {
                  return <th key={head}>{head}</th>
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wallet Address</td>
                <td>
                  <div className="volume">10</div>
                  <div className="coin">Sol</div>
                </td>
                <td>
                  time
                </td>
                <td>
                  <button>Report</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
