import {useState, useEffect} from 'react'
import Spinner from "../components/Spinner"
import { deleteRecipeData } from '../services/getRecipes'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const DeleteRecipe = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(()=> {
    handleUpdateRecipe()
  }, [])

  const handleUpdateRecipe = () => {
    setLoading(true)
    deleteRecipeData(id).then(() => {
      setLoading(false)
      navigate('/');
      window.location.reload();
    })
  }


  return (
    <div>
      {loading ? <Spinner /> : <div>Delete Recipe</div>}
    </div>
  )
}

export default DeleteRecipe