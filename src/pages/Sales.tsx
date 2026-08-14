import './Sales.css'
import {sales} from "../data/sales"
import Modal from 'react-modal';
import {useState} from "react";

Modal.setAppElement("#root");

const Sales = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [sum, setSum] = useState("");
    const [date,setDate] = useState("");

    const openModal = () =>{
        setModalIsOpen(true);
    }

    const closeModal = () =>{
        setModalIsOpen(false);
    }

    const handleAdd = () => {
        sales.unshift({
            id: sales.length + 1,
            name: inputValue,
            sum: Number(sum),
            date: date
        });

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

    return(
        <>
        <h1>Продажи</h1>
        <button onClick={openModal}>+ Добавить операцию</button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={"modal"} overlayClassName="modal-overlay">
            {modalContent}
        </Modal>

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