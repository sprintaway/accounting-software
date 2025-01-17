import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

const DeliveryOrderPage = () => {
  const [value, setValue] = React.useState(0)

  // Under General Tab
  const [deliveryOrderNumber, setDeliveryOrderNumber] = useState("")
  const [date, setDate] = useState("")
  const [customerCode, setCustomerCode] = useState("")
  const [salesManCode, setSalesManCode] = useState("")
  const [poNumber, setpoNumber] = useState("")
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
    <div style={{marginLeft: "40%", }}>
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
                {/* <h3>TAB NO: {value} clicked!</h3> */}
            </Paper>
    </div>

    {value === 0 && (
        <div>
          <fieldset>
          <form>
            <label>
              Delivery Order No.  
            </label>
            <input
              type="text"
              placeholder=""
              value={deliveryOrderNumber}
              onChange={(e) => setDeliveryOrderNumber(e.target.value)}
            />
            <label>
              Date 
            </label>
            <input
              type="date"
              placeholder=""
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label>
              Customer Code 
            </label>
            <input
              type="text"
              placeholder=""
              value={customerCode}
              onChange={(e) => setCustomerCode(e.target.value)}
            />
            <label>
              Salesman Code 
            </label>
            <input
              type="text"
              placeholder=""
              value={salesManCode}
              onChange={(e) => setSalesManCode(e.target.value)}
            />
            <label>
              P/O Number 
            </label>
            <input
              type="text"
              placeholder=""
              value={poNumber}
              onChange={(e) => setpoNumber(e.target.value)}
            />
            <label>
              Order By 
            </label>
            <input
              type="text"
              placeholder=""
              value={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
            />
            <label>
              Vehicle Number 
            </label>
            <input
              type="text"
              placeholder=""
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
            />
            <label>
              Contact 
            </label>
            <input
              type="text"
              placeholder=""
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <label>
              Terms 
            </label>
            <input
              type="text"
              placeholder=""
              value={terms}
              onChange={(e) => setTerms(e.target.value)}
            />
            <label>
              Rate
            </label>
            <input
              type="text"
              placeholder=""
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <label>
              Gross Total
            </label>
            <input
              type="text"
              placeholder=""
              value={grossTotal}
              onChange={(e) => setGrossTotal(e.target.value)}
            />
            <label>
              Disc
            </label>
            <input
              type="text"
              placeholder=""
              value={disc}
              onChange={(e) => setDisc(e.target.value)}
            />
            <label>
              Sub-total
            </label>
            <input
              type="text"
              placeholder=""
              value={subTotal}
              onChange={(e) => setSubTotal(e.target.value)}
            />
            <label>
              Tax
            </label>
            <input
              type="text"
              placeholder=""
              value={tax}
              onChange={(e) => setTax(e.target.value)}
            />
            <label>
              Absorb Tax
            </label>
            <input
              type="text"
              placeholder=""
              value={absorbTax}
              onChange={(e) => setAbsorbTax(e.target.value)}
            />
            <label>
              GST
            </label>
            <input
              type="text"
              placeholder=""
              value={gst}
              onChange={(e) => setGst(e.target.value)}
            />
            <label>
              Nett Total
            </label>
            <input
              type="text"
              placeholder=""
              value={netTotal}
              onChange={(e) => setNetTotal(e.target.value)}
            />
          </form>
          </fieldset>
        </div>
      )}

      {value === 1 && (
        <div>
          <form>
            <input
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="Telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Fax"
              value={fax}
              onChange={(e) => setFax(e.target.value)}
            />
          </form>
        </div>
      )}

      {value === 2 && (
        <div>
          <form>
            <textarea
              placeholder="Enter Delivery Address"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
            />
          </form>
        </div>
      )}

    <div>This is the Delivery Order Page!</div>
    <button className="delivery-order-button">
            <Link to="/" className="button-link">
            Main Page
            </Link>
    </button>
    </>
  )
}

export default DeliveryOrderPage