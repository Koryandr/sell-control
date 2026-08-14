import {useState} from "react";
import "./Products.css"
import { products } from "../data/products";
import Modal from 'react-modal';

Modal.setAppElement("#root");

const Products = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [quantity, setQuantity] = useState("");

    const openModal = () =>{
        setModalIsOpen(true);
    }

    const closeModal = () =>{
        setModalIsOpen(false);
    }

    const handleAdd = () =>{
        products.unshift({
        id: products.length+1 ,
        name: inputValue,
        quantity: Number(quantity)});

        closeModal();
    }

    const modalContent = (
        <div>
            <h2>Добавьте товар</h2>
            <input type="text" value={inputValue} onChange={event => setInputValue(event.target.value)} placeholder="Названия товара"/><br/>
            <input type="number" value={quantity} onChange={event => setQuantity(event.target.value)} placeholder="Количество"/><br/>
            <button onClick={handleAdd}>Добавить</button>
            <button onClick={closeModal}>Закрыть</button>
        </div>
    );

    return(
        <>
        <h1>Товары</h1>
        <button onClick={openModal}>+ Добавить товар</button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={"modal"} overlayClassName="modal-overlay">
            {modalContent}
        </Modal>

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