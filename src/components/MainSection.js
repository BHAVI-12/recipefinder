import CustomImage from "./CustomImage"

export default function MainSection(){
    const image = [
        "/img/dishes/img_1.jpg",
        "/img/dishes/img_2.jpg",
        "/img/dishes/img_3.jpg",
        "/img/dishes/img_4.jpg",
        "/img/dishes/img_5.jpg",
        "/img/dishes/img_6.jpg",
        "/img/dishes/img_7.jpg",
        "/img/dishes/img_8.jpg",
        "/img/dishes/img_9.jpg"
    ]
    return(
        <div className="section hero">
           <div className="col typography">
             <h1 className="title"> What Are We About</h1>
             <p className="info">FoodiesHub sa place where you can
                        please your soul and termy with delicious food recepies.of al cuisine And
                        aur service is absorutery free So start
                        exploring now</p>
            <button className="btn">Explore Now</button>
 
           </div>
           <div className="col gallery">
            {image.map((src , index) => (
               <CustomImage key={index} imgSrc={src} pt={"90%"}/>
            ))}
           
      
     

           </div>
        </div>
    )
}