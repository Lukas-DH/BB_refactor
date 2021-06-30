import React, { createContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavbarBank from "./components/navbar";
import Landing from "./components/landing.jsx";

import CreatAccount from "./components/CreateAccount";

import AllData from "./components/allData";
import Deposit from "./components/Deposit";
import Withdrawl from "./components/withdraw";
import Old from "./components/old";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export const UserContext = createContext(null);

export default function BadBankRouter() {
  return (
    <>
      <Router>
        <UserContext.Provider
          value={{
            useraccounts: [
              {
                name: "Abel",
                email: "abel@mit.edu",
                password: "secret",
                balance: 100,
              },
              {
                name: "jimmy",
                email: "jimmy@mit.edu",
                password: "secret",
                balance: 100,
              },
            ],
          }}
        >
          <NavbarBank />
          <hr />

          <div>
            <Switch>
              <Route exact path="/">
                <Landing />
              </Route>
              <Route path="/createaccount">
                <CreatAccount />
              </Route>

              <Route path="/deposit">
                <Deposit />
              </Route>
              <Route path="/withdrawl">
                <Withdrawl />
              </Route>
              <Route path="/alldata">
                <AllData />
              </Route>
              <Route path="/old">
                <Old />
              </Route>
            </Switch>
          </div>
        </UserContext.Provider>
      </Router>
    </>
  );
}

// You can think of these components as "pages"
// in your app.

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
