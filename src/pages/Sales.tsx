import './Sales.css'

const Sales = () => {
    return(
        <>
        <h1>Продажи</h1>
        <button>+ Добавить операцию</button>

        <table>
            <thead>
                    <tr>
                        <th>Товар</th>
                        <th>Сумма</th>
                        <th>Дата</th>
                    </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>Смартфоны</td>
                        <td>7 000 kzt</td>
                        <td>23.04.2024</td>
                    </tr>
                    <tr>
                        <td>Чайники</td>
                        <td>7 000 kzt</td>
                        <td>26.04.2024</td>
                    </tr>
                    <tr>
                        <td>Кофе</td>
                        <td>3 200 kzt</td>
                        <td>22.04.2025</td>
                    </tr>
                    <tr>
                        <td>Ноутбуки</td>
                        <td>70 000 kzt</td>
                        <td>20.04.2026</td>
                    </tr>
            </tbody>
        </table>
        </>
    )
}

export default Sales;