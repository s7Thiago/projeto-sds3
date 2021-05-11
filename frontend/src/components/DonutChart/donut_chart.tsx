import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[],
    series: number[],

};

const DonutChart = () => {

    // O useState nunca muda, por isso definimos como const, os dados dentro dele podem, mas
    // a referência em si será sempre a mesma. Aqui foi definido um nome para o useState
    // (chartData), uma função de atualização (setChartData), uma atribuição para
    // tornar a variável um useState de tipo genérico ChartData, seguido do valor inicial
    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    /* Aqui está sedo feita a chamada da API para trazer os dados para o gráfico. O primeiro
    parâmetro é uma função que vai ser executada durante a instanciação ou destruição do
    componente, o segundo é uma lista de objetos que o useEffect vai observar, ou seja, quando
    eles tiverem seus valores alterados, o useEffect será executado novamente No momento,
    nada será passado no segundo parâmetro. Sem essa estrutura com o useEffect, a
    requisição pode entrar em loop e estourar a memória do browser
    */
    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`).then((response) => {

            // Convertendo a resposta para uma lista de objetos do tipo SaleSum
            const data = response.data as SaleSum[];

            // Mapeando os valores de sellerName e de sum para listas
            // é necessário para que seja possível usar no gráfico devido
            // ao formato de entrada que ele requer
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);

            setChartData({ labels: myLabels, series: mySeries });
        });
    }, []);

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