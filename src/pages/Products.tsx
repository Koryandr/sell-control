import {useState} from "react";
import "./Products.css"
import { products as initialProducts } from "../data/products";
import Modal from 'react-modal';

Modal.setAppElement("#root");

const Products = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [quantity, setQuantity] = useState("");
    const [products, setProducts] = useState(initialProducts);
    const [idDelete, setIdDelete] = useState(0);
    const [deleteModalIsOpen,setDeleteModalIsOpen] = useState(false);
    const [changeModalIsOpen,setChangeModalIsOpen] = useState(false);
    const [productName, setProductName] = useState("");
    const [idChange,setIdChange] = useState(0);
    const [changeName, setChangeName] = useState("");
    const [changeQuantity,setChangeQuantity] = useState("");

    const openModal = () =>{
        setModalIsOpen(true);
    }
    const closeModal = () =>{
        setModalIsOpen(false);
    }

    const openDeleteModal = () =>{
        setDeleteModalIsOpen(true);
    }
    const closeDeleteModal = () =>{
        setDeleteModalIsOpen(false);
    }

    const openChangeModal = () =>{
        setChangeModalIsOpen(true);
    }
    const closeChangeModal = () =>{
        setChangeModalIsOpen(false);
    }

    const handleDelete = (id: number,name: string) =>{
        setIdDelete(id);
        setProductName(name);
        openDeleteModal();
    }
    const handleChange = (id: number, name: string, quantity: number) => {
        setIdChange(id);
        setProductName(name);
        setChangeName(name)
        setChangeQuantity(String(quantity));
        openChangeModal();
    }

    const confirmDelete = () =>{
        setProducts(products.filter(product => product.id !== idDelete));
        closeDeleteModal();
    }
    const confirmSave = () =>{
        setProducts(products.map(product =>{
            if(product.id === idChange){
                return{
                    ...product,
                    name: changeName,
                    quantity: Number(changeQuantity)
                }
            }
            return product;
        }))
        closeChangeModal();
    }

    const handleAdd = () =>{
        setProducts([{
            id: products.length + 1,
            name: inputValue,
            quantity: Number(quantity),
        }, ...products])

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
    const deleteModalContent = (
            <div>
                <h2>Вы действительно хотите удалить товар "{productName}"?</h2>
                <button onClick={confirmDelete}>Удалить</button>
                <button onClick={closeDeleteModal}>Отмена</button>
            </div>
    );
    const changeModalContent = (
        <div>
            <h2>Вы действительно хотите редактировать товар "{productName}"?</h2>
            <input type="text" value={changeName} onChange={event => {setChangeName(event.target.value)}} placeholder="Названия товара"/><br/>
            <input type="number" value={changeQuantity} onChange={event => {setChangeQuantity(event.target.value)}} placeholder="Количество"/><br/>
            <button onClick={confirmSave}>Сохранить</button>
            <button onClick={closeChangeModal}>Отмена</button>
        </div>
    )

    return(
        <>
        <h1>Товары</h1>
        <button onClick={openModal}>+ Добавить товар</button>

        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={"modal"} overlayClassName="modal-overlay">
            {modalContent}
        </Modal>
        <Modal isOpen={deleteModalIsOpen} onRequestClose={closeDeleteModal} className={"modal"} overlayClassName="modal-overlay">
                    {deleteModalContent}
        </Modal>
        <Modal isOpen={changeModalIsOpen} onRequestClose={closeChangeModal} className={"modal"} overlayClassName="modal-overlay">
                    {changeModalContent}
        </Modal>

        <table>
            <thead>
                <tr>
                    <th>Товар</th>
                    <th>Количество</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td><button onClick={() => {handleDelete(product.id,product.name)}}>🗑️</button>
                        <button onClick={() => {handleChange(product.id,product.name,product.quantity)}}>✏️</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default Products;