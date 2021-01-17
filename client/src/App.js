import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Users from "./components/adminPages/users/viewUsers";
import AppRoute from "./components/layouts/appRoutes";
import AdminDashboard from "./components/layouts/adminDashboard";
import Login from "./components/Auth/login";
import SignUp from "./components/Auth/signup";
import HostelOwner from "./components/adminPages/users/hostelOwners";
import indexCategory from "./components/adminPages/category/indexCategory";
import editCategory from "./components/adminPages/category/editCategory";
import IndexHostel from "./components/adminPages/hostels/indexHostel";
import AddHostel from "./components/adminPages/hostels/addHostel";
import IndexAgent from "./components/adminPages/agents/indexAgent";
import EditHostel from "./components/adminPages/hostels/editHostel";
import AddHostelImage from "./components/adminPages/hostels/AddImage";
import AddAgent from "./components/adminPages/agents/addAgent";
import AddAboutUs from "./components/adminPages/aboutUs/addAboutUs";
import indexAboutUs from "./components/adminPages/aboutUs/indexAboutUs";
import EditAboutUs from "./components/adminPages/aboutUs/editAboutUs";
import EditAgent from "./components/adminPages/agents/editAgent";
import UserLayout from "./components/layouts/userLayout";
import Home from "./components/ClientPages/homePage/home";
import SignUpUser from "./components/Auth/signupUser";
import BoysHostelList from "./components/ClientPages/boysHostel";
import GirlsHostelList from "./components/ClientPages/girlsHostel";
import About from "./components/ClientPages/about";
function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Switch>
          <AppRoute path="/admin" layout={AdminDashboard} component={Users} />
          <AppRoute
            path="/getHostelOwners"
            layout={AdminDashboard}
            component={HostelOwner}
          />
          <AppRoute path="/users" layout={AdminDashboard} component={Users} />
          <AppRoute
            path="/category"
            layout={AdminDashboard}
            component={indexCategory}
          />
          <AppRoute
            path="/editCategory/:id"
            layout={AdminDashboard}
            component={editCategory}
          />
          <AppRoute
            path="/hostel"
            layout={AdminDashboard}
            component={IndexHostel}
          />
          <AppRoute
            path="/addHostel"
            layout={AdminDashboard}
            component={AddHostel}
          />
          <AppRoute
            path="/editHostel/:id"
            layout={AdminDashboard}
            component={EditHostel}
          />
          <AppRoute
            path="/addHostelImage/:id"
            layout={AdminDashboard}
            component={AddHostelImage}
          />
          <AppRoute
            path="/aboutus"
            layout={AdminDashboard}
            component={indexAboutUs}
          />
          <AppRoute
            path="/addabout"
            layout={AdminDashboard}
            component={AddAboutUs}
          />
          <AppRoute
            path="/editAboutUs/:id"
            layout={AdminDashboard}
            component={EditAboutUs}
          />
          <AppRoute
            path="/Agent"
            layout={AdminDashboard}
            component={IndexAgent}
          />
          <AppRoute
            path="/addAgent"
            layout={AdminDashboard}
            component={AddAgent}
          />
          <AppRoute
            path="/editAgent/:id"
            layout={AdminDashboard}
            component={EditAgent}
          />
          <Route path="/signupOwner" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/signup-user" component={SignUpUser} />
          <AppRoute
            path="/boys-hostel"
            layout={UserLayout}
            component={BoysHostelList}
          />
          <AppRoute
            path="/girls-hostel"
            layout={UserLayout}
            component={GirlsHostelList}
          />
          <AppRoute path="/about" layout={UserLayout} component={About} />
          <AppRoute path="/" layout={UserLayout} component={Home} />
        </Switch>
      </Provider>
    </React.Fragment>
  );
}

export default App;
