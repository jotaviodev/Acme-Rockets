export default function Header(){
    return(

        <header className="bg-teal-700 text-white sticky top-0 z-10">
        <section className="max-w-4xl mx-auto p-4 flex justify-between itens-center">
            <a href="#Hero">🚀 Acme Rockets</a>
            <div>
            <button id="open-mobile-button" className="text-3xl sm:hidden focus:outline-none">&#9776;</button>
            <nav className="hidden sm:block text-xl space-x-8" aria-label="main">
                <a href="#OurRockets" className="hover:opacity-90">Our Rockets </a>
                <a href="#Testimonials" className="hover:opacity-90">Testimonials </a>
                <a href="#Contact" className="hover:opacity-90">Contact </a>
            </nav>
            </div>
        </section>
        </header>
    )
}
