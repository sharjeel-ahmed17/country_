import CountryItem from "@/app/component/counttryItem/CountryItem"
import { countries } from "@/app/data/countries"



const countryList = countries.slice(0, 5).map((item, i) => {
    return <CountryItem key={i} item={item} />
})

export default function Country() {
    return (
        <>
            <h1 className="bg-gray-200 text-center p-4 hover:text-green-500 mb-2">Country List  </h1>
            <ul>{countryList}</ul>
        </>
    )
}

