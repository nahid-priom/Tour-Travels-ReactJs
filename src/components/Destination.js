import DestinationData from "./DestinationData";
import "./DestinationStyle.css";
import image1 from "./5.jpg";
import image2 from "./6.jpg";
import image3 from "./c1.jpg";
import image4 from "./c2.jpg";

function Destination() {
  return (
    <div className="destination">
      <h1>Populer Destination</h1>
      <p>Guide Tours provide detailed and up to date travel information</p>

      <DestinationData
        cName="first-des"
        heading="Marayontong"
        text="Merai Thong is a peak of northern Mirinja range.It is located at
     Alikadam upazilla of Bandarban hill district.There is a Buddhist
     Jadi near the summit point of this peak.View from the top is mind
     blowing. It is now a major tourist attraction of Alikadam. Many
     traveler comes here and camp here at night.There is a Murong village
     just 700 feet below this peak. Highest elevation of the top point is
     1,666 ft(+/-3ft).\"
        img1={image1}
        img2={image2}
      />
      <DestinationData
        cName="first-des-reverse"
        heading="Nafakhum"
        text="Nafa-khum is a waterfall in Bangladesh on the Remaikree River, a tributary of the Sangu River. It is among the largest waterfalls in the country by volume of water falling. The wild hilly Remaikree river suddenly falls down here about 25–30 feet or 7.62-9.144 meters."
        img1={image3}
        img2={image4}
      />
    </div>
  );
}
export default Destination;
