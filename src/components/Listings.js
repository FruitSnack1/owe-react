import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Listing from "./Listing"

const Listings = ({ owned }) => {

    const [listings, setListings] = useState([])

    useEffect(() => {
        fetchData()
    }, [owned])

    const fetchData = async () => {
        let res
        if (owned)
            res = await axios.get('/listings/owned', {
                headers: { "Authorization": localStorage.getItem('accesstoken') }
            })
        else
            res = await axios.get('/listings', {
                headers: { "Authorization": localStorage.getItem('accesstoken') }
            })
        setListings(res.data)
    }

    return (
        <>
            <h3>{owned ? 'Moje inzeraty' : 'Nejnovější inzeráty'}</h3>
            <div className='row'>
                {listings.map((l, i) => {
                    return <Listing key={l._id} listing={l}></Listing>
                })}
            </div>
        </>
    )
}

export default Listings