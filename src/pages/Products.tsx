import "./Products.css"
import { useState } from "react";

const Products = () => {


    return(
        <>
        <h1>Товары</h1>
        <button>+ Добавить товар</button>

        <table>
            <thead>
                    <tr>
                        <th>Товар</th>
                        <th>Количество</th>
                    </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>Смартфоны</td>
                        <td>20 000</td>
                    </tr>
                    <tr>
                        <td>Чайники</td>
                        <td>3 500</td>
                    </tr>
                    <tr>
                        <td>Кофе</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td>Ноутбуки</td>
                        <td>70 000</td>
                    </tr>
            </tbody>
        </table>
        </>
    )
}

export default Products;