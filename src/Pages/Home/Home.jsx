import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Cards from "../../Components/Header/Cards/Cards";


const Home = () => {

    const dataForCards = useLoaderData();

    console.log(dataForCards);



    return (
        <div>
            <Banner></Banner>
            <Cards key={dataForCards.category} dataForCards={dataForCards}></Cards>
            
            
          

        </div>
    );
};

export default Home;