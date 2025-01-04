import React from "react";

const PromoStats = ({ rating, reviews, graduatesCount }) => {
    return (
        <div className="promo-stats">
            <div className="promo-stat">
                <p className="promo-rating">{rating} <span>★★★★★</span></p>
                <p className="graduades-count-text">{reviews}</p>
            </div>
            <div className="promo-stat">
                <p className="promo-graduates">{graduatesCount}</p>
                <p className="graduades-count-text">трудоустроенных выпускников</p>
            </div>
        </div>
    );
};

export default PromoStats;