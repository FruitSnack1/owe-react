import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router";

const ListingDetail = () => {

    const [listing, setListing] = useState({})
    let { listingId } = useParams();

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await axios.get(`/listings/${listingId}`, {
            headers: { "Authorization": localStorage.getItem('accesstoken') }
        })
        setListing(res.data)
    }

    return (
        <div className='card shadow '>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={`http://localhost:3001/${listing.img}`} className="card-img-top" alt="..." style={{ height: '18rem', objectFit: 'cover' }}></img>
                        </div>
                    </div>
                    <div className='col-9'>
                        <h5 className='m-0 font-weight-bold text-primary'>{listing.name}</h5>
                        <p>{listing.description}</p>
                        <hr></hr>
                        <h5>{listing.user?.firstname} {listing.user?.lastname}</h5>
                        <div className='h5 mb-0 font-weight-bold text-gray-800 '>
                            {listing.price} Kč
                            </div>
                        <button className='btn btn-primary'>Koupit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingDetail