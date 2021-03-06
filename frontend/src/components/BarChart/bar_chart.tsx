import axios from 'axios'
import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { SaleSuccess } from 'types/sale'
import { round } from 'utils/format'
import { BASE_URL } from 'utils/requests'

type SeriesData = {
    name: string;
    data: number[],
}

type ChartData = {
    labels: {
        categories: string[]
    };
    series: SeriesData[];
}

const BarChart = () => {

    // useState para guardar um ChartData
    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: '',
                data: []
            }
        ]
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/success-by-seller`).then((response) => {

            // Convertendo a resposta para uma lista de objetos do tipo SaleSum
            const data = response.data as SaleSuccess[];

            // Mapeando os valores de sellerName e de sum para listas
            // é necessário para que seja possível usar no gráfico devido
            // ao formato de entrada que ele requer
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => round(100 * x.deals / x.visited, 1));

            setChartData({
                labels: {
                    categories: myLabels
                },
                series: [
                    {
                        name: '% Success',
                        data: mySeries
                    }
                ]
            });
        });
    }, []);

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    return (
        <Chart
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar"
            height="240"

        />
    );
}

export default BarChart;