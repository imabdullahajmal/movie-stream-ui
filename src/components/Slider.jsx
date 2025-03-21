import React from 'react'
import SliderItem from './SliderItem'
import { useRef } from "react";

const data = [
    {
        image_url:"https://thumb.photo-ac.com/86/863c754b6da73d3329626b610613e434_t.jpeg"
    },
    {
        image_url:"https://thumb.photo-ac.com/86/863c754b6da73d3329626b610613e434_t.jpeg"
    },
    {
        image_url:"https://thumb.photo-ac.com/86/863c754b6da73d3329626b610613e434_t.jpeg"
    },
    {
        image_url:"https://thumb.photo-ac.com/86/863c754b6da73d3329626b610613e434_t.jpeg"
    },
    {
        image_url:"https://thumb.photo-ac.com/86/863c754b6da73d3329626b610613e434_t.jpeg"
    },
    {
        image_url:"https://thumb.photo-ac.com/86/863c754b6da73d3329626b610613e434_t.jpeg"
    },
    {
        image_url:"https://thumb.photo-ac.com/86/863c754b6da73d3329626b610613e434_t.jpeg"
    },
    {
        image_url:"https://thumb.photo-ac.com/86/863c754b6da73d3329626b610613e434_t.jpeg"
    },
    {
        image_url:"https://thumb.photo-ac.com/86/863c754b6da73d3329626b610613e434_t.jpeg"
    },
    {
        image_url:"https://thumb.photo-ac.com/86/863c754b6da73d3329626b610613e434_t.jpeg"
    },
]


const Slider = () => {
    const scrollRef = useRef(null);

    const scrollToStart = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = 0;
        }
    };
    
    const scrollToEnd = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
        }
    };

    return (
        <div className="w-full flex z-[39]">
            <div className="w-[80%] flex m-auto justify-between items-center">
            <button className="bg-gray-800 text-white w-8 h-30 rounded-xl font-bold-[800] text-3xl"onClick={scrollToStart}>{"<"}</button>
                
                {/* Scrollable container */}
                <div className="w-[95%] mx-2 overflow-hidden">
                    <div ref={scrollRef} className="flex overflow-x-auto whitespace-nowrap scrollbar-hide scroll-smooth">
                        {data.map((item, i) => (
                                <SliderItem image_url={item.image_url} rank={i+1} key={i} />
                        ))}
                    </div>
                </div>

                <button className="bg-gray-800 text-white w-8 h-30 rounded-xl font-bold-[800] text-3xl" onClick={scrollToEnd}>{">"}</button>
            </div>
        </div>
    );
};

export default Slider;
