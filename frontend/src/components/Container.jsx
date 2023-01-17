import SearchLocation from "./SearchLocation";
import { WeatherProvider } from '../context/WeatherContext.js';

const Container = () => {
    return (
        <WeatherProvider> 
        <div className="container">
            <h1>Take a weather check!</h1> 
            <SearchLocation className='search' />     
        </div>
        </WeatherProvider>
    )
}
export default Container;