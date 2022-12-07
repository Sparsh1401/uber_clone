import {useEffect,useState} from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'

const Confirm = () => {

  const[ pickupCoordinates, setPickUpCoordinates] = useState("");
  const[ dropoffCoordinates, setDropOffCoordinates] = useState("");
   
    const getPickUpCoordinates = () => {
        const pickup= 'Agra';
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
         new URLSearchParams({
            access_token:"pk.eyJ1Ijoic3BhcnNoYWciLCJhIjoiY2t2cGNid3MwMjgzczJ1dGtoNTM4cjcyMiJ9.5EsWjXbAx9SSIG5e9_l9sQ",
            limit: 1
          })
        )
         .then(response => response.json())
         .then(data => {
            setPickUpCoordinates(data.features[0].center)
          })
    }
    const getDropoffCoordinates = () => {
        const Dropoff= 'Mathura';
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${Dropoff}.json?`+
         new URLSearchParams({
            access_token:"pk.eyJ1Ijoic3BhcnNoYWciLCJhIjoiY2t2cGNid3MwMjgzczJ1dGtoNTM4cjcyMiJ9.5EsWjXbAx9SSIG5e9_l9sQ",
            limit: 1
          })
        )
         .then(response => response.json())
         .then(data => {
            setDropOffCoordinates(data.features[0].center)
          })
    }
    useEffect(() => {
        getPickUpCoordinates();
        getDropoffCoordinates();
        },[])

    return (
        <Wrapper>
            <Map 
            pickupCoordinates =  {pickupCoordinates}
            dropoffCoordinates = {dropoffCoordinates}
            />
            <RideContainer>
                Ride Selector Confirm Button
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
h-screen flex flex-col`

const RideContainer = tw.div`
flex-1 bg-gray-200`