import { countries } from "@/app/data/countries"
import Link from "next/link"

export default function Country() {
    return (
        <>
            <h1 className="bg-red-200">country list </h1>
            <ul>
                <li>
                    {
                        countries.slice(0, 5).map((item, i) => {
                            return <li key={i}>
                                <Link href={`/country/${item.name}`}>{item.name.toLocaleLowerCase()}</Link>
                            </li>
                        })
                    }

                </li>
                {/* massi code */}
                {/* <li>
                    <Link href="/country/india">india</Link>
                </li>
                <li>
                    <Link href="/country/bangladesh">bangladesh</Link>
                </li>
                <li>
                    <Link href="/country/srilanka">srilanka</Link>
                </li>
                <li>
                    <Link href="/country/afghanistan">afghanistan</Link>
                </li> */}
            </ul>
        </>
    )
}