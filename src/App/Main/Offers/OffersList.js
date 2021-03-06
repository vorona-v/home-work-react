import React from "react"

const OffersList = () => {
    return (
        <div className="flat-hoot-offer-wrap">
            <div className="container">
                <div className="flat-hoot-offer-title">What can DuHoot offer to you?</div>
                <div className="flat-hoot-offer-subtitle">Etiam cursus ipsum quis enim faucibus</div>
                <div className="flat-offer-category-wrap">
                    <div className="flat-offer-category flat-home active"><span className="fas fa-home"></span></div>
                    <div className="flat-offer-category flat-user"><span className="fas fa-user-alt"></span></div>
                    <div className="flat-offer-category flat-education"><span className="fas fa-graduation-cap"></span></div>
                    <div className="flat-offer-category flat-music"><span className="fas fa-music"></span></div>
                    <div className="flat-offer-category flat-travel"><span className="fas fa-bus"></span></div>
                </div>
                <div className="flat-offer-info-wrap">
                    <div className="flat-offer-item flat-offer-home-wrap flat-home">
                        <h3 className="flat-offer-info-title">Reality</h3>
                        <div className="flat-offer-info-item">
                            <i className="fas fa-bolt"></i>
                            <span className="flat-offer-info-text">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi gravida tellus in
                                purus pharetra, vel dignissim mauris viverra. Maecenas vitae risus est. In hendrerit, massa at.</span>
                        </div>
                        <div className="flat-offer-info-item">
                            <i className="fas fa-leaf"></i>
                            <span className="flat-offer-info-text">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi gravida tellus in
                                purus pharetra, vel dignissim mauris viverra. Maecenas vitae risus est. In hendrerit, massa at.</span>
                        </div>
                    </div>
                    <div className="flat-offer-item flat-offer-user-wrap"></div>
                    <div className="flat-offer-item flat-offer-graduation-wrap"></div>
                    <div className="flat-offer-item flat-offer-music-wrap"></div>
                    <div className="flat-offer-item flat-offer-bus-wrap"></div>
                </div>
            </div>
        </div>
    )
}

export default OffersList