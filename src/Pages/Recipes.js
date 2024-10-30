import PreviousSearches from "../components/PreviousSearches"
import RecipesCard from "../components/RecipesCard"

export default function Recipes(){
  const recipes = [
    {
        title:"Chicken Pan Pizza",
        image:"/img/dishes/img_1.jpg",
        authorImg:"/img/chef/img_1 (1).jpg",
    },
    {
        title:"Spaghetti and Meatballs",
        image:"/img/dishes/img_4.jpg",
        authorImg:"/img/chef/img_2 (1).jpg",
    },
    {
        title:"American  Cheese Burger",
        image:"/img/dishes/img_5.jpg",
        authorImg:"/img/chef/img_3 (1).jpg",
    },
    {
        title:"Mutton Biryani",
        image:"/img/dishes/img_6.jpg",
        authorImg:"/img/chef/img_5 (1).jpg",
    },
    {
        title:"Japanese Sushi",
        image:"/img/dishes/img_10.jpg",
        authorImg:"/img/chef/img_6 (1).jpg",
    },
    {
        title:"American Cheese Burger",
        image:"/img/dishes/img_5.jpg",
        authorImg:"/img/chef/img_3 (1).jpg",
    },
    {
        title:"Mutton Biryani",
        image:"/img/dishes/img_6.jpg",
        authorImg:"/img/chef/img_5 (1).jpg",
    }
  ].sort(() => Math.random() - 0.5)
 
    return(
        <div>
          <PreviousSearches/>
          <div className="recipes-container">
            {recipes.map((recipe , index) => (
                <RecipesCard key={index} recipe={recipe}/>
            ))}
          </div>
        </div>
    )
}