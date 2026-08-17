import './Sales.css'
import { sales as initialSales } from "../data/sales";
import Modal from 'react-modal';
import {useState} from "react";

Modal.setAppElement("#root");

const Sales = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [sum, setSum] = useState("");
    const [date,setDate] = useState("");
    const [idDelete,setIdDelete] = useState(0);
    const [deleteModalIsOpen,setDeleteModalIsOpen] = useState(false);
    const [sales,setSales] = useState(initialSales);
    const [name,setName] = useState("");

    const handleDelete = (id: number,name: string) =>{
        setIdDelete(id);
        setName(name);
        openDeleteModal();
    }

    const confirmDelete = () =>{
        setSales(sales.filter(sale => sale.id !== idDelete))
        closeDeleteModal();
    }

    const openDeleteModal = () =>{
        setDeleteModalIsOpen(true);
    }

    const closeDeleteModal = () =>{
        setDeleteModalIsOpen(false);
    }

    const openModal = () =>{
        setModalIsOpen(true);
    }

    const closeModal = () =>{
        setModalIsOpen(false);
    }

    const handleAdd = () => {
        setSales([{
            id: sales.length + 1,
            name: inputValue,
            sum: Number(sum),
            date: date,
        }, ...sales])

        closeModal();
    }
    
        const modalContent = (
            <div>
                <h2>Добавьте товар</h2>
                <input type="text" value={inputValue} onChange={event => setInputValue(event.target.value)} placeholder="Названия товара"/><br/>
                <input type="number" value={sum} onChange={event => setSum(event.target.value)} placeholder="Сумма"/><br/>
                <input type='date' value={date} onChange={event => setDate(event.target.value)} placeholder='Дата'/><br/>
                <button onClick={handleAdd}>Добавить</button>
                <button onClick={closeModal}>Закрыть</button>
            </div>
        );

        const deleteModalContent = (
            <div>
                <h2>Вы действительно хотите удалить товар "{name}"?</h2>
                <button onClick={confirmDelete}>Удалить</button>
                <button onClick={closeDeleteModal}>Отмена</button>
            </div>
        )

    return(
        <>
        <h1>Продажи</h1>
        <button onClick={openModal}>+ Добавить операцию</button>
        
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={"modal"} overlayClassName="modal-overlay">
            {modalContent}
        </Modal>
        <Modal isOpen={deleteModalIsOpen} onRequestClose={closeDeleteModal} className={"modal"} overlayClassName="modal-overlay">
            {deleteModalContent}
        </Modal>

        <table>
            <thead>
                <tr>
                    <th>Товар</th>
                    <th>Продажи</th>
                    <th>Дата</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {sales.map(sale =>(
                    <tr key={sale.id}>
                        <td>{sale.name}</td>
                        <td>{sale.sum}</td>
                        <td>{sale.date}</td>
                        <button onClick={() =>{handleDelete(sale.id,sale.name)}}>🗑️</button>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default Sales;