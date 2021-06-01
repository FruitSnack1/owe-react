import { Link } from "react-router-dom"
import { format } from 'date-fns'

const Listing = ({ listing }) => {
    return (
        <div className='col-lg-3 col-sm-12 mb-4'>
            <Link to={`/app/${listing._id}`}>
                <div className='card shadow '>
                    {/* <div className='card-header py-3'>
                    <h6 className='m-0 font-weight-bold text-primary'>{listing.name}</h6>
                </div> */}
                    <img src={`https://owe-inzeraty-api.herokuapp.com//${listing.img}`} className="card-img-top" alt="..." style={{ height: '18rem', objectFit: 'cover' }}></img>
                    <div className='card-body'>
                        <h5 className=' m-0 font-weight-bold text-primary'>{listing.name}<span className={'badge ml-2 ' + (listing.type === 2 ? 'badge-danger' : 'badge-primary')}>{listing.type === 1 ? 'Prodám' : 'Koupím'}</span></h5>
                        <span>{format(new Date(listing?.created), 'dd/MM')}</span>
                        <div className='d-inline h5 mb-0 font-weight-bold text-gray-800 text-right float-right'>
                            {listing.price} Kč
                    </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Listing