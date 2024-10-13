import { countries } from "@/app/data/countries"
import Link from "next/link"


const countryList = countries.slice(0, 5).map((item, i) => {
    return <Card key={i} item={item} />
})

export default function Country() {
    return (
        <>
            <h1 className="bg-gray-200 text-center p-4 hover:text-green-500 mb-2">Country List  </h1>
            <ul>{countryList}

            </ul>

        </>
    )
}

function Card({ item }: { item: any }) {
    return (
        <li className="hover:bg-slate-500 capitalize">
            <Link className="p-4" href={`/country/${item.name}`}>{item.name.toLocaleLowerCase()}</Link>
        </li>
    )
}