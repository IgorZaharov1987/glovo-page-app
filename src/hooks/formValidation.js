import {useState} from "react";


const useForm = () => {
    const [values, setValues] = useState({});

    const handleChange = (event) => {
      setValues({...values, [event.target.name]: event.target.value});
    };

    return [values, handleChange];
}

export default useForm;