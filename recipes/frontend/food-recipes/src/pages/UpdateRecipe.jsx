import {useState} from 'react'
import Spinner from "../components/Spinner"
import { updateRecipeData } from '../services/getRecipes'
import { useNavigate } from 'react-router-dom'
import Form from '../components/Form';
import { useParams } from 'react-router-dom';


const UpdateRecipe = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const [data, setData] = useState(
  {
    title: '',
    author: '',
    instructions: '',
    ingredients: ''
  })

  const handleChange = (e, type) => {
    const { value } = e.target;
    //Track user input
    //update state property with corresponding input field 
    switch(type.toLowerCase()) {
      case 'title':
        setData({...data, title: value});
        break;
      case 'author':
        setData({...data, author: value});
        break;
      case 'instructions':
        setData({...data, instructions: value});
        break;
      case 'ingredients':
        setData({...data, ingredients: value});
        break;
      default:
        console.log('wrong field')
    }
  }

  const handleUpdateRecipe = (e) => {
    e.preventDefault();
    const newRecipeData = data;
    console.log(newRecipeData, ' new recipe')
    setLoading(true)
    updateRecipeData(id, newRecipeData).then(() => {
      setLoading(false)
      navigate('/');
      window.location.reload();
    })
  }

  return (
    <div>
      {loading ? <Spinner /> 
      :
      <Form 
        title={'Update recipe'}
        handleChange={handleChange}
        handleCreateRecipe={handleUpdateRecipe}
      />}
      
    </div>
  )
}

export default UpdateRecipe