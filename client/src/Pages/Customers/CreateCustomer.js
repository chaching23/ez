import React, { Component } from "react";
import Title from "../../component/Title";
import axios from "axios";

class CreateCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: "",
      firstName: "",
      lastName: "",
      phone: "",
      country: "",
      null: true,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // phoneNumber = (e) => {
  //   var phoneNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  //   if (e.match(phoneNo)) {
  //     return true;
  //   } else {
  //     alert("not valid #");
  //     // break;
  //     return;
  //   }
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    const { customerName, firstName, lastName, phone, country } = this.state;
    const phoneNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (customerName.length === 0) {
      this.setState({
        null: false,
      });
      alert("Customer cannot be empty");
      return;
    }

    if (firstName.length === 0) {
      this.setState({
        null: false,
      });
      alert("First Name cannot be empty");
      return;
    }

    if (lastName.length === 0) {
      this.setState({
        null: false,
      });
      alert("last Name cannot be empty");
      return;
    }

    if (country.length === 0) {
      this.setState({
        null: false,
      });
      alert("Country cannot be empty");
      return;
    }

    if (!phone.match(phoneNo)) {
      alert("not valid #");
      return;
    }

    console.log("123", customerName.length);
    // this.phoneNumber(phone);

    // if (
    //   customerName.length > 0 &&
    //   firstName.length > 0 &&
    //   lastName.length > 0 &&
    //   country.length > 0
    // ) {
    //   this.setState({
    //     null: false,
    //   });
    //   return;
    // }

    axios
      .post(`/customers/new`, {
        customerName,
        firstName,
        lastName,
        phone,
        country,
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
    // }
  };
  render() {
    return (
      <>
        <div style={{ paddingTop: "60px", paddingLeft: "50px" }}>
          <Title title={"Add Customer"} />
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
                />
                {/* {this.state.null != false ? <p>Cannot be empty </p> : null} */}
                {/* {this.state.null != false ? <p>Cannot be empty </p> : null} */}
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
                  // {this.state.null != false ? <p>Cannot be empty </p> : null}
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

export default CreateCustomer;
