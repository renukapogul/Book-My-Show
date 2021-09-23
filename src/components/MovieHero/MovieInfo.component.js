import React, { useContext, useState } from 'react';
//context
import { MovieContext } from '../../context/movie.context';
import PaymentModal from '../PaymentModal/Payment.component';

const MovieInfo= () => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    const { movie } = useContext(MovieContext); 
    const genres = movie.genres && movie.genres.map(({name}) => name).join(", ");

    const rentMovies =() => {
        setIsOpen(true);
        setPrice(149);
    };
    const buyMovies =() => {
        setIsOpen(true);
        setPrice(269);
    }
    return (
        
        <>
        <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen } price={price}/>
        <div className="flex flex-col gap-3 lg:gap-8">
            <div className="flex items-center gap-3 ">
                
                    <div className="w-40 h-8">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                            alt="premier"
                            className="w-full h-full" />
                    </div>
                    <span className="bg-bms-700 p-1 text-white  text-xs rouned-md">Streaming Now</span>
        </div>
            
                <h1 className=" text-white lg:text-5xl font-bold hidden lg:block"> {movie.original_title}</h1>
                <div className="flex flex-col-reverse lg:flex-col gap-3 lg:flexcol">
                    <div className="text-white font-light flex flex-col gap-2">
                        <h4> &bull; {movie.original_language}</h4>
                        <h4>{(movie.runtime / 60 ).toFixed(2)} h &bull; {genres} &bull; 16+ &bull; 21 Mar, 2019</h4>
                    </div>
            
                    <div className="flex items-center gap-3 ">
                        <button onClick={rentMovies} className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"> 
                            Rent ₹149

                        </button>
                        <button onClick={buyMovies} className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"> 
                            Buy  ₹269

                        </button>
                    </div> 
                </div>
            </div>
        </>
    )
    
}

export default MovieInfo;