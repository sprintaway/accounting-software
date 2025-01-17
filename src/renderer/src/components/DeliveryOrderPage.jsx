import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import './DeliveryOrderPage.css'; // Importing a CSS file for styles.

const DeliveryOrderPage = () => {
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
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [fax, setFax] = useState("");

  // Under Delivery Address Tab
  const [deliveryAddress, setDeliveryAddress] = useState("");

  // For the table (editable rows)
  const [tableData, setTableData] = useState(
    Array(10).fill({
      type: "",
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

  const calculateAmount = (quantity, unitPrice, type) => {
    if (!quantity || !unitPrice) return "";
    const amount = parseFloat(quantity) * parseFloat(unitPrice);
    return amount.toFixed(2);
  };

  const handleTableChange = (index, field, value) => {
    const updatedTableData = [...tableData];
    
    if (field === "description" && updatedTableData[index].type === "TON") {
      // For TON type, merge the new value with existing description values
      const updatedDescription = {
        ...updatedTableData[index].description || {},  // Preserve existing values
        ...value  // Merge new value
      };
      
      updatedTableData[index] = {
        ...updatedTableData[index],
        description: updatedDescription
      };
      
      // Calculate and update quantity for TON type
      const calculatedQuantity = calculateTonQuantity(updatedDescription);
      updatedTableData[index].quantity = calculatedQuantity;

      if (updatedTableData[index].unitPrice) {
        updatedTableData[index].amount = calculateAmount(
          calculatedQuantity,
          updatedTableData[index].unitPrice,
          updatedTableData[index].type
        );
      }
    } else {
      // For other fields, update normally
      updatedTableData[index] = {
        ...updatedTableData[index],
        [field]: value,
      };
    }

    const { quantity, unitPrice, type } = updatedTableData[index];

    if (field === "quantity" || field === "unitPrice" || field === "type") {
      if (type === "PCS" || type === "TON") {
        updatedTableData[index].amount = calculateAmount(quantity, unitPrice, type);
      } else {
        updatedTableData[index].amount = "";
      }
    }

    if (field === "type" && value === "TON") {
      // Initialize description object with empty values when switching to TON
      updatedTableData[index].description = {
        length1: "",
        length2: "",
        width: "",
        depth: ""
      };
      updatedTableData[index].quantity = "";
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
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
          {row.type === "TON" ? (
            <div style={{ display: "flex", gap: "4px" }}>
              <input
                type="text"
                placeholder=""
                value={row.description.length1 || ""}
                onChange={(e) =>
                  handleTableChange(index, "description", { length1: e.target.value })
                }
              />
              <span>"X</span>
              <input
                type="text"
                placeholder=""
                value={row.description.length2 || ""}
                onChange={(e) =>
                  handleTableChange(index, "description", { length2: e.target.value })
                }
              />
              <span>"-</span>
              <input
                type="text"
                placeholder=""
                value={row.description.width || ""}
                onChange={(e) =>
                  handleTableChange(index, "description", { width: e.target.value })
                }
              />
              <span>/</span>
              <input
                type="text"
                placeholder=""
                value={row.description.depth || ""}
                onChange={(e) =>
                  handleTableChange(index, "description", { depth: e.target.value })
                }
              />
              <span>'</span>
            </div>
          ) : (
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
            <span className="value">${nettTotal}</span>
          </div>
        </div>
      </div>

    </>
  );
};

export default DeliveryOrderPage;
