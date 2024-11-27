import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateTemplateForm from "./components/CreateTemplateForm";
import Sidebar from "./components/Sidebar/Sidebar";
import TemplateList from "./components/TemplateList";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div
              className="flex"
              style={{
                background:
                  "        linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(217,217,228,1) 0%, rgba(255,0,221,0.12230829831932777) 95%) ",
              }}
            >
              <Sidebar />
              <div>
                <TemplateList />
              </div>
            </div>
          }
        />
        <Route
          path="/create"
          element={
            <div
              className="flex"
              style={{
                background:
                  "        linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(217,217,228,1) 0%, rgba(255,0,221,0.12230829831932777) 95%) ",
              }}
            >
              <Sidebar />
              <div>
                <CreateTemplateForm />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
