import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Accueil from "./components/Accueil";
import Admin from "./components/Admin";
import AddProduits from "./components/AddProduits";
import Historique from "./components/Historique";
import LoginPage from "./components/LoginPage";
import { Fragment } from "react";
import LogOut from "./components/LogOut";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsList from "./components/ProductsList";
import Actualitelist from "./components/Actualitelist";
import ProtectedAddActualites from "./components/ProtectedAddActualites";

const ProtectedAdminRoute = () => {
  const isAuthenticated = localStorage.getItem("token"); // Check if token exists in localStorage

  return isAuthenticated ? <Admin /> : <Link to="/login" />;
};

function App() {
  return (
    <div className="App">
      {/* <Accueil /> */}
      <Routes>
        <Fragment>
          <Route path="/" element={<Accueil />} />
          <Route path="/listactualite" element={<Actualitelist />} />
          <Route path="/listproduits" element={<ProductsList />} />
          <Route path="/histoire" element={<Historique />} />
          <Route path="/admin" element={<ProtectedAdminRoute />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/logout" element={<LogOut />} />
          <Route
            path="/admin/addarticles"
            element={<ProtectedAddActualites />}
          />
          <Route path="/admin/addproduits" element={<AddProduits />} />
        </Fragment>
      </Routes>
    </div>
  );
}

export default App;
