import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="bg-gray-100">
            <Head>
                <title>Tour du Mont Blanc - Site Web Officiel</title>
                <meta name="description" content="Suivez notre aventure du tour du Mont Blanc en temps réel : itinéraire, budget, cagnotte, et plus encore." />
            </Head>

            {/* Section Hero */}
            <section
                className="relative h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('/tmb_background.png')" }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Tour du Mont Blanc</h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Une aventure humaine et sportive dans le cadre des classes engagées
                    </p>
                    <a
                        href="#about"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition duration-300"
                    >
                        Découvrir le Projet
                    </a>
                </div>
            </section>

            {/* Section Présentation du Projet */}
            <section id="about" className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-6">Présentation du Projet</h2>
                    <p className="mb-4 text-gray-700">
                        Nous sommes une équipe d’élèves de première engagés dans le cadre des classes engagées et en
                        continuité avec le projet Inside Out. Notre objectif est de réaliser un tour du Mont Blanc, pour
                        sensibiliser à travers une expo photo sur l&apos;&eacute;co-voyage et la nature. à notre retour, nous allons
                        détailler tout notre parcours pour qu&apos;il soit accessible à un maximum de personnes.
                    </p>
                </div>
            </section>

            {/* Section Équipe */}
            <section id="team" className="py-16 bg-white px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-6">Notre Équipe</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <Image
                                src="/paul_loiseau.jpg"
                                alt="Membre de l'équipe"
                                width={128}
                                height={128}
                                className="rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-center">Paul Loiseau</h3>
                            <p className="text-center text-gray-600">Photographe</p>
                            <a href="https://www.instagram.com/paulo_wildlife?igsh=MTQ1YmJiYmNseXRhbw==" className="mt-2 text-gray-700 text-center">
                                Passionnée de photographie animalière, Paul pourra prendre une fois sur place de magnifique photo pour notre exposition.
                            </a>
                        </div>
                        {/* Membre 2 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <Image
                                src="/nikitas_giakkoupis.png"
                                alt="Membre de l'équipe"
                                width={128}
                                height={128}
                                className="rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-center">Nikitas GIAKKOUPIS</h3>
                            <p className="text-center text-gray-600">Chargé de l&apos;animation</p>
                            <p className="mt-2 text-gray-700 text-center">
                                Nikitas et motivation sont une et même personne, il est dynamique donc impossible de s&apos;ennuyer !
                            </p>
                        </div>
                        {/* Membre 3 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <Image
                                src="/matthieu_paillat.png"
                                alt="Membre de l'équipe"
                                width={128}
                                height={128}
                                className="rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-center">Matthieu PAILLAT</h3>
                            <p className="text-center text-gray-600">Chargée du matériel</p>
                            <p className="mt-2 text-gray-700 text-center">
                                Toute l&apos;&eacute;quipe peut compter sur Matthieu pour une gestion riguoureuse de l&apos;aspect technique et logistique.
                            </p>
                        </div>
                    </div>
                    <p className="mt-8 text-center text-gray-700">
                        Nous sommes avant tout amis, et ce projet est l’occasion de vivre ensemble une expérience unique tout en donnant de la visibilité à la faune et la flore des montagnes !
                    </p>
                </div>
            </section>

            {/* Section Itinéraire */}
            <section id="itineraire" className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-6">Itinéraire</h2>
                    <div className="mb-8">
                        <p className="text-gray-700">
                            Voici le parcours prévisionnel de notre tour du Mont Blanc. Nous partirons de Chamonix, traverserons Les Houches, Les Contamines, pour atteindre Courmayeur avant de revenir.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div className="bg-white p-4 rounded shadow">
                            <h3 className="font-semibold text-lg">Chamonix</h3>
                            <p className="text-gray-600">Point de départ de notre aventure.</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <h3 className="font-semibold text-lg">Les Houches</h3>
                            <p className="text-gray-600">Première étape avec de superbes panoramas.</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <h3 className="font-semibold text-lg">Les Contamines</h3>
                            <p className="text-gray-600">Une escale nature et découverte locale.</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <h3 className="font-semibold text-lg">Courmayeur</h3>
                            <p className="text-gray-600">Pause italienne pour savourer de nouvelles saveurs.</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        {/* Carte intégrée */}

                    </div>
                </div>
            </section>

            {/* Section Cagnotte */}
            <section id="funds" className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Soutenez notre Projet</h2>
                    <p className="text-gray-700 mb-4">
                        Contribuez financièrement à notre aventure pour nous aider à réaliser ce tour du Mont Blanc inoubliable.
                    </p>
                    <a
                        href="https://example.com/cagnotte"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition duration-300"
                    >
                        Faire un Don
                    </a>
                </div>
            </section>

            {/* Section Budget */}
            <section id="budget" className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-6">Budget Prévisionnel</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg shadow">
                            <thead>
                            <tr>
                                <th className="py-3 px-4 border-b">Catégorie</th>
                                <th className="py-3 px-4 border-b">Montant (€)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Transport</td>
                                <td className="py-2 px-4 border-b">500</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Hébergement</td>
                                <td className="py-2 px-4 border-b">800</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Alimentation</td>
                                <td className="py-2 px-4 border-b">300</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Autres Frais</td>
                                <td className="py-2 px-4 border-b">200</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 font-bold">Total</td>
                                <td className="py-2 px-4 font-bold">1800</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-8 text-center text-gray-600">
                        Transparence financière pour une gestion claire et ouverte de notre projet.
                    </p>
                </div>
            </section>

            {/* Section Contact */}
            <section id="contact" className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-6">Contactez-nous</h2>
                    <form
                        action="mailto:contact@example.com"
                        method="post"
                        encType="text/plain"
                        className="max-w-lg mx-auto space-y-4"
                    >
                        <div>
                            <label className="block text-gray-700">Nom :</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full mt-1 p-2 border rounded"
                                placeholder="Votre nom"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email :</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full mt-1 p-2 border rounded"
                                placeholder="Votre email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Message :</label>

                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition duration-300"
                            >
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-gray-800 text-white text-center">
                <p>&copy; {new Date().getFullYear()} Tour du Mont Blanc. Tous droits réservés.</p>
            </footer>
        </div>
    )
}