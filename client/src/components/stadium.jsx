import Comments from "./Comments";
import ImageSlider from "./ImageSlider";
import "../assets/css/stadium.css";
function Stadium() {
  const images = [
    "https://i2-prod.dailystar.co.uk/incoming/article29744143.ece/ALTERNATES/s1200d/0_Chelsea-FC-v-Brighton-Hove-Albion-Premier-League.jpg",
    "https://www.talkchelsea.net/wp-content/uploads/2023/01/stamford-bridge-flag-chelsea.jpg",
    "https://icdn.caughtoffside.com/wp-content/uploads/2015/01/Stamford-Bridge.jpg",
    "https://www.talkchelsea.net/wp-content/uploads/2023/07/stamford-bridge-chelsea-matchday.jpg",
  ];
  return (
    <>
      <div className="stadiumContainer">
        <ImageSlider images={images} />
        <br />
        <Comments />
      </div>
    </>
  );
}
export default Stadium;
