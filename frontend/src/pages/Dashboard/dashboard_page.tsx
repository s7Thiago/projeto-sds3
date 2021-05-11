import BarChart from "components/BarChart/bar_chart";
import DataTable from "components/DataTable/data_table";
import DonutChart from "components/DonutChart/donut_chart";
import Footer from "components/Footer/footer";
import NavBar from "components/NavBar/nav_bar";

const DashboardPage = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de vendas!</h1>

                <div className="row px-3">

                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                        <BarChart />
                    </div>

                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Todas as vendas</h5>
                        <DonutChart />
                    </div>
                </div>

                <div className="py-3">
                    <h2 className="text-primary">Todas as vendas</h2>
                </div>

                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default DashboardPage;