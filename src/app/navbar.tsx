import Link from "next/link";

export default function FeaturePage() {
    return (
        <nav className="flex bg-orange-200 py-5 px-5">
            
            <h1>SkinSync</h1>
            <ul className="flex ml-5">
                <Link href="/">
                    <li className="mr-6 cursor-pointer">Home</li>
                </Link>
                <Link href="/features">
                    <li className="mr-6 cursor-pointer">Features</li>
                </Link>
                <Link href="/team">
                    <li className="mr-6 cursor-pointer">Team</li>
                </Link>
                <Link href="/contact">
                    <li className="mr-6 cursor-pointer">Contact</li>
                </Link>
            </ul>
        </nav>
    )
}