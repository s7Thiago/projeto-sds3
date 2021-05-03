import DataTable from "components/DataTable/datatable";
import Footer from "components/Footer/footer";
import NavBar from "components/NavBar/navBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá mundo!</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
