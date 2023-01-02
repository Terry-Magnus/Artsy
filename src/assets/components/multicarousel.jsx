import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const MultiCarousel = () => {
    const n = 4; // Creates 5 carousels at once and groups them in a div
    return (
        <div className="multicarousel">
            {[...Array(n)].map((e, i) => (
                <Carousel
                    key={i}
                    autoPlay={true}
                    width="100%"
                    infiniteLoop={true}
                    showIndicators={false}
                    showThumbs={false}
                    showArrows={false}
                    showStatus={false}
                    interval={2000}
                >
                    <div>
                        <img
                            src={process.env.PUBLIC_URL + "/images/maple.png"}
                            alt="maple"
                        />
                    </div>
                    <div>
                        <img
                            src={process.env.PUBLIC_URL + "/images/shades.png"}
                            alt="shades"
                        />
                    </div>
                    <div>
                        <img
                            src={process.env.PUBLIC_URL + "/images/berry.png"}
                            alt="berry"
                        />
                    </div>
                    <div>
                        <img
                            src={process.env.PUBLIC_URL + "/images/ginger.png"}
                            alt="ginger-girl"
                        />
                    </div>
                </Carousel>
            ))}
        </div>
    );
};

export default MultiCarousel;
