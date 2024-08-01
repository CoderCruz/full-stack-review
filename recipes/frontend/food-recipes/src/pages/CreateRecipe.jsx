import {useState} from 'react'
import Spinner from "../components/Spinner"
import { postRecipeData } from '../services/getRecipes'


const CreateRecipe = () => {
  const [title, setTitle] = useState('')
  const [data, setData] = useState({})
  return (
    <div>CreateRecipe</div>
  )
}

export default CreateRecipe