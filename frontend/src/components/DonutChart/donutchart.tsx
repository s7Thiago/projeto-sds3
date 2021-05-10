import axios from 'axios';
import Chart from 'react-apexcharts'
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[],
    series: number[],

};

const DonutChart = () => {

    //! Forma errada
    let chartData: ChartData = { labels: [], series: [] };

    //! Forma errada
    axios.get(`${BASE_URL}/sales/amount-by-seller`).then((response) => {

        // Convertendo a resposta para uma lista de objetos do tipo SaleSum
        const data = response.data as SaleSum[];

        // Mapeando os valores de sellerName e de sum para listas
        // é necessário para que seja possível usar no gráfico devido
        // ao formato de entrada que ele requer
        const myLabels = data.map(x => x.sellerName);
        const mySeries = data.map(x => x.sum);

        chartData = { labels: myLabels, series: mySeries }
        console.table(response);
    });

    /* const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    } */

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"

        />
    );
}


export default DonutChart;