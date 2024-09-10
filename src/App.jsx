import AppRoutes from "./router";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
