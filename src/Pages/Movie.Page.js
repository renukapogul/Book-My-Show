import React, { useContext,useState, useEffect } from 'react';
import {FaCcVisa, FaCcApplePay} from "react-icons/fa";
import axios from 'axios';
//component

import MovieHero from '../components/MovieHero/MovieHero.component';
import Cast from '../components/Cast/Cast.component';
import  PosterSlider from "../components/PosterSlider/PosterSlider.component";
import Slider from 'react-slick';

//config 
import TempPosters from "../config/TempPoster.config"

//context
import { MovieContext } from '../context/movie.context';
import { useParams } from 'react-router';




const Movie = () => {
    const {id} =useParams();
    const { movie } = useContext(MovieContext); 
    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        const requestCast = async () =>{
             const getCast = await axios.get(`/movie/${id}/credits`);
             setCast(getCast.data.cast);
        }
        requestCast();
    }, [id]);

    useEffect (() => {
        const requestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
            setSimilarMovies(getSimilarMovies.data.results);

        };
        requestSimilarMovies();
    }, [id]);

    
        
    
    
        const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        InitialSlide: 0,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                    InitialSlide: 2,
                },
            },
            {
                breakpoint:480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        
        ],
    };

    const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        InitialSlide: 0,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 4,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToScroll: 5,
                    slidesToShow: 2,
                    InitialSlide: 2,
                },
            },
            {
                breakpoint:480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        
        ],
    };
    

    return (
        <>
           <MovieHero/>
           <div className="container  px-4 my-12 lg:w-2/3  lg:ml-20">
               <div className=" flex flex-col items-start gap-3">
                    <h2 className="text-gray-800 text-2xl font-bold">About the Movie</h2>
                    <p>
                        {movie.overview}
                    </p>
                </div>
                <div className="my-8"> 
                    <hr/>
                </div>
                <div className="my-8">
                
                    <h2 className="text-gray-800 text-2xl font-bold mb-3"> Applicable Offer</h2>
                    <div className="flex flex-col gap-3 lg:flex-row"> 
                    <div className="my-8">
                    
                    <div className="flex items-start gap-2 bg-yellow-100 px-2 p-3v  border-yellow-300 border-dashed border-2 rounded-md">
                        <div className="w-8 h-8">
                            <FaCcVisa className="w-full h-full "/>
                        </div>
                        <div className=" flex flex-col items-start">
                            <h2 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h2>
                            <p className="text-gray-600">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                        </div>
                    </div>
                        </div>
                        

                        <div className="my-8">
                    
                            <div className="flex items-start gap-2 bg-yellow-100 px-2 p-3v  border-yellow-300 border-dashed border-2 rounded-md">
                                <div className="w-8 h-8">
                                    <FaCcApplePay className="w-full h-full "/>
                                </div>
                                <div className=" flex flex-col items-start">
                                    <h2 className="text-gray-700 text-xl font-bold">Filmy Pass</h2>
                                    <p className="text-gray-600">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                                </div>
                            </div>
                        </div>
                        
                </div>
                <div className="my-6"> 
                    <hr/>
                </div>
               </div>
                

                <div className="my-8">
                    <h2 className="text-gray font-bold text-2xl  mb-4">Cast & Crew</h2>
                
                    <Slider {...settingsCast}>
                    {cast.map((castdata) => (
                        <Cast image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
                        castName={castdata.original_name} 
                        role={castdata.character}
                        />
                    ))}
                    </Slider>
                </div>
           
                <div className="my-8">
                        <PosterSlider 
                            config={settings}
                            images={similarMovies} 
                            title="You might also like" 
                            isDark={false}
                                /> 
                </div>
                <div className="my-8"> 
                    <hr/>
                </div>

                
           </div>
           
        </>
    )
}

export default Movie;