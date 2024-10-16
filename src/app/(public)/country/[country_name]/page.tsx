import CountryCard from "@/app/component/countryCard/countryCard";
import { countries } from "@/app/data/countries";


export default function CountryDetails({ params }: { params: { country_name: string } }) {

  const country = countries.find(c => c.name.toLowerCase() === params.country_name.toLowerCase());


  if (!country) {
    return <h1>Country not found</h1>;
  }

  return (
    <>
      <CountryCard country={country} />
    </>
  );
}