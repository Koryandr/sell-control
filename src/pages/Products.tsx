import React, {useState} from "react";
import "./Products.css"
import { products } from "../data/products";
import Modal from 'react-modal';

const Products = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () =>{
        setModalIsOpen(true);
    }

    const closeModal = () =>{
        setModalIsOpen(false);
    }

    const modalContent = (
        <div>
            <h2>Заголовок модального окна</h2>
            <p>Текст модального окна</p>
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