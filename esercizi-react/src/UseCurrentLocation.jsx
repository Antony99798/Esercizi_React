import { useState } from "react"

const UseCurrentLocation = () => {
    const [currentLocation, setCurrentLocation] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleGetCurrentLocation = () => {
        if (!navigator.geolocation) {
            setError(new Error("Not supported"))
            return
        }

        setLoading(true);
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                setCurrentLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
                setError(null)
                setLoading(false)
            },
            (error) => {
                setError(error);
                setCurrentLocation(null);
                setLoading(false);
            }
        )
    }
    return {
        currentLocation,
        error,
        loading,
        onGetCurrentLocation: handleGetCurrentLocation,
    }
};

export default UseCurrentLocation;