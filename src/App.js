import { BrowserRouter } from "react-router-dom";
import Routing from "./components/Routing";

const App = () => {
  return (
    <div className="App">
      <div className="d-flex justify-content-center flex-column align-items-center ">
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
