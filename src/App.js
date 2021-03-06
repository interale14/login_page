import './App.css';
import Login from "./components/Pages/loginPage";
import BrandHeader from "./components/BrandHeader/brandHeader";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Pages/home";
import Todo from "./components/Pages/Todo/Todo";
import Covid from "./components/Pages/Covid/Covid";

function App() {
  return (
    <Router>
      <BrandHeader></BrandHeader>
      <section className="w-11/12 p-4 m-auto bg-indigo-100 border-2 border-gray-600 mt-28 md:mt-48 md:w-8/12 lg:w-5/12 md:p-10">
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
          <Route path="/todos" exact>
            <Todo></Todo>
          </Route>
          <Route path="/covid" exact>
            <Covid></Covid>
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;
