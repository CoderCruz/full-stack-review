import { useEffect, useState } from "react"
import { getRecipesData } from "../services/getRecipes"
import Spinner from '../components/Spinner';
import Card from '../components/Card'

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const data = await getRecipesData();
      setRecipes(data.data)
      setLoading(false);
    }

    fetchData()
  }, [])

  return (
    <div className="flex flex-row flex-wrap gap-6 mt-20 w-5/6 columns-4">
    {
  
      loading ? <Spinner /> 
      :
      recipes?.length && recipes.map((recipe, index) => (
        <Card 
          key={index}
          title={recipe.title}
          author={recipe.author}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          id={recipe._id}
        />
      )) 
    }
    </div>
  )
}

export default Home