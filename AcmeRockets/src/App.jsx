import Header from './components/Header'
import RocketMan from "./img/rocketman.png"
import RocketDab from "./img/rocketdab.png"
import RocketRide from "./img/rocketride.png"
import RocketLaunch from "./img/rocketlaunch.png"
function App() {
  return (
      <>
        <Header />
        <main className="max-w-4xl mx-auto">
          <section
            id="Hero"
            className="flex flex-col-reverse justify-center items-center sm:flex-row p-6 gap-8 mb-12 scroll-mt-20"
          >
            <article className="sm:w-1/2">
              <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
                We Boldy Go <span className="text-indigo-700 dark:text-indigo-300">Where No Rocket</span> Has Gone Before
              </h2>
              <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                We´re building rockets for the next century today. From the moon to Mars, Jupiter and beyond...
              </p>
              <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                Think Acme Rockets.
              </p>
            </article>
            <img className="w-1/2" src={RocketDab} alt="Rocket Icon" />
          </section>
          <hr className="mx-auto bg-black dark:bg-white w-1/2" />

          <section id="OurRockets" className="p-6 my-12 scroll-mt-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">Our Rockets</h2>
            <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
              <li
                className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid rounded-3xl border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px2"
              >
                <img src={RocketMan} alt="Explorer" className="p-6 w-1/2 mb-2" />
                <h3 className="text-3xl text-center text-slate-900 dark:text-white">Explorer</h3>
                <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">$</p>
                <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Affordable Exploration</p>
              </li>
              <li
                className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid rounded-3xl border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px2"
              >
                <img src={RocketRide} alt="Adventurer" className="p-6 w-1/2 mb-2" />
                <h3 className="text-3xl text-center text-slate-900 dark:text-white">Adventurer</h3>
                <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">$$</p>
                <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Best Selling Rocket</p>
              </li>
              <li
                className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid rounded-3xl border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px2"
              >
                <img src={RocketLaunch} alt="Infinity" className="p-6 w-1/2 mb-2" />
                <h3 className="text-3xl text-center text-slate-900 dark:text-white">Infinity</h3>
                <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">$$$</p>
                <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Luxury Starship!</p>
              </li>
            </ul>
            <hr className="mx-auto bg-black dark:bg-white w-1/2" />
          </section>
          <section id="Testimonials" className="p-6 my-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">Testimonials</h2>
          </section>
          <hr className="mx-auto bg-black dark:bg-white w-1/2" />
          <section id="Contact" className="p-6 my-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">Contact Us</h2>
          </section>
        </main>
      </>
  )
}

export default App
