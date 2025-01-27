import {useState , useEffect} from "react"
const Banner = () =>{
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const bannerImages = [
        {
            id: 1,
            url: "https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737023082/protein_corner/kytzwmncaozxegy6jydh.webp",
            alt: "Protein Supplements"
        },
        {
            id: 2,
            url: "https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737023098/protein_corner/sumnuizkegmooisj89pz.webp",
            alt: "Pre-Workout Supplements"
        },
        {
            id: 3,
            url: "https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737024411/protein_corner/gwz4wl8yosddl00lrwbj.jpg",
            alt: "Mass Gainers"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => 
                prevSlide === bannerImages.length - 1 ? 0 : prevSlide + 1
            );
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => 
            prevSlide === bannerImages.length - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => 
            prevSlide === 0 ? bannerImages.length - 1 : prevSlide - 1
        );
    };
    return(<>
        <div className="relative w-full md:h-[500px] h-[200px] overflow-hidden">
            {/* Banner Images for Desktop */}
            <div 
                className="flex transition-transform duration-500 ease-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {bannerImages.map((image) => (
                    <>
                       <img
                        key={image.id}
                        src={image.url}
                        alt={image.alt}
                        className=" w-full h-full object-cover flex-shrink-0"
                        loading="lazy"
                    />                 
                </>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white px-4 py-2 rounded-full hover:bg-black/50 transition-all"
                onClick={prevSlide}
            >
                &#10094;
            </button>
            <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white px-4 py-2 rounded-full hover:bg-black/60 transition-all"
                onClick={nextSlide}
            >
                &#10095;
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {bannerImages.map((_, index) => (
                    <button
                        key={index}
                        className={`md:w-10 w-2 md:h-2 h-1 rounded-full transition-all ${
                            currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
                        }`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    </>)
}
export default Banner