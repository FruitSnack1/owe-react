import axios from "axios"
import { useEffect, useState } from "react"
import Listing from "./Listing"
import auth from '../auth/auth'

const Listings = ({ owned }) => {

    const [listings, setListings] = useState([])

    useEffect(() => {
        fetchData()
    }, [owned])

    const fetchData = async () => {
        const res = await axios.get('/listings', {
            headers: { "Authorization": localStorage.getItem('accesstoken') }
        })
        setListings(res.data)
    }

    return (
        <>
            <h3>{owned ? 'Moje inzeraty' : 'Nejnovější inzeráty'}</h3>
            {
                owned ?
                    <div className='row'>
                        {listings.map((l, i) => {
                            if (l.user === auth.getUserId())
                                return <Listing key={l._id} listing={l}></Listing>
                            return ''
                        })}
                    </div>
                    :
                    <div className='row'>
                        {listings.map((l, i) => {
                            return <Listing key={l._id} listing={l}></Listing>
                        })}
                    </div>
            }
        </>
    )
}

export default Listings