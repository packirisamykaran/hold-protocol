import React from 'react'
import "./style/Report.css"

export default function Report() {

  const reportHeading = ["reportID", "wallet", "address", "token", "time", "status", "details"];
  const latestTransactionHeading = ["wallet", "address", "txHash", "token", "time", "type", "action"]

  return (
    <div className='report'>

      <div className="input-status">
        <input type="text" placeholder='Search by address/tx hash' />
        <select name="status" id="">
          <option value="Pending Only">Pending Only</option>
        </select>
      </div>
      <div className="section">
        <h3>My Reports</h3>
        <table>
          <thead>
            <tr>
              {reportHeading.map((head, index) => {
                let heading = null;
                if (head === "reportID") {
                  heading = "report ID"
                }

                return <th key={head}>{heading || head}</th>
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {reportHeading.map((head, index) => {
                return <td key={head}>{index}</td>
              })}
            </tr>
          </tbody>
        </table>
      </div>


      <div className="input-date-token">
        <input type="text" placeholder='Search by address/tx hash' />
        <div className="date-token">
          <select name="date" id="">
            <option value="All">Date: All</option>
          </select>
          <select name="token" id="">
            <option value="All">All vTokens</option>
          </select>
        </div>
      </div>
      <div className="section">
        <h3>Latest Transaction</h3>
        <table>
          <thead>
            <tr>
              {reportHeading.map((head, index) => {
                let heading = null;
                if (head === "reportID") {
                  heading = "report ID"
                }

                return <th key={head}>{heading || head}</th>
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {reportHeading.map((head, index) => {
                return <td key={head}>{index}</td>
              })}
            </tr>
          </tbody>
        </table>
      </div>


    </div>
  )
}
