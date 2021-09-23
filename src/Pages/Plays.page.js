import React from 'react'
//components
import PlaysFilters from '../components/PlaysFilters/PlaysFilters.component';
import Poster from '../components/Poster/Poster.component';

const Plays = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="w-full  lg:flex lg:flex-row-reverse">
                    <div className="lg:w-3/4">
                        <h2 className="text-2xl font-bold mb-4">Plays in Mumbai </h2> 
                        
                        <div className="flex flex-wrap ">
                            <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12 ">

                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314717-xevgbwqkxe-portrait.jpg"
                                title="Prison Games"
                                subtitle="Experimental | English, Hindi | 16yrs + | 1hr 30mins"
                                />
                            </div>
                            <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314717-xevgbwqkxe-portrait.jpg"
                                title="Prison Games"
                                subtitle="Experimental | English, Hindi | 16yrs + | 1hr 30mins"
                                />
                            </div>
                            <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12"> 
                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314717-xevgbwqkxe-portrait.jpg"
                                title="Prison Games"
                                subtitle="Experimental | English, Hindi | 16yrs + | 1hr 30mins"
                                />
                            </div>
                            <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314717-xevgbwqkxe-portrait.jpg"
                                title="Prison Games"
                                subtitle="Experimental | English, Hindi | 16yrs + | 1hr 30mins"
                                />
                            </div>
                        </div>
                    </div> 
                    <div className="lg:w-3/12  ">
                        <h2 className="text-2xl font-bold mb-4">Filters </h2>
                        <div >
                            <PlaysFilters title="Date" tags={["Today", "Tomorrow", "This weekend"] }/>
                            <PlaysFilters title="Language" tags={["Tamil", "Telugu", "English"] }/>
                            <PlaysFilters title="Categories" tags={["Theatre",  "Experimental"] }/>
                            <PlaysFilters title="Genres" tags={["Comedy", "Drama"] }/>
                            <PlaysFilters title="Price" tags={["free", "0-500", "501-2000", "2000 above"] }/>
                            
                        </div>


                    </div>
                                  
                </div>    
            </div>
        </>
    )
}

export default Plays;
