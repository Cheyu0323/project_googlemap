import React from 'react'

const RestaurantItem = ({ datas, moreInfoClick}) => {
    let prices = "";
    for(let i = 1 ; i <= datas.price_level ; i++){
        prices += "$"
    }
    return (
        <div className="restaurantItem">
            <div className="font-weight-400">
                {datas.name}
            </div>
            <div>
                {datas.rating}({datas.user_ratings_total})．{prices}
            </div>
            <div>
                {datas.vicinity}
            </div>
            <div className="more-btn" onClick={() => moreInfoClick(datas)}>
                more
            </div>
        </div>
    )
}

export default RestaurantItem
