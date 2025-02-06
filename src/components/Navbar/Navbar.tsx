
export const Nabvar = () => {
    return (
        <nav className="container mx-auto flex justify-between items-center p-4">
            <div className="text-xl font-bold text-red-600">Wallbit Challenge</div>

            <ul className="flex space-x-6 text-white font-medium">
                <li>
                    <a href="#" className="hover:text-red-500 transition-colors">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-red-500 transition-colors">
                        Compras
                    </a>
                </li>
            </ul>
        </nav>
    )
}
