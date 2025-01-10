

function Card(props){
    const {country} = props;

    return(
        
        <ul>
            <li className="card">
                <img src={country.flag} alt="flag" />
                <div className="data_container">
                    <u>
                        <li>Country: {country.name}</li>
                        <li>Capital: {country.capital}</li>
                        <li>Pop: {country.population}</li>
                    </u>
                </div>
            </li>
        </ul>
    )
}


export default Card;