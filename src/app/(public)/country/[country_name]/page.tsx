import { countries } from "@/app/data/countries";
import Link from "next/link";

export default function CountryDetails({ params }: { params: { country_name: string } }) {

  const country = countries.find(c => c.name.toLowerCase() === params.country_name.toLowerCase());


  if (!country) {
    return <h1>Country not found</h1>;
  }

  return (
    <>



      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">{country.name}</h1>
        <p className="mt-2 text-gray-600">Capital: {country.capital}</p>
        <p className="mt-2 text-gray-600">Population: {country.population}</p>

        <Link href="/country" className="mt-4 inline-block text-blue-600 underline">
          Back to Country List
        </Link>
      </div>
    </>
  );
}