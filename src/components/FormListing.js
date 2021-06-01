import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"

const FormListing = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(0)
    const [imgPreview, setimgPreview] = useState('/no-image.png')
    const [categories, setCategories] = useState([])
    const [type, setType] = useState(1)
    const [category, setCategory] = useState(1)

    let history = useHistory()
    let { listingId } = useParams()

    const fetchListing = async () => {
        const res = await axios.get(`/listings/${listingId}`)
        console.log(res.data.name)
        setName(res.data.name)
        setDescription(res.data.description)
        setPrice(res.data.price)
        setType(res.data.type)
        setCategory(res.data.category)
        setimgPreview(`https://owe-inzeraty-api.herokuapp.com//${res.data.img}`)
    }

    const fetchCategories = async () => {
        const res = await axios.get('/codes/categories')
        setCategories(res.data)
    }

    useEffect(() => {
        setName('')
        setDescription('')
        setPrice(0)
        setimgPreview('/no-image.png')
        fetchCategories()
        if (!listingId)
            return
        fetchListing()
    }, [listingId, history,])


    const createListing = async () => {
        const data = new FormData()
        data.append('img', file)
        const res = await axios.post('/listings/image', data, {
            headers: { "Authorization": localStorage.getItem('accesstoken') }
        })
        const listing = {
            name,
            description,
            price,
            img: res.data.image,
            type,
            category
        }
        await axios.post('/listings', listing, {
            headers: { "Authorization": localStorage.getItem('accesstoken') }
        })
        history.push('/app/mylistings')
    }

    const handleImgUpload = (e) => {
        setimgPreview(URL.createObjectURL(e.target.files[0]))
        setFile(e.target.files[0])
    }

    const editListing = async () => {
        const listing = {
            name,
            description,
            price
        }
        if (file) {
            const data = new FormData()
            data.append('img', file)
            const res = await axios.post('/listings/image', data, {
                headers: { "Authorization": localStorage.getItem('accesstoken') }
            })
            listing.img = res.data.image
        }
        await axios.put(`/listings/${listingId}`, listing, {
            headers: { "Authorization": localStorage.getItem('accesstoken') }
        })
        history.push('../mylistings')
    }

    return (
        <div className='card shadow'>
            <div className='card-header py-3'>
                <h6 className='m-0 font-weight-bold text-primary'>{listingId ? 'Upravit inzerát' : 'Nový inzerát'}</h6>
            </div>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-4 d-flex align-items-center justify-content-center'>
                        <img className='img-fluid' src={imgPreview} alt='listing-img' />
                    </div>
                    <div className='col-8'>
                        <form >
                            <div className="btn-group float-right" role="group" aria-label="Basic example">
                                <button onClick={() => { setType(1) }} type="button" className={'btn ' + (type == 1 ? 'btn-primary' : 'btn-light')}>Prodám</button>
                                <button onClick={() => { setType(2) }} type="button" className={'btn ' + (type == 2 ? 'btn-primary' : 'btn-light')}>Koupím</button>
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Název</label>
                                <input onChange={(e) => setName(e.target.value)} value={name} type='text' className='form-control'></input>
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Kategorie</label>
                                <select value={category} onChange={(e) => { setCategory(e.target.value) }} className='form-control'>
                                    {
                                        categories.map(e => {
                                            return <option value={e.id}>{e.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Popis</label>
                                <textarea onChange={(e) => setDescription(e.target.value)} value={description} type='text' className='form-control' rows="3" ></textarea>
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Cena</label>
                                <input onChange={(e) => setPrice(e.target.value)} value={price} type='number' className='form-control' ></input>
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Obrázek</label>
                                <input onChange={(e) => handleImgUpload(e)} type='file' className='form-control-file' name='img'></input>
                            </div>
                            {
                                listingId ?
                                    <button onClick={(e) => {
                                        e.preventDefault()
                                        editListing()
                                    }} type="submit" className="btn btn-success float-right">Upravit inzerát</button>
                                    :
                                    <button onClick={(e) => {
                                        e.preventDefault()
                                        createListing()
                                    }} type="submit" className="btn btn-success float-right">Vytvořit inzerát</button>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormListing