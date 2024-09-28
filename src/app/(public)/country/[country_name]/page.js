
// import { countries } from '@/app/data/countries';

export default function CountryPage({ params }) {
    // const country = countries.find((c) => c.id === params.id);

    return (
        <div>

            <h1>{params.country_name}</h1>
            {/* <p>{country.population}</p>
            <p>{country.capital}</p> */}


        </div>
    );
}
