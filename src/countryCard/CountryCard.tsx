import { Country } from "../types/countries"
import './CountryCard.css'
interface CountryCardProps  {
    country: Country
}

export const CountryCard = ({country}: CountryCardProps) => {
    return (
        <article className="countryContainer">
            <h2 className="countryName">{country.name}</h2>
            <img className="countryImage" src={country.image} alt={`${country.name} flag`} />
            <div className="infoContainer">
                <div className="aditionalInfo">
                    <h3 className="titleInfo">Captain: {country.soccerCaptain.name}</h3>
                    <p>Position: {country.soccerCaptain.position}</p>
                    <p>Age: {country.soccerCaptain.age}</p>
                </div>
                <div className="aditionalInfo">
                    <h3 className="titleInfo">Coach: {country.coach.name}</h3>
                    <p>Age: {country.coach.age}</p>
                </div>
            </div>

        </article>
    )
}