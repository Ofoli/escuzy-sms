import './App.css';

//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Download from "./pages/Download";
import Billing from "./pages/Billing";
import Service from "./pages/Service";

//components
import Layout from "./components/layout/Layout.jsx"

//others
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route path='/billing'><Billing/></Route>
          <Route path='/product-and-services'><Service/></Route>
          <Route path='/contact-us'><Contact/></Route>
          <Route path='/download'><Download/></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
