import './Header.css'

const Header = () =>{
    return(
        <>
        <header className='Head'>
            <h1 className='main-text'>Sell-Control</h1>
            <div className='user-settings'>
                <p>Настройки</p>
                <p>Пользователь</p>
            </div>
        </header>
        </>
    )
}

export default Header;