import {BrowserRouter, Route, Switch} from "react-router-dom";
import {render} from "react-dom";
import AboutUs from "./Components/AboutUs";
import HrCommunity from "./Components/HRCommunity";
import News from "./Components/News";
import Rating from "./Components/Rating";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={AboutUs} exact/>
        <Route path="/hr-community" component={HrCommunity}/>
        <Route path="/news" component={News}/>
        <Route path="/rating" component={Rating}/>
      </Switch>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)