
import {RouterProvider} from "react-router-dom";
import Router from "./Router";
import './main.css';
import './main.css.map';

function App() {

  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
