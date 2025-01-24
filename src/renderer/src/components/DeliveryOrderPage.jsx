import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import './DeliveryOrderPage.css'; // Importing a CSS file for styles.



const DeliveryOrderPage = () => {

  const handlePrint = () => {
    const printContent = `
      <html>
  <head>
    <style>
      body {
        margin: 0;
        padding: 0;
        text-align: center;
      }
      h1, h3, h4, h5, h6 {
        margin: 0; /* Removes all margin */
        padding: 0; /* Removes all padding */
      }
      h5 {
        font-weight: normal
      }
      h6 {
        font-weight: normal
      }
      .bold {
        font-weight: bold
      }
      .two-columns {
        display: flex;
        justify-content: space-between; /* Ensure two columns are spaced evenly */
        margin: 20px; /* Add spacing around the container */
        padding: 0 20px; /* Add padding for visual balance */
      }
      .left-column, .right-column {
        flex: 1; /* Both columns take up equal space */
        text-align: left; /* Align text to the left in both columns */
      }
      .right-column {
        padding-left: 20px; /* Add a small gap between columns */
      }
      table {
        display: table;
        width: 100%; /* Use full width */
        border-collapse: collapse; /* Remove extra space between table cells */
        table-layout: fixed;
      }
      th {
        padding: 8px;
        text-align: center; /* Center-align table content */
      }
      th {
        border: 1px solid #000; /* Add border to cells */
        background-color: #f2f2f2; /* Add background color to header */
        font-weight: bold; /* Make headers bold */
        font-size: 1em;
      }
      td {
        padding: 5px 10px; /* Add vertical spacing */
        vertical-align: top; /* Align content at the top */
        text-align: left;
        font-size: 1em;
      }
      tr {
        text-align: left;
      }
      .label {
        text-align: left; /* Align labels to the left */
        width: 100px; /* Consistent width for labels */
        font-size: 1em; /* Match h5 size */
        font-weight: bold; /* Match h5 weight */
      }
      .separator {
        text-align: center; /* Align separators to the center */
        width: 10px; /* Small width for semicolon column */
        font-size: 1em; /* Match h5 size */
        font-weight: bold; /* Match h5 weight */
      }
      .value {
        text-align: left; /* Align values to the left */
        font-size: 1em; /* Match h5 size */
        font-weight: bold; /* Match h5 weight */
      }
      .description {
        width: 50%; /* 3 parts */
      }
      .pcs-tons, .unit-price, .amount {
        width: 16.67%; /* 1 part each */
      }
      .table-wrapper {
        height: 300px; /* Fixed height */
        overflow: auto; /* Adds scrollbars if the content exceeds the height */
        margin-top: 20px; /* Space between the content above and the table */
      }
      .footer {
        position: absolute;
        bottom: 65px;
        right: 20px;
        padding: 5px;
        background-color: #f2f2f2;
        border: 1px solid #000;
        font-size: 1.2em;
        width: 200px;
        text-align: right;
      }
      .footer div {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
      .footer .label {
        text-align: left;
      }
      .footer .value {
        text-align: right;
      }

      .bottom-left {
        position: absolute;
        bottom: 100px;
        left: 10px;
        font-size: 0.85em;
        text-align: left;
        width: 300px;
      }

      .absolute-bottom-left {
        position: absolute;
        bottom: 1px;
        left: 1px;
        font-size: 0.85em;
        text-align: left;
        width: 300px;
      }

      /* Bottom right signature line */
      .bottom-right {
        position: absolute;
        bottom: 1px;
        right: 1px;
        font-size: 0.85em;
        text-align: center;
        width: 200px;
      }
      .signature-line {
        border-top: 1px solid #000;
        width: 100%;
        margin-bottom: 5px;
      }

    </style>
  </head>
  <body>
    <h1>S.K.K. ENTERPRISE PTE LTD</h1>
    <h5>49 • SUNGEI KADUT STREET 4, SINGAPORE 729063</h5>
    <h5> TEL: 6363 3298 / 6362 3523 FAX: 6269 0681</h5>
    <h5> SUPPLIER OF SAWN TIMBER, PLYWOOD, PLANNING SERVICES & CHEMICAL TREATMENT</h5>
    <p></p>
    <div class="two-columns">
      <div class="left-column">
        <h4> BILL TO:</h4>
        <h4> ${companyName}</h4>
        <h4> ${address1}</h4>
        <h4> ${address2}</h4>
        <h4> ${address3}</h4>
        <h4> ${address4}</h4>
        <p></p><p></p>
        <h4> DELIVER TO:</h4>
        <h4> ${deliveryAddress}</h4>
      </div>
      <div class="right-column">
        <h4>CO. REG NO: 199608803E</h4>
        <h4>GST REG NO: 19-9608803-E</h4>
        <p></p>
        <h3>DELIVERY ORDER</h3>
        <p></p>
        <table>
          <tr>
            <td class="label">D/O NO.</td>
            <td class="separator">:</td>
            <td class="value">${deliveryOrderNumber}</td>
          </tr>
          <tr>
            <td class="label">D/O DATE</td>
            <td class="separator">:</td>
            <td class="value">${date}</td>
          </tr>
          <tr>
            <td class="label">P.O. NO.</td>
            <td class="separator">:</td>
            <td class="value">${poNumber}</td>
          </tr>
          <tr>
            <td class="label">ORDER BY</td>
            <td class="separator">:</td>
            <td class="value">${orderBy}</td>
          </tr>
          <tr>
            <td class="label">TERMS</td>
            <td class="separator">:</td>
            <td class="value">${terms}</td>
          </tr>
          <tr>
            <td class="label">VEHICLE NO.</td>
            <td class="separator">:</td>
            <td class="value">${vehicleNumber}</td>
          </tr>
        </table>
      </div>
    </div>

    <!-- Table wrapped in the fixed-height block -->
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th class="description">DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
        ${tableData.filter(row => row.amount && row.amount !== "0.00" && row.amount !== "").map(row => `
          <tr>
                <td class="description">
                  ${row.name ? `<div class="description-name">${row.name}</div>` : ''}
                  <div class="description-text">
                    ${row.type === "TON" || row.type === "FEET/INCH" 
                      ? `${row.description?.length1 || ''}" X ${row.description?.length2 || ''}" - ${row.description?.width || ''} / ${row.description?.depth || ''}'`
                      : row.description}
                  </div>
                </td>
          </tr>
        `).join('')}
        </tbody>
      </table>
    </div>

    <div class="bottom-left">
      <p>Received the above in good order and condition</p>
    </div>

    <div class="absolute-bottom-left">
      <div class="signature-line"></div>
      <p>COMPANY STAMP & RECEIVER'S SIGNATURE</p>
    </div>

    <div class="bottom-right">
      <div class="signature-line"></div>
      <p>S.K.K. ENTERPRISE PTE LTD</p>
    </div>

  </body>
</html>`


    // Send the printable content to the main process
    window.electron.ipcRenderer.send('print-document', printContent)
  }

  const [value, setValue] = useState(0);  

  // Under General Tab
  const [deliveryOrderNumber, setDeliveryOrderNumber] = useState("");
  const [date, setDate] = useState("");
  const [customerCode, setCustomerCode] = useState("");
  const [salesManCode, setSalesManCode] = useState("");
  const [poNumber, setPoNumber] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [contact, setContact] = useState("");
  const [terms, setTerms] = useState("");
  const [rate, setRate] = useState("");
  const [grossTotal, setGrossTotal] = useState("");
  const [disc, setDisc] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const [tax, setTax] = useState("");
  const [absorbTax, setAbsorbTax] = useState("");
  const [gst, setGst] = useState("");
  const [netTotal, setNetTotal] = useState("");

  // Under Details Tab
  const [companyName, setCompanyName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [address3, setAddress3] = useState("");
  const [address4, setAddress4] = useState("");
  const [telephone, setTelephone] = useState("");
  const [fax, setFax] = useState("");

  // Under Delivery Address Tab
  const [deliveryAddress, setDeliveryAddress] = useState("");

  // For the table (editable rows)
  const [tableData, setTableData] = useState(
    Array(10).fill({
      type: "",
      name: "", 
      description: "",
      quantity: "",
      uom: "",
      tonnage: "",
      unitPrice: "",
      disc: "",
      amount: ""
    })

  );

  const [itemNo, setItemNo] = useState(0)
  const [nettTotal, setNettTotal] = useState(0)

  const calculateTonQuantity = (description) => {
    if (!description || !description.length1 || !description.length2 || !description.width || !description.depth) {
      return "";
    }
    
    const length1 = parseFloat(description.length1) || 0;
    const length2 = parseFloat(description.length2) || 0;
    const width = parseFloat(description.width) || 0;
    const depth = parseFloat(description.depth) || 0;
    
    const result = (length1 * length2 * width * depth) / 7200;
    return result.toFixed(4); // Return with 4 decimal places
  };

  const calculateFeetInchQuantity = (description) => {
    if (!description || !description.width || !description.depth) {
      return "";
    }
    
    const width = parseFloat(description.width) || 0;
    const depth = parseFloat(description.depth) || 0;
    
    const result = width * depth;
    return result.toFixed(4);
  };

  const calculateAmount = (quantity, unitPrice, type) => {
    if (!quantity || !unitPrice) return "";
    const amount = parseFloat(quantity) * parseFloat(unitPrice);
    return amount.toFixed(2);
  };

  const handleTableChange = (index, field, value) => {
    const updatedTableData = [...tableData];
    if (field === "name") {
      updatedTableData[index] = {
        ...updatedTableData[index],
        name: value
      };
    }
    
    if (field === "description" && (updatedTableData[index].type === "TON" || updatedTableData[index].type === "FEET/INCH")) {
      const updatedDescription = {
        ...updatedTableData[index].description || {},
        ...value
      };
      
      updatedTableData[index] = {
        ...updatedTableData[index],
        description: updatedDescription
      };
      
      // Calculate quantity based on type
      let calculatedQuantity = "";
      if (updatedTableData[index].type === "TON") {
        calculatedQuantity = calculateTonQuantity(updatedDescription);
      } else if (updatedTableData[index].type === "FEET/INCH") {
        calculatedQuantity = calculateFeetInchQuantity(updatedDescription);
      }
      
      updatedTableData[index].quantity = calculatedQuantity;
      
      // Calculate amount if unit price exists
      if (updatedTableData[index].unitPrice) {
        updatedTableData[index].amount = calculateAmount(
          calculatedQuantity,
          updatedTableData[index].unitPrice,
          updatedTableData[index].type
        );
      }
    } else {
      updatedTableData[index] = {
        ...updatedTableData[index],
        [field]: value,
      };
    }

    const { quantity, unitPrice, type } = updatedTableData[index];

    // Calculate amount when quantity or unit price changes
    if (field === "quantity" || field === "unitPrice" || field === "type") {
      if (type === "PCS" || type === "TON" || type === "FEET/INCH") {
        updatedTableData[index].amount = calculateAmount(quantity, unitPrice, type);
      } else {
        updatedTableData[index].amount = "";
      }
    }

    if (field === "type") {
      if (value === "TON" || value === "FEET/INCH") {
        // Initialize description object with empty values
        updatedTableData[index].description = {
          length1: "",
          length2: "",
          width: "",
          depth: ""
        };
        updatedTableData[index].quantity = "";
        updatedTableData[index].amount = "";
      } else {
        // Reset description to empty string for other types
        updatedTableData[index].description = "";
      }
    }

    const nonBlankAmounts = updatedTableData.filter(row => row.amount && row.amount !== "0.00" && row.amount !== "").length;
    setItemNo(nonBlankAmounts);

    const total = updatedTableData.reduce((sum, row) => {
      const amount = parseFloat(row.amount) || 0;
      return sum + amount;
    }, 0);

    setNettTotal(total.toFixed(2));
    setTableData(updatedTableData);
  };

  
  return (
    <>
    <div className="delivery-order-page">
    <div>
    <button 
        onClick={handlePrint}>
        Print Delivery Order
    </button>
    </div>
      <div>
        <Paper square>
          <Tabs
            value={value}
            textColor="primary"
            indicatorColor="primary"
            onChange={(event, newValue) => setValue(newValue)}
          >
            <Tab label="General" />
            <Tab label="Details" />
            <Tab label="Delivery Address" />
          </Tabs>
        </Paper>
      </div>

      {value === 0 && (
        <div>
          <form>
            <div className="form-container">
              {/* Left Column */}
              <div>
                <div className="input-container">
                  <label>Delivery Order No.</label>
                  <input
                    type="text"
                    value={deliveryOrderNumber}
                    onChange={(e) => setDeliveryOrderNumber(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>Customer Code</label>
                  <input
                    type="text"
                    value={customerCode}
                    onChange={(e) => setCustomerCode(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>Salesman Code</label>
                  <input
                    type="text"
                    value={salesManCode}
                    onChange={(e) => setSalesManCode(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>P/O Number</label>
                  <input
                    type="text"
                    value={poNumber}
                    onChange={(e) => setPoNumber(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>Order By</label>
                  <input
                    type="text"
                    value={orderBy}
                    onChange={(e) => setOrderBy(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>Vehicle Number</label>
                  <input
                    type="text"
                    value={vehicleNumber}
                    onChange={(e) => setVehicleNumber(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>Contact</label>
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>Terms</label>
                  <input
                    type="text"
                    value={terms}
                    onChange={(e) => setTerms(e.target.value)}
                  />
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div className="input-container">
                  <label>Rate</label>
                  <input
                    type="text"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>Gross Total</label>
                  <input
                    type="text"
                    value={grossTotal}
                    onChange={(e) => setGrossTotal(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>Disc</label>
                  <input
                    type="text"
                    value={disc}
                    onChange={(e) => setDisc(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>Sub-total</label>
                  <input
                    type="text"
                    value={subTotal}
                    onChange={(e) => setSubTotal(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>Tax</label>
                  <input
                    type="text"
                    value={tax}
                    onChange={(e) => setTax(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>Absorb Tax</label>
                  <input
                    type="text"
                    value={absorbTax}
                    onChange={(e) => setAbsorbTax(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>GST</label>
                  <input
                    type="text"
                    value={gst}
                    onChange={(e) => setGst(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>Net Total</label>
                  <input
                    type="text"
                    value={netTotal}
                    onChange={(e) => setNetTotal(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      )}

      {value === 1 && (
        <div className="form-container-2">
          <form>
            <div className="input-container-2">
              <label>Company Name</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="input-container-2">
              <label>Address</label>
              <input
                type="text"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
            </div>
            <div className="input-container-2">
            <label></label>
              <input
                type="text"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
            </div>
            <div className="input-container-2">
            <label></label>
              <input
                type="text"
                value={address3}
                onChange={(e) => setAddress3(e.target.value)}
              />
            </div>
            <div className="input-container-2">
            <label></label>
              <input
                type="text"
                value={address4}
                onChange={(e) => setAddress4(e.target.value)}
              />
            </div>
            <div className="input-container-2">
              <label>Telephone</label>
              <input
                type="text"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </div>
            <div className="input-container-2">
              <label>Fax</label>
              <input
                type="text"
                value={fax}
                onChange={(e) => setFax(e.target.value)}
              />
            </div>
          </form>
        </div>
      )}

      {value === 2 && (
        <div className="form-container-2">
          <form>
            <div className="input-container-2">
              <label>Delivery Address</label>
              <input
                type="text"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
              />
            </div>
          </form>
        </div>
      )}

      <button className="delivery-order-button">
        <Link to="/" className="button-link">
          Main Page
        </Link>
      </button>

      <div className="editable-table-container">
        <table className="editable-table">
          <thead>
            <tr>
              <th width="110px">Type</th>
              <th width="400px">Name</th>
              <th width="400px">Description</th>
              <th width="100px">Quantity</th>
              {/* <th width="50px">UOM</th> */}
              <th width="150px">Tonnage</th>
              <th width="150px">Unit Price</th>
              <th width="80px">Disc %</th>
              <th width="150px">Amount</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>
                  <select
                    defaultValue=""
                    value={row.type}
                    onChange={(e) => handleTableChange(index, "type", e.target.value)}
                  >
                  <option value="TON">TON</option>
                  <option value="FEET/INCH">FEET/INCH</option>
                  <option value="PCS">PCS</option>
                  <option value=""></option>
                </select>
                </td>
                <td>
                  <input
                    type="text"
                    value={row.name}
                    onChange={(e) => handleTableChange(index, "name", e.target.value)}
                  />
                </td>
                <td>
                {(row.type === "TON") ? (
                    <div style={{ display: "flex", gap: "4px" }}>
                      <input
                        type="text"
                        placeholder=""
                        value={row.description?.length1 || ""}
                        onChange={(e) =>
                          handleTableChange(index, "description", { length1: e.target.value })
                        }
                      />
                      <span>"X</span>
                      <input
                        type="text"
                        placeholder=""
                        value={row.description?.length2 || ""}
                        onChange={(e) =>
                          handleTableChange(index, "description", { length2: e.target.value })
                        }
                      />
                      <span>"-</span>
                      <input
                        type="text"
                        placeholder=""
                        value={row.description?.width || ""}
                        onChange={(e) =>
                          handleTableChange(index, "description", { width: e.target.value })
                        }
                      />
                      <span>/</span>
                      <input
                        type="text"
                        placeholder=""
                        value={row.description?.depth || ""}
                        onChange={(e) =>
                          handleTableChange(index, "description", { depth: e.target.value })
                        }
                      />
                      <span>'</span>
                    </div>
                  ) : 
                  (row.type === "FEET/INCH") ? 
                  <div style={{ display: "flex", gap: "4px" }}>
                      <input
                        type="text"
                        placeholder=""
                        value={row.description?.length1 || ""}
                        onChange={(e) =>
                          handleTableChange(index, "description", { length1: e.target.value })
                        }
                      />
                      <span>"X</span>
                      <input
                        type="text"
                        placeholder=""
                        value={row.description?.length2 || ""}
                        onChange={(e) =>
                          handleTableChange(index, "description", { length2: e.target.value })
                        }
                      />
                      <span>"-</span>
                      <input
                        type="text"
                        placeholder=""
                        value={row.description?.width || ""}
                        onChange={(e) =>
                          handleTableChange(index, "description", { width: e.target.value })
                        }
                      />
                      <span>PCS/</span>
                      <input
                        type="text"
                        placeholder=""
                        value={row.description?.depth || ""}
                        onChange={(e) =>
                          handleTableChange(index, "description", { depth: e.target.value })
                        }
                      />
                      <span>'</span>
                    </div>

                  : (
                    <input
                      type="text"
                      value={row.description}
                      onChange={(e) => handleTableChange(index, "description", e.target.value)}
                    />
                  )}
        </td>
                <td>
                  <input
                    type="number"
                    value={row.quantity}
                    onChange={(e) => handleTableChange(index, "quantity", e.target.value)}
                    readOnly={row.type === "TON"}
                  />
                </td>
                {/* <td>
                  <input
                    type="text"
                    value={row.uom}
                    onChange={(e) => handleTableChange(index, "uom", e.target.value)}
                  />
                </td> */}
                <td>
                  <input
                    type="number"
                    value={row.tonnage}
                    onChange={(e) => handleTableChange(index, "tonnage", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={row.unitPrice}
                    onChange={(e) => handleTableChange(index, "unitPrice", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={row.disc}
                    onChange={(e) => handleTableChange(index, "disc", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={row.amount}
                    onChange={(e) => handleTableChange(index, "amount", e.target.value)}
                    readOnly
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>  
      </div>
      <div className="totals-container">
        <div className="totals-row">
          <div className="total-item">
            <span className="label">Total Item:</span>
            <span className="value-special">{itemNo}</span>
          </div>
          <div className="nett-total">
            <span className="label">Nett Total:</span>
            <span className="value">${(nettTotal * 1.09).toFixed(2)}</span>
          </div>
        </div>
      </div>
  
    </div>

    </>
  );
};

export default DeliveryOrderPage;
