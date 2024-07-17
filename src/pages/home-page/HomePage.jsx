import Interstellar from "../../components/Interstellar/Interstellar"
import Hero from "../../components/hero/Hero"
import Hero2 from "../../components/hero2/Hero2"
import Horror from "../../components/horror/Horror"
import SearchMovie from "../../components/search-movie/SearchMovie"


const HomePage = () => {
    return (
        <div>
            <Hero />
            <SearchMovie/>       
            <Horror/>
            <Hero2/>
            <Interstellar/>
        </div>
    )
}

export default HomePage