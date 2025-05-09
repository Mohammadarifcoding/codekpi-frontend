import FadeIn from '@/components/shared/animation/FadeIn';
import React from 'react';
import FadeUp from "@/components/shared/animation/FadeUp";
const VideoReviews = () => {
    const FacebookVideos = [
        "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=1210077573571548&show_text=false&width=500",
        "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=1211276673455683&show_text=false&width=500",
        "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=827112132180307&show_text=false&width=500"
    ];

    return (
        <div className="w-full container bangla rounded-lg mx-auto p-3 text-black my-10">
             <FadeIn>
             <h2 className="text-3xl font-semibold text-center">
                শুনুন আমাদের 
                <span className="text-[#0672ACCC]"> শিক্ষার্থীদের</span> কথা
            </h2>

             </FadeIn>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {FacebookVideos.map((video, index) => (
                    <FadeUp  key={index}>

<div
                       
                        className="rounded-lg overflow-hidden   p-2"
                    >
                        <iframe
                            src={video}
                            title={`Facebook video ${index + 1}`}
                            className="w-full h-60 sm:h-80 lg:h-[350px]"
                            allowFullScreen
                        />
                    </div>
                    </FadeUp>
                    
                ))}
            </div>
        </div>
    );
};

export default VideoReviews;
