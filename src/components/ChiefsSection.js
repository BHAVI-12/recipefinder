import ChiefCard from "./ChiefCard"

export default function ChiefsSection(){
    const chiefs =[
        
        {
            name:"Juan Carlos",
            img:"/img/chef/img_1 (1).jpg",
            recipesCount:"10",
            Cuisine:"Mexican",
        },
        {
            name:"John Doe",
            img:"/img/chef/img_2 (1).jpg",
            recipesCount:"05",
            Cuisine:"Japanese",
        },
        {
            name:"Erich Maria",
            img:"/img/chef/img_3 (1).jpg",
            recipesCount:"13",
            Cuisine:"Italian",
        },
        {
            name:"Chris Brown",
            img:"/img/chef/img_4 (1).jpg",
            recipesCount:"08",
            Cuisine:"American",
        },
        {
            name:"Blake Lively",
            img:"/img/chef/img_5 (1).jpg",
            recipesCount:"09",
            Cuisine:"French",
        },
        {
            name:"Ben Affleck",
            img:"/img/chef/img_6 (1).jpg",
            recipesCount:"04",
            Cuisine:"Indian",
        }
    ]

    return(
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
              {/*  <ChiefCard/>
                <ChiefCard/>
                <ChiefCard/>
                <ChiefCard/>
                <ChiefCard/>
                <ChiefCard/>*/}
                {chiefs.map(chief  => <ChiefCard key={chief.name} chief={chief} />)}
            </div>
        </div>
    )
}