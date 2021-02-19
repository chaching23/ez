import React, { Component } from "react";
import Title from "../../component/Title";
import axios from "axios";

class EditCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: "",
      firstName: "",
      lastName: "",
      phone: "",
      country: "",
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
          customerName: responseData.customerName,
          firstName: responseData.contactFirstName,
          lastName: responseData.contactLastName,
          phone: responseData.phone,
          country: responseData.country,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, phone, country, customerName } = this.state;

    axios
      .post(`/customers/${this.props.match.params.customerNumber}/edit`, {
        firstName,
        lastName,
        phone,
        country,
        customerName,
      })
      .then((res) => {
        if (res.status === 404) {
          console.log(res.statusText + "-" + res.status);
        } else if (res.status === "500") {
          console.log(res.statusText + "-" + res.status);
        } else if (res.status === 200) {
          console.log(res.statusText + "-" + res.status);
        }
        this.props.history.push("/customers");
      });
  };
  render() {
    const { firstName, lastName, phone, country, customerName } = this.state;
    return (
      <>
        <div style={{ paddingTop: "60px", paddingLeft: "50px" }}>
          <Title title={"Edit Customer"} />
          <form onSubmit={this.handleSubmit}>
            <div className="form align-items-center">
              <div className="col-auto">
                <label className="sr-only">Business Name</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="customerName"
                  className="form-control mb-2"
                  id="inlineFormInput"
                  placeholder="Business Name"
                  value={customerName}
                />
              </div>
              <div className="col-auto">
                <label className="sr-only">Full Name</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="firstName"
                  className="form-control mb-2"
                  id="inlineFormInput"
                  placeholder="First Name"
                  value={firstName}
                />
              </div>
              <div className="col-auto">
                <label className="sr-only">Full Name</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="lastName"
                  className="form-control mb-2"
                  id="inlineFormInput"
                  placeholder="Last Name"
                  value={lastName}
                />
              </div>

              <div className="col-auto">
                <label className="sr-only">phone</label>
                <input
                  onChange={this.handleChange}
                  name="phone"
                  type="text"
                  className="form-control mb-2"
                  id="inlineFormInputGroup"
                  placeholder="Phone"
                  value={phone}
                />
              </div>
              <div className="col-auto">
                <label className="sr-only">Country</label>
                <input
                  onChange={this.handleChange}
                  name="country"
                  type="text"
                  className="form-control mb-2"
                  id="inlineFormInput"
                  placeholder="Country"
                  value={country}
                />
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-2">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default EditCustomer;
