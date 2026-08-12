import './Sales.css'
import {sales} from "../data/sales"

const Sales = () => {
    return(
        <>
        <h1>Продажи</h1>
        <button>+ Добавить операцию</button>

        <table>
            <thead>
                <tr>
                    <th>Товар</th>
                    <th>Продажи</th>
                    <th>Дата</th>
                </tr>
            </thead>
            <tbody>
                {sales.map(sale =>(
                    <tr key={sale.id}>
                        <td>{sale.name}</td>
                        <td>{sale.sum}</td>
                        <td>{sale.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default Sales;