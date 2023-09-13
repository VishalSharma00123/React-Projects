import logo from '../../assets/investment-calculator-logo.png';
import Headerstyle from './Header.module.css'
const Header = () => {
    return (
        <header className={Headerstyle.header}>
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
        </header>)
}
export default Header;