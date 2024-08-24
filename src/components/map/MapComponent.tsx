"use client";

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader';

interface Props {
    lat?: number;
    lng?: number;
}

export const MapComponent = ({ lat = -7.157006432875966, lng = -78.51749877505887 }: Props) => {

    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        try {
            const initMap = async () => {
                const loader = new Loader({
                    apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                    version: 'weekly'
                });

                const { Map } = await loader.importLibrary('maps') as google.maps.MapsLibrary;
                const { AdvancedMarkerElement } = await loader.importLibrary('marker') as google.maps.MarkerLibrary;

                const position = { lat, lng }

                const mapOptions: google.maps.MapOptions = {
                    center: position,
                    zoom: 16,
                    mapId: '4504f8b37365c3d0'
                }

                const map = new Map(mapRef.current as HTMLElement, mapOptions);

                const marker = new AdvancedMarkerElement({
                    map,
                    position: position,
                    gmpDraggable: true
                });
            }
            initMap();
        } catch (error) {

        }
    }, [lat, lng])

    return (
        <div className='rounded' style={{ width: '100%', height: '500px' }} ref={mapRef} />
    )
}
