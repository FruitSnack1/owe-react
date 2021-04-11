import axios from "axios"
import { useState } from "react"

const FormListing = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState()

    const createListing = async () => {
        const data = new FormData()
        data.append('img', file)
        data.append('listing', JSON.stringify({ name, description, price }))
        const res = await axios.post('http://localhost:3001/listings', data, {
            headers: { "Authorization": localStorage.getItem('accesstoken') }
        })
    }

    return (
        <div className='card shadow'>
            <div className='card-header py-3'>
                <h6 className='m-0 font-weight-bold text-primary'>Nový inzerát</h6>
            </div>
            <div className='card-body'>
                <form >
                    <div className='form-group'>
                        <label className='form-label'>Název</label>
                        <input onChange={(e) => setName(e.target.value)} type='text' className='form-control'></input>
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Popis</label>
                        <textarea onChange={(e) => setDescription(e.target.value)} type='text' className='form-control' rows="3" ></textarea>
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Cena</label>
                        <input onChange={(e) => setPrice(e.target.value)} type='number' className='form-control' ></input>
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Obrázek</label>
                        <input onChange={(e) => setFile(e.target.files[0])} type='file' className='form-control-file' name='img'></input>
                    </div>
                    <button onClick={(e) => {
                        e.preventDefault()
                        createListing()
                    }} type="submit" className="btn btn-primary float-end">Vytvořit inzerát</button>
                </form>
            </div>
        </div>
    )
}

export default FormListing