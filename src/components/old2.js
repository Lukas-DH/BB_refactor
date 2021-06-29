import React, { createContext } from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import NavbarBank from "./components/navbar";
import Landing from "./components/landing.jsx";
import { UserContext } from "./components/UserContext";
import CreatAccount from "./components/CreateAccount";
import Balance from "./components/balance";
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

export default function BadBankRouter() {
  return (
    <>
      <HashRouter>
        <UserContext.Provider
          value={{
            useraccounts: [
              {
                name: "Abel",
                email: "abel@mit.edu",
                password: "secret",
                balance: 100,
              },
            ],
          }}
        >
          <NavbarBank />
          <hr />

          <div>
            <Route exact path="/" component={Landing}></Route>
            <Route path="/createaccount" component={CreatAccount}></Route>
            <Route path="/balance">
              <Balance />
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
          </div>
        </UserContext.Provider>
      </HashRouter>
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
