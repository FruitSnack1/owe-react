import axios from "axios"
import { useState } from "react"

const FormListing = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)

    const createListing = async () => {
        console.log('creating listing')
        const res = await axios.post('http://localhost:3001/listings', { name, description, price })
        console.log(res.data)
    }

    return (
        <div className='card shadow'>
            <div className='card-header py-3'>
                <h6 className='m-0 font-weight-bold text-primary'>Nový inzerát</h6>
            </div>
            <div className='card-body'>
                <form>
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