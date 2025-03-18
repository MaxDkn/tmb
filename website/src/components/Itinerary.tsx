// components/GoogleEarthIntegration.tsx
import React, { useEffect, useRef } from "react"

declare global {
    interface Window {
        google: any
    }
}

interface ItineraryData {
    day: string
    lat: number
    lng: number
    stopName: string
    distance: string
}

const itineraryData: ItineraryData[] = [
    { day: "Jour 1", lat: 45.900, lng: 6.800, stopName: "Les Houches", distance: "16,57 km" },
    { day: "Jour 2", lat: 45.850, lng: 6.850, stopName: "Les Contamines", distance: "18,86 km" },
    { day: "Jour 3", lat: 45.800, lng: 6.900, stopName: "Les Chapieux", distance: "23,93 km" },
    { day: "Jour 4", lat: 45.750, lng: 6.950, stopName: "Col Chécrouit", distance: "16,63 km" },
    { day: "Jour 5", lat: 45.700, lng: 7.000, stopName: "Refuge Bonnatti", distance: "19,33 km" },
    { day: "Jour 6", lat: 45.650, lng: 7.050, stopName: "La Fouly", distance: "18,84 km" },
    { day: "Jour 7", lat: 45.600, lng: 7.100, stopName: "Col de la Forclaz", distance: "21,58 km" },
    { day: "Jour 8", lat: 45.900, lng: 6.800, stopName: "La Flégère", distance: "16,67 km" }, // Retour
]

const GoogleEarthIntegration: React.FC = () => {
    const mapRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const initMap = () => {
            if (!mapRef.current) return

            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: 45.8, lng: 6.9 },
                zoom: 8,
                mapTypeId: "satellite", // Vue satellite pour un rendu proche de Google Earth
                tilt: 45, // Active l'angle pour le rendu 3D
                heading: 90, // Rotation de la vue (modifiable)
            })

            // Création des marqueurs et InfoWindows pour chaque étape
            itineraryData.forEach((data: ItineraryData) => {
                const marker = new window.google.maps.Marker({
                    position: { lat: data.lat, lng: data.lng },
                    map,
                    title: `${data.day} - ${data.stopName}`,
                })

                const infoWindow = new window.google.maps.InfoWindow({
                    content: `<div style="font-size:14px">
                      <strong>${data.day} - ${data.stopName}</strong><br/>
                      Distance: ${data.distance}
                    </div>`,
                })

                marker.addListener("click", () => {
                    infoWindow.open(map, marker)
                })
            })

            // Création d'une ligne reliant les points de l'itinéraire
            const flightPlanCoordinates = itineraryData.map(data => ({ lat: data.lat, lng: data.lng }))
            const flightPath = new window.google.maps.Polyline({
                path: flightPlanCoordinates,
                geodesic: true,
                strokeColor: "#FF0000",
                strokeOpacity: 1.0,
                strokeWeight: 2,
            })
            flightPath.setMap(map)

            // (Optionnel) Affichage de la distance sur chaque segment à mi-parcours
            for (let i = 1; i < flightPlanCoordinates.length; i++) {
                const prev = flightPlanCoordinates[i - 1]
                const curr = flightPlanCoordinates[i]
                const midLat = (prev.lat + curr.lat) / 2
                const midLng = (prev.lng + curr.lng) / 2

                const distance = window.google.maps.geometry.spherical.computeDistanceBetween(
                    new window.google.maps.LatLng(prev.lat, prev.lng),
                    new window.google.maps.LatLng(curr.lat, curr.lng)
                )

                new window.google.maps.InfoWindow({
                    content: `<div style="font-size:12px; color: lightblue;">${(distance / 1000).toFixed(2)} km</div>`,
                    position: { lat: midLat, lng: midLng },
                    disableAutoPan: true,
                }).open(map)
            }
        }

        // Chargement du script Google Maps si non présent
        if (!window.google) {
            const script = document.createElement("script")
            // Remplacez "YOUR_API_KEY" par votre clé API Google Maps
            script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=geometry`
            script.async = true
            script.defer = true
            script.onload = initMap
            document.head.appendChild(script)
        } else {
            initMap()
        }
    }, [])

    return <div ref={mapRef} style={{ width: "100%", height: "600px" }} />
}

export default GoogleEarthIntegration
