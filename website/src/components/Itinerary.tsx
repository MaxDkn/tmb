import React from 'react'

interface ItineraryData {
    day: string
    lat: number
    lng: number
    stopName: string
    distance: string
    // Optionnel : dénivelé positif et négatif
    elevationGain?: string
    elevationLoss?: string
}

const itineraryData: ItineraryData[] = [
    { day: "Jour 1", lat: 45.900, lng: 6.800, stopName: "Les Houches", distance: "16,57 km", elevationGain: "300m", elevationLoss: "200m" },
    { day: "Jour 2", lat: 45.850, lng: 6.850, stopName: "Les Contamines", distance: "18,86 km", elevationGain: "250m", elevationLoss: "150m" },
    { day: "Jour 3", lat: 45.800, lng: 6.900, stopName: "Les Chapieux", distance: "23,93 km", elevationGain: "400m", elevationLoss: "350m" },
    { day: "Jour 4", lat: 45.750, lng: 6.950, stopName: "Col Chécrouit", distance: "16,63 km", elevationGain: "200m", elevationLoss: "220m" },
    { day: "Jour 5", lat: 45.700, lng: 7.000, stopName: "Refuge Bonnatti", distance: "19,33 km", elevationGain: "350m", elevationLoss: "300m" },
    { day: "Jour 6", lat: 45.650, lng: 7.050, stopName: "La Fouly", distance: "18,84 km", elevationGain: "280m", elevationLoss: "190m" },
    { day: "Jour 7", lat: 45.600, lng: 7.100, stopName: "Col de la Forclaz", distance: "21,58 km", elevationGain: "330m", elevationLoss: "310m" },
    { day: "Jour 8", lat: 45.900, lng: 6.800, stopName: "La Flégère", distance: "16,67 km", elevationGain: "320m", elevationLoss: "300m" }
]

const EllipticalItinerary: React.FC = () => {
    // Dimensions du SVG en mode paysage
    const width = 800
    const height = 500
    const centerX = width / 2
    const centerY = height / 2
    // Définition des rayons pour l'ellipse
    const ellipseRx = 300 // rayon horizontal (plus long)
    const ellipseRy = 200 // rayon vertical

    // Calcul des positions sur l'ellipse.
    // On démarre à -90° (en haut) et on répartit les points uniformément sur 360°
    const positions = itineraryData.map((_, index) => {
        const angle = -Math.PI / 2 + (2 * Math.PI * index) / itineraryData.length
        const x = centerX + ellipseRx * Math.cos(angle)
        const y = centerY + ellipseRy * Math.sin(angle)
        return { x, y, angle }
    })

    // On affiche les dénivelés si l'espace le permet
    const showElevation = false

    return (
        <div style={{ width: '100%', height: 'auto' }}>
            <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%">
                {/* Tracé de la boucle sur l'ellipse avec une ligne en pointillés */}
                <path
                    d={
                        positions
                            .map((pos, i) => (i === 0 ? `M ${pos.x},${pos.y}` : `L ${pos.x},${pos.y}`))
                            .join(' ') + ' Z'
                    }
                    fill="none"
                    stroke="#7f8c8d"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                />
                {/* Affichage des arrêts : points et noms */}
                {positions.map((pos, index) => (
                    <g key={index}>
                        <circle cx={pos.x} cy={pos.y} r="5" fill="#2980b9" />
                        <text
                            x={pos.x + 10 * Math.cos(pos.angle)}
                            y={pos.y + 10 * Math.sin(pos.angle)}
                            fontSize="12"
                            fill="#2c3e50"
                        >
                            {itineraryData[index].stopName}
                        </text>
                    </g>
                ))}
                {/* Affichage de la distance et du dénivelé sur chaque segment */}
                {positions.map((pos, index) => {
                    const nextPos = positions[(index + 1) % positions.length]
                    const midX = (pos.x + nextPos.x) / 2
                    const midY = (pos.y + nextPos.y) / 2
                    return (
                        <g key={`segment-${index}`}>
                            <text x={midX} y={midY - 5} fontSize="10" fill="#34495e" textAnchor="middle">
                                {itineraryData[index].distance}
                            </text>
                            {showElevation &&
                                itineraryData[index].elevationGain &&
                                itineraryData[index].elevationLoss && (
                                    <text x={midX} y={midY + 10} fontSize="10" fill="#34495e" textAnchor="middle">
                                        D+ {itineraryData[index].elevationGain} / D- {itineraryData[index].elevationLoss}
                                    </text>
                                )}
                        </g>
                    )
                })}
            </svg>
        </div>
    )
}

export default EllipticalItinerary
