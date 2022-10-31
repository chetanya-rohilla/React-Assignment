import "./style.css"
import { useState } from "react"

const FormComponent = () => {
    let [name, setName] = useState("")
    let [show, setShow] = useState(false)
    let [formData, setFormData] = useState([])

    return <div className="form-container">

        <form onSubmit={(event) => {
            event.stopPropagation()
            event.preventDefault()
            setFormData ([
                event.target[0].value,
                event.target[1].checked ? event.target[1].labels[0].innerText : event.target[2].labels[0].innerText,
                event.target[3].value
            ])
            setShow(true)
        }}>

            <label htmlFor="name">  Name:  <input name="name" value={name} type="text" onChange={(event) => setName(event.target.value)}/>  </label>

            <br/>

            <p>Gender</p>
            
            <label htmlFor="male"><input name="gender" id="male" type="radio" />Male</label>
            <label htmlFor="female"><input name="gender" id="female" type="radio" />Female</label>

            <br/>

            <label htmlFor="status">Status:</label>
            <select name="status">
                <option>Married</option>
                <option>Unmarried</option>
            </select>

            <br />

            <button type="submit">Submit</button>
            
            <br/>

            {show && <div>
                <p>Name: {formData[0]}</p>
                <p>Gender: {formData[1]}</p>
                <p>Status: {formData[2]}</p>
                </div>}
        </form>

    </div>
}
export default FormComponent