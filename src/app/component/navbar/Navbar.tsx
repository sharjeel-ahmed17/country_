import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="flex gap-4 p-2 bg-green-500">
                <Link href="/">Home</Link>
                <Link href="/country">Country List</Link>

            </div>
        </>
    )
}