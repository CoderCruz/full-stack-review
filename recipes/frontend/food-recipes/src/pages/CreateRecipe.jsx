import {useState} from 'react'
import Spinner from "../components/Spinner"
import { postRecipeData } from '../services/getRecipes'
import { useNavigate } from 'react-router-dom'
import Form from '../components/Form';


const CreateRecipe = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
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

  const handleCreateRecipe = (e) => {
    e.preventDefault();
    const newRecipeData = data;
    console.log(newRecipeData, ' new recipe')
    setLoading(true)
    postRecipeData(newRecipeData).then(() => {
      setLoading(false)
      navigate('/');
      window.location.reload();
    })
  }

  return (
    <div>
      {loading? <Spinner/> 
      :
      <Form 
        title={'Create new recipe'}
        handleChange={handleChange}
        handleCreateRecipe={handleCreateRecipe}
      />}
    </div>
  )
}

export default CreateRecipe