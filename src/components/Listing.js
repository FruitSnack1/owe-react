import { Link } from "react-router-dom"

const Listing = ({ listing }) => {
    return (
        <div className='col-4 mb-4'>
            <Link to={`/app/${listing._id}`}>
                <div className='card shadow '>
                    {/* <div className='card-header py-3'>
                    <h6 className='m-0 font-weight-bold text-primary'>{listing.name}</h6>
                </div> */}
                    <img src={`http://localhost:3001/${listing.img}`} className="card-img-top" alt="..." style={{ height: '18rem', objectFit: 'cover' }}></img>
                    <div className='card-body'>
                        <h5 className='m-0 font-weight-bold text-primary'>{listing.name}</h5>
                        <div className='h5 mb-0 font-weight-bold text-gray-800 text-right'>
                            {listing.price} Kč
                    </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Listing