import { useState } from "react"

const UseForm = (initialValue = {}) => {
    const [data, setData] = useState(initialValue);

    const handleInputChange = (event) => {
        const {name, value, type, checked} = event.target;
        setData((data)=> {
            return {
                ...data,
                [name] : type === "checkbox" ? checked : value,
            }
        })
    }
    return [data, handleInputChange]
}
export default UseForm;