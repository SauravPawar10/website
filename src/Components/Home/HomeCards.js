import React from 'react'

const HomeCards = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="py-14 lg:py-24">
                <div className="px-3.5">
                    <h2 className="text-center text-4xl font-bold">
                        Learn More about Peak Academy
                    </h2>
                </div>
                <div className="px-3.5 my-7">
                    <div class="flex justify-center flex-wrap">
                        <div class="field--item per-row-item">
                            <div class="paragraph paragraph--type--icon-list-item paragraph--view-mode--default icon-linked">
                                <a href="/academy/our-mission-philosophy" class="paragraph-icon icon-link">
                                    <span class="field field--name-field-image field--type-entity-reference field--label-hidden field--item">
                                        <img src="/sites/default/files/styles/icon_list_item_thumbnail/public/2021-06/medal.png?itok=39dtigwk" width="80" height="80" alt="Medal icon" loading="lazy" class="img-responsive" />
                                    </span>
                                    <h3>
                                        <span class="field field--name-field-title field--type-string field--label-hidden field--item mkdf-banner-title-inner">Our Missions
                                            <span class="mkdf-banner-title-highlighted-item"></span>
                                        </span>
                                    </h3>
                                    <div class="field field--name-field-body field--type-text-long field--label-hidden field--item"><p>We are a caring community school focusing on nurturing the child</p>
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
            </div>
        </div>
    )
}

export default HomeCards
