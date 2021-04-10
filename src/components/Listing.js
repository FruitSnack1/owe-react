const Listing = ({ listing }) => {
    return (
        <div className='col-4'>
            <div className='card shadow '>
                <div className='card-header py-3'>
                    <h6 className='m-0 font-weight-bold text-primary'>{listing.name}</h6>
                </div>
                <div className='card-body'>
                    {listing.description}
                    <div className='h5 mb-0 font-weight-bold text-gray-800 text-right'>
                        {listing.price} Kč
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listing