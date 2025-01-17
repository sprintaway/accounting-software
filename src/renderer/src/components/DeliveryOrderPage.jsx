import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import './DeliveryOrderPage.css'; // Importing a CSS file for styles.

const DeliveryOrderPage = () => {
  const [value, setValue] = React.useState(0)

  // Under General Tab
  const [deliveryOrderNumber, setDeliveryOrderNumber] = useState("")
  const [date, setDate] = useState("")
  const [customerCode, setCustomerCode] = useState("")
  const [salesManCode, setSalesManCode] = useState("")
  const [poNumber, setPoNumber] = useState("")
  const [orderBy, setOrderBy] = useState("")
  const [vehicleNumber, setVehicleNumber] = useState("")
  const [contact, setContact] = useState("")
  const [terms, setTerms] = useState("")
  const [rate, setRate] = useState("")
  const [grossTotal, setGrossTotal] = useState("")
  const [disc, setDisc] = useState("")
  const [subTotal, setSubTotal] = useState("")
  const [tax, setTax] = useState("")
  const [absorbTax, setAbsorbTax] = useState("")
  const [gst, setGst] = useState("")
  const [netTotal, setNetTotal] = useState("")

  // Under Details Tab
  const [companyName, setCompanyName] = useState("")
  const [address, setAddress] = useState("")
  const [telephone, setTelephone] = useState("")
  const [fax, setFax] = useState("")

  // Under Delivery Address Tab
  const [deliveryAddress, setDeliveryAddress] = useState("")

  return (
    <>
    <div>
        <Paper square>
            <Tabs
                value={value}
                textColor="primary"
                indicatorColor="primary"
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
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
        <div>
          <form>
            <div className="input-container">
              <label>Company Name</label>
              <input
                type="text"
                placeholder=""
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label>Address</label>
              <input
                type="text"
                placeholder=""
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label>Telephone</label>
              <input
                type="text"
                placeholder=""
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label>Fax</label>
              <input
                type="text"
                placeholder=""
                value={fax}
                onChange={(e) => setFax(e.target.value)}
              />
            </div>
          </form>
        </div>
      )}

      {value === 2 && (
        <div>
          <form>
            <div className="input-container">
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
    </>
  );
}

export default DeliveryOrderPage;
