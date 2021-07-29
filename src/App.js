import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {RoutePath} from "./data/route";
import ItemList from "./components/list/list"
import AboutUs from "./components/aboutus/aboutus"
import Details from "./components/details/details"
import "./App.css"
import Header from "./components/header/header";

function App() {
    return (
        <Provider store={store}>
             <Router>
              <Header/>
              <Switch>
                <Route path={RoutePath.list} component={ItemList}/>
                <Route path={RoutePath.details} component={Details}/>
                <Route path={RoutePath.aboutus} component={AboutUs}/>
                <Route exact path="/">
                  <Redirect to={RoutePath.aboutus}/>
                </Route>
              </Switch>
          </Router>
        </Provider>
    );
}

export default App;
