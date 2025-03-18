// components/ItineraryMapAndTimeline.jsx
"use client"
import Image from 'next/image'

const itineraryData = [
    {
        day: "Jour 1 (🇫🇷)",
        route: "Les Houches - Les Contamines-Montjoie",
        distance: "16,57 km",
        estimatedTime: "07:10",
        elevationGain: "1099 m",
        elevationLoss: "993 m",
        supermarkets: "OUI (départ + arrivée)",
        camping: "Aire de bivouac de la Rollaz"
    },
    {
        day: "Jour 2 (🇫🇷)",
        route: "Les Contamines-Montjoie - Les Chapieux",
        distance: "18,86 km",
        estimatedTime: "08:40",
        elevationGain: "1457 m",
        elevationLoss: "1038 m",
        supermarkets: "OUI (départ + Chalet-Refuge du Nant-Borrant + arrivée)",
        camping: "NON"
    },
    {
        day: "Jour 3 (🇫🇷 & 🇮🇹)",
        route: "Les Chapieux - Col Chécrouit",
        distance: "23,93 km",
        estimatedTime: "10:10",
        elevationGain: "1581 m",
        elevationLoss: "1187 m",
        supermarkets: "OUI (départ + les Mottets + arrivée)",
        camping: "NON"
    },
    {
        day: "Jour 4 (🇮🇹)",
        route: "Col Chécrouit - Refuge Bonnatti",
        distance: "16,63 km",
        estimatedTime: "07:55",
        elevationGain: "1294 m",
        elevationLoss: "1232 m",
        supermarkets: "OUI (départ + Courmayeur)",
        camping: "NON"
    },
    {
        day: "Jour 5 (🇮🇹 & 🇨🇭)",
        route: "Refuge Bonnatti - La Fouly",
        distance: "19,33 km",
        estimatedTime: "07:55",
        elevationGain: "1030 m",
        elevationLoss: "1467 m",
        supermarkets: "OUI (arrivée)",
        camping: "OUI"
    },
    {
        day: "Jour 6 (🇨🇭)",
        route: "La Fouly - Col de la Forclaz",
        distance: "18,84 km",
        estimatedTime: "11:20",
        elevationGain: "1520 m",
        elevationLoss: "1591 m",
        supermarkets: "OUI (départ + Champex-Lac + Col de la Forclaz",
        camping: "OUI"
    },
    {
        day: "Jour 7 (🇫🇷 & 🇨🇭)",
        route: "Col de la Forclaz - La Flégère",
        distance: "21,58 km",
        estimatedTime: "11:20",
        elevationGain: "2066 m",
        elevationLoss: "1724 m",
        supermarkets: "OUI (départ + Trient)",
        camping: "NON"
    },
    {
        day: "Jour 8 (🇫🇷)",
        route: "La Flégère - Les Houches",
        distance: "16,67 km",
        estimatedTime: "07:35",
        elevationGain: "1034 m",
        elevationLoss: "1892 m",
        supermarkets: "OUI (arrivée)",
        camping: "OUI"
    },
]

export default function ItineraryMapAndTimeline() {
    return (
        <section id="itineraire" className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">Itinéraire en 8 jours</h2>
                <p className="text-center text-gray-600 mb-8">En moyenne, 19,1 km de marche par jour</p>
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Carte statique */}
                    <div className="lg:w-1/2 relative">
                        <Image
                            src="/mont-blanc-map.jpg" // Remplacez par votre image de la carte
                            alt="Carte du Tour du Mont Blanc"
                            width={800}
                            height={600}
                            className="rounded-lg shadow-lg object-cover"
                        />
                        {/* Exemple d'overlay pour marquer un jour (vous pouvez itérer avec des positions précises) */}
                        {/* <div className="absolute top-20 left-10 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</div> */}
                    </div>
                    {/* Schéma / Détails de l'itinéraire */}
                    <div className="lg:w-1/2 space-y-6">
                        {itineraryData.map((dayInfo, index) => (
                            <div key={index} className="p-4 bg-white rounded-lg shadow">
                                <h3 className="text-xl font-semibold mb-2">{dayInfo.day}</h3>
                                <p className="text-gray-700"><strong>Itinéraire :</strong> {dayInfo.route}</p>
                                <p className="text-gray-700"><strong>Distance :</strong> {dayInfo.distance}</p>
                                <p className="text-gray-700"><strong>Temps estimé :</strong> {dayInfo.estimatedTime}</p>
                                <p className="text-gray-700"><strong>Dénivelé + :</strong> {dayInfo.elevationGain}</p>
                                <p className="text-gray-700"><strong>Dénivelé - :</strong> {dayInfo.elevationLoss}</p>
                                <p className="text-gray-700"><strong>Supermarché :</strong> {dayInfo.supermarkets}</p>
                                <p className="text-gray-700"><strong>Camping :</strong> {dayInfo.camping}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
