import CustomImage from "./CustomImage"

export default function RecipesCard({recipe}){
    return(
        <div className="recipe-card">
          <CustomImage imgSrc={recipe.image} pt="65%"/>
          <div className="recipe-card-info">
             <img className="auther-img" src={recipe.authorImg} alt=""/>
             <p className="recipe-title">{recipe.title}</p>
             <p className="recipe-desc">  ipsum is simply duy text of the printing and typesetting industry</p>
             <a className="view-btn" href="#!">VIEW RECIPE</a>
          </div>
        </div>
    )
}