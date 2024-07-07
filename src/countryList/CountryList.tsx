import { COUNTRIES } from "../constants/countries"
import { CountryCard } from "../countryCard"
import './CountryList.css'
export const CountryList = () => {
    return (
        <section className="container">
            {COUNTRIES.map(country => {
                return (
                    <CountryCard key={country.name} country={country} />
                )
            })}
        </section>
    )
}