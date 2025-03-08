import React, { useEffect } from 'react'
const KEY = "AlzaSyuMZ4M_Fn0fUJawXHILb3wLvEXFWIMAbEu"
const Place = "muzaffarpur"
const CO_URL =  `https://nominatim.openstreetmap.org/search?format=json&q=${Place}`

const URL = `https://maps.gomaps.pro/maps/api/place/nearbysearch/json?keyword=school&location=40.7128,-74.0060&radius=1500&key=${KEY}`
const secondpage = () => {
  useEffect(
    async function fetchCordinated () {
      const res = await fetch(CO_URL)
      const data = await res.json()
      console.log(data)
    }, []
  )
  return (

    <div>
      hello
    </div>
  )
}

export default secondpage












