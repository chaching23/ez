import React, { Component } from "react";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import Title from "../../component/Title";
const axios = require("axios");

class AllCustomers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };
  }
  componentDidMount() {
    axios
      .get("/customers")
      .then((response) => {
        // console.log(response.data);
        const responseData = response.data;
        this.setState({
          customers: responseData,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <Navbar />
        <div style={{ paddingTop: "60px", paddingLeft: "50px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Title title={"All Customers"} />
            <Link to="customers/create" className="btn btn-success">
              Add customer
            </Link>
          </div>

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.customers.map((customer) => (
                <tr key={customer.customerNumber}>
                  <th scope="row" key={customer.customerNumber}>
                    {customer.customerNumber}
                  </th>
                  <td key={customer.name}>{customer.customerName}</td>
                  <td key={customer.phone}>{customer.phone}</td>
                  <td>
                    <Link
                      className="btn btn-outline-primary"
                      to={`/customers/${customer.customerNumber}`}
                    >
                      {" "}
                      View
                    </Link>
                    <Link
                      className="btn btn-secondary"
                      to={`/customers/${customer.customerNumber}/edit`}
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default AllCustomers;
