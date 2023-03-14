import TripData from "./TripData";
import "./TripStyle.css";
import Trip1 from "./trip1.jpeg";
import Trip2 from "./trip2.jpg";
import Trip3 from "./trip3.jpg";



function Trip() {
    return(
        <div className="trip">
            <h1>
                Recent Trips
            </h1>
            <p className="trip-text">You can discover unique destination using Google Maps</p>
            <div className="tripcard">
                <TripData
                image = {Trip1}
                heading = "Trip In Bandarban"
                text = "Nafa-khum is a waterfall in Bangladesh on the Remaikree River, a tributary of the Sangu River. It is among the largest waterfalls in the country by volume of water falling. The wild hilly Remaikree river suddenly falls down here about 25–30 feet or 7.62-9.144 meters."
                
                
                />
                <TripData
                image = {Trip2}
                heading = "Trip In Saintmartin"
                text = "Saint Martin is part of the Leeward Islands in the Caribbean Sea. It comprises 2 separate countries, divided between its northern French side, called Saint-Martin, and its southern Dutch side, Sint Maarten. The island is home to busy resort beaches and secluded coves."
                
                
                />
                <TripData
                image = {Trip3}
                heading = "Trip In Sylet"
                text = "Bichnakandi, also known as Bisnakandi, is a village in Rustompur Union, Gowainghat Upazila of Bangladesh's Sylhet District. In recent years, there has been an influx of tourists to its river."
                
                
                />

            </div>
        </div>

    );
}

export default Trip;