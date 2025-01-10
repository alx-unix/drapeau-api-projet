import logo from '../assets/react.svg'


function Logo() {
    return ( 
        <div className='logo'>
            <img  src={logo} alt="logo" />
            <h3>React app</h3>
        </div>
    );
}

export default Logo;