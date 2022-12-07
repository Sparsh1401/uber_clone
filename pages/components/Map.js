  import { useEffect } from 'react'
  import tw from "tailwind-styled-components"
  import mapboxgl from '!mapbox-gl';

  mapboxgl.accessToken = 
'pk.eyJ1Ijoic3BhcnNoYWciLCJhIjoiY2t2cGNid3MwMjgzczJ1dGtoNTM4cjcyMiJ9.5EsWjXbAx9SSIG5e9_l9sQ';

  const Map = (props) => {
    console.log(props);
        useEffect(() => {
            const map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [78.9629, 20.5937],
            zoom: 3,
            });
          if(props.pickupCoordinates){
            addToMap(map, props.pickupCoordinates)
          }   
          if(props.dropoffCoordinates){
            addToMap(map,  props.dropoffCoordinates)

            if(props.pickupCoordinates && props.dropoffCoordinates){
              map.fitBounds([
                props.pickupCoordinates,
                props.dropoffCoordinates
              ]), {
                padding: 30
                    }
            }
          }
        },[props.pickupCoordinates, props.dropoffCoordinates])

          const addToMap = (map, coordinates)=> {  
            const marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
          }
      
          useEffect(() => {
            console.log(props.pickupCoordinates);
            console.log(props.dropoffCoordinates);
          }, [props.pickupCoordinates, props.dropoffCoordinates])   
            return <Wrapper id="map"></Wrapper>
  }
export default Map


  const Wrapper=tw.div`
    flex-1`