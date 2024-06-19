import React, {useState,useEffect} from 'react'
import Select from 'react-dropdown-select'
import { fetchCategories } from '../utils/fetchCategories';


const options = [
   "hi","hello", "how are you "
  ];

function DropDown() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getCategories() {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        setError(error.message);
      }
    }

    getCategories();
  }, []);

  console.log(categories)

  return (
    <div className="absolute">
        <Select options={categories} onChange={(value)=>this.setValues(value)} />
      
    </div>
  )
}

export default DropDown
