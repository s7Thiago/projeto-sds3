import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

const DataTable = () => {

    // usado para alterar o estado no componente de paginação
    const [activePage, setActivePage] = useState(0);

    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    // usando o useEffect porque quero chamar os dados somente quando o componente carregar
    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=15&sort=date,desc`).then((response) => {
            /* Como o objeto que vem da requisição tem a mesma estrutura montada no objeto
            SalePage, é permitido passar ele na função setPage sem problemas  */
            setPage(response.data);
        });
    }, [activePage]); // Sempre que o active page mudar, o observer avisará o componente para atualizar

    // Função que aciona o evento de atualização do estado activePage
    const changePage = (index: number) => {
        setActivePage(index);
    };

    return (
        <>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(item => (
                            // A propriedade Key é uma particularidade do React, o qual exige que quando
                            // estamos renderizando uma coleção, é preciso definir um id único para cada
                            // item dessa coleção. Ele exige isso para poder gerenciar melhor a coleção
                            <tr key={item.id}>
                                <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                                <td>{item.seller.name}</td>
                                <td>{item.visited}</ td>
                                <td>{item.deals}</td>
                                <td>{item.amount.toFixed(2)}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <Pagination page={page} onPageChange={changePage} />
        </>
    );
}

export default DataTable;