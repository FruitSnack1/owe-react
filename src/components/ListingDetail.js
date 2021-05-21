import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router";
import auth from '../auth/auth'
import { format } from 'date-fns'

const ListingDetail = () => {

    const [listing, setListing] = useState({})
    const [date, setDate] = useState('')
    let { listingId } = useParams()
    let history = useHistory()

    const fetchData = async () => {
        if (!listingId)
            return
        const res = await axios.get(`/listings/${listingId}`, {
            headers: { "Authorization": localStorage.getItem('accesstoken') }
        })
        setListing(res.data)
        setDate(format(new Date(res.data.created), 'dd/MM'))
    }

    useEffect(() => {
        fetchData()
    }, [])


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
                <div className='col-lg-9 col-sm-12 mb-3 mb-sm-5 m-lg-0 '>
                    <div className='card shadow '>
                        <div className='card-body'>
                            <div className='row '>
                                <div className='col-lg-4 col-sm-12'>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img src={`http://localhost:3001/${listing.img}`} className="card-img-top" alt="..." style={{ height: '18rem', objectFit: 'cover' }}></img>
                                    </div>
                                </div>
                                <div className='col-lg-8 col-sm-12 d-flex flex-column mt-3'>
                                    <div>
                                        <h5 className='m-0 font-weight-bold text-primary d-inline'>{listing.name}</h5>
                                        {
                                            auth.getUserId() === listing?.user?._id ?
                                                <>
                                                    <i onClick={() => {
                                                        deleteListing()
                                                    }} className='fas fa-trash float-right text-danger'></i>
                                                    <i onClick={() => {
                                                        editListing()
                                                    }} className='fas fa-pen float-right mr-3 text-primary ml-2'></i>
                                                </>
                                                :
                                                null
                                        }
                                        <span className='float-right'>{date}</span>
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
                <div className='col-lg-3 col-sm-12 d-flex'>
                    <div className='card shadow w-100'>
                        <div className='card-body'>
                            <h5 className='m-0 font-weight-bold text-primary mb-3'>Kontakt</h5>
                            <hr></hr>
                            <h5 className='text-dark font-weight-bold'>{listing.user?.username} </h5>

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