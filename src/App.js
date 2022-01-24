import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./page/login/Login";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
