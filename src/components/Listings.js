import axios from "axios"
import { useEffect, useState } from "react"
import Listing from "./Listing"

const Listings = () => {

    const [listings, setListings] = useState([{ name: 'cc' }])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await axios.get('http://localhost:3001/listings')
        const list = res.data
        setListings(res.data)
        console.log(listings)
    }

    return (
        <>
            <h3>Listings</h3>
            <div className='row'>
                {listings.map((l, i) => {
                    return <Listing key={l._id} listing={l}></Listing>
                })}
            </div>
        </>
    )
}

export default Listings