import Link from 'next/link';
import React from 'react'

interface IcountryItem {
    name: string;

}

export default function CountryItem({ item }: { item: IcountryItem }) {
    return (
        <li className="hover:bg-slate-500 capitalize">
            <Link className="p-4" href={`/country/${item.name}`}>{item.name.toLocaleLowerCase()}</Link>
        </li>
    )
}
