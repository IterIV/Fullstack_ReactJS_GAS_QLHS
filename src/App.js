import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./page/login/Login";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import AdminTemplate from "./templates/AdminTemplate";
import AddNewDocument from "./page/AddNewProject/AddNewDocument";
import Dashboard from "./page/Dashboard/Dashboard";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <AdminTemplate exact path="/" component={Dashboard} />
          <AdminTemplate exact path="/themhoso" component={AddNewDocument} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
