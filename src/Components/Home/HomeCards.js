import React from 'react'
import img from "../../assets/images/card-medal.png"

const HomeCards = () => {

    const cardData = [
        { title: "OUR MISSIONS", desc: "We are a caring community school focusing on nurturing the child", icons: img },
        { title: "OUR MISSIONS", desc: "We are a caring community school focusing on nurturing the child", icons: img },
        { title: "OUR MISSIONS", desc: "We are a caring community school focusing on nurturing the child", icons: img },
        { title: "OUR MISSIONS", desc: "We are a caring community school focusing on nurturing the child", icons: img },
        { title: "OUR MISSIONS", desc: "We are a caring community school focusing on nurturing the child", icons: img },
        { title: "OUR MISSIONS", desc: "We are a caring community school focusing on nurturing the child", icons: img },
    ]


    return (
        <div className="max-w-6xl mx-auto">
            <div className="py-14 lg:py-24">
                <div className="px-3.5">
                    <h2 className="text-center text-4xl font-bold">
                        Learn More about Peak Academy
                    </h2>
                </div>
                {cardData.map((aa) => {
                    <div className="px-3.5 my-7">
                        <div class="flex justify-center flex-wrap">
                            <div class="relative px-3.5 mb-7">
                                <div class=" border-2 border-yellow flex flex-col text-lg font-bold h-full p-5 text-center w-full">
                                    <a href="#" class="">
                                        <span class="">
                                            <img src={aa.icons} width="80" height="80" alt="Medal icon" loading="lazy" class="img-responsive" />
                                        </span>
                                        <h3 className="uppercase text-2xl text-blue-100 hover:text-white mt-6 mb-3">
                                            <span class="py-3.5 px-2.5" style={{ transition: "color 500ms ease-in-out" }}>{aa.title}
                                                <span class="mkdf-banner-title-highlighted-item"></span>
                                            </span>
                                        </h3>
                                        <div class=" text-lg text-center my-auto font-normal"><p className="mb-4">{aa.desc}</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="mkdf-btn-top-line"></div>
                                <div class="mkdf-btn-right-line"></div>
                                <div class="mkdf-btn-bottom-line"></div>
                                <div class="mkdf-btn-left-line"></div>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}

export default HomeCards
