import './btnDarkMode.css';
import { useDarkModeContext } from '../../../context/DarkModeContext.js';

const BtnDarkMode = () => {

    const {toggleDarkMode} = useDarkModeContext();

    return (
           
            <div className="theme-switch-wrapper">
                <button type="button" onClick={() => toggleDarkMode()} className="btn btn-outline-dark">Dark</button>
            </div>

    );
}

export default BtnDarkMode;