import React, { Component } from "react";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import Title from "../../component/Title";
const axios = require("axios");

class ViewCustomers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: null,
    };
  }
  componentDidMount() {
    console.log(this.props);
    axios
      .get(`/customers/${this.props.match.params.customerNumber}`)
      .then((response) => {
        // console.log(response.data);
        const responseData = response.data;
        this.setState({
          customer: responseData,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { customer } = this.state;
    return (
      <>
        <Navbar />
        <div style={{ paddingTop: "60px", paddingLeft: "50px" }}>
          {customer ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Title title={customer.customerName} />
                <Link to="customers/create" className="btn btn-success">
                  View Orders
                </Link>
              </div>

              {Object.entries(this.state.customer).map(([key, value]) => (
                <div
                  key={key}
                  style={{
                    display: "flex",
                    // justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3>
                    {key}: {"  "}
                  </h3>
                  {value}
                </div>
              ))}
            </div>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </>
    );
  }
}

export default ViewCustomers;
