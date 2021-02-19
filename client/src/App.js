import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Error404 from "./component/Error404";
import Navbar from "./Navbar";
import AllCustomers from "./Pages/Customers";
import CreateCustomer from "./Pages/Customers/CreateCustomer";
import EditCustomer from "./Pages/Customers/EditCustomer";
import ViewCustomers from "./Pages/Customers/ViewCustomer";
import Home from "./Pages/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/customers" component={AllCustomers} />
            <Route exact path="/customers/create" component={CreateCustomer} />
            <Route
              exact
              path="/customers/:customerNumber"
              component={ViewCustomers}
            />
            <Route
              exact
              path="/customers/:customerNumber/edit"
              component={EditCustomer}
            />
            <Route exact path="/error" component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
