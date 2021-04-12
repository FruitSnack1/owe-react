import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router";
import auth from '../auth/auth'

const ListingDetail = () => {

    const [listing, setListing] = useState({})
    let { listingId } = useParams()
    let history = useHistory()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await axios.get(`/listings/${listingId}`, {
            headers: { "Authorization": localStorage.getItem('accesstoken') }
        })
        setListing(res.data)
    }

    const deleteListing = async () => {
        await axios.delete(`/listings/${listingId}`, {
            headers: { "Authorization": localStorage.getItem('accesstoken') }
        })
        history.push('/app/mylistings')
    }

    const editListing = async () => {
        history.push(`/app/edit/${listingId}`)
    }

    return (
        <>
            <div className='row'>
                <div className='col-9 '>
                    <div className='card shadow '>
                        <div className='card-body'>
                            <div className='row '>
                                <div className='col-4'>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img src={`http://localhost:3001/${listing.img}`} className="card-img-top" alt="..." style={{ height: '18rem', objectFit: 'cover' }}></img>
                                    </div>
                                </div>
                                <div className='col-8 d-flex flex-column '>
                                    <div>
                                        <h5 className='m-0 font-weight-bold text-primary d-inline'>{listing.name}</h5>
                                        {
                                            auth.getUserId() == listing?.user?._id ?
                                                <>
                                                    <i onClick={() => {
                                                        deleteListing()
                                                    }} className='fas fa-trash float-right text-danger'></i>
                                                    <i onClick={() => {
                                                        editListing()
                                                    }} className='fas fa-pen float-right mr-3 text-primary '></i>
                                                </>
                                                :
                                                null
                                        }
                                        <hr></hr>
                                        <p>{listing.description}</p>
                                    </div>
                                    <div className='mt-auto'>
                                        <div className='h5 mb-0 font-weight-bold text-gray-800 d-inline'>
                                            {listing.price} Kč
                                        </div>
                                        <button className='btn btn-primary float-right'>Koupit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-3 d-flex'>
                    <div className='card shadow w-100'>
                        <div className='card-body'>
                            <h5 className='m-0 font-weight-bold text-primary mb-3'>Kontakt</h5>
                            <h5>{listing.user?.username} </h5>

                            <span><i className='fas fa-envelope mr-2'></i>
                                {listing.user?.email}</span>
                            <br></br>
                            <span><i className='fas fa-phone mr-2'></i>
                                {listing.user?.phone}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListingDetail