import "./Products.css"
import { products } from "../data/products";

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
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default Products;