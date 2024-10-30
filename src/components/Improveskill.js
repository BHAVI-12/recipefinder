export default function Improveskill(){
    const list =[
        "Learn new recepies",
        "Experiment with food",
        "write your own recepies",
        "know nutrition facts",
        "Get cooking facts",
        "Get ranked"
    ]
    return(
        <div className="section improve-skill">
              <div className="col img">
                <img src="/img/dishes/img_10.jpg" alt=""/>
              </div>
        <div className="col typography">
          <h1 className="title"> Improve Your Culinary Skills</h1>
           {list.map((item, index) =>(
            <p className="skill-item" key={index}>{item}</p>
        
            ))}
         <button className="btn">Sign up</button>

        </div>
      
     </div>
    )
}