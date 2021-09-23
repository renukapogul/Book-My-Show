const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
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

export default settings;