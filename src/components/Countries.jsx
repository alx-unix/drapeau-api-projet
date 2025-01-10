import { useState,useEffect } from "react";
import {getCountries} from '../services/api'
import Card from "./Card";
import axios from 'axios'

function Countries(props){
    const [data, setData] = useState([])
    const [sortData,setSortData] = useState([])

    useEffect(()=>{
        // const loadCountries = async()=>{
        //     const results = await getCountries()
        //     setData(results.data)
        // }
        // loadCountries()
            axios.get(
        "https://restcountries.com/v2/all?fields=name,population,flag,region,capital"
    ).then((res)=> setData(res.data))

    },[])

    const sortedCountry = ()=>{
        setSortData()
    }

    return(
        
        <div className="countries_liste">
            {
                data
                .map((country)=>(<Card country= {country} key={country.name}/>))    
            }

        </div>
    )
}

export default Countries;