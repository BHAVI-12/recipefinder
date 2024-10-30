import MainSection from "../components/MainSection";
import Improveskill from "../components/Improveskill";
import QuoteSection from "../components/QuoteSection";
import ChiefsSection from "../components/ChiefsSection";

export default function Home(){
    return(
      <div>
          <MainSection/>
        <Improveskill/>
        <QuoteSection/>
        <ChiefsSection/>
      </div>
    )
}