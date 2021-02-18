import React from 'react'
import { useState } from 'react'
import OptionsItem from "./OptionsItem"
import RestaurantItem from "./RestaurantItem"
import RestaurantInfo from "./RestaurantInfo"


const RestaurantMenu = ({ GoogleDatas }) => {
    
    console.log(GoogleDatas.length)
    const list = ["高到低","低到高"]
    
    const [pricetlist, setPricetList] = useState('');
    const priceListSelectedHandler = (e) => {
        setPricetList(e.target.value);
        if(e.target.value==="高到低"){
            GoogleDatas.sort((a, b) => a.price_level > b.price_level ? -1 : 1)
        }else{
            GoogleDatas.sort((a, b) => a.price_level > b.price_level ? 1 : -1)
        }
        
    };

    const [ratingList, setRatingList] = useState('');
    const ratingListSelectedHandler = (e) => {
        setRatingList(e.target.value);
        if(e.target.value==="高到低"){
            GoogleDatas.sort((a, b) => a.rating > b.rating ? -1 : 1)
        }else{
            GoogleDatas.sort((a, b) => a.rating > b.rating ? 1 : -1)
        }
    };
    
    const [switchInfo,setInfo] = useState("");

    const MoreInfo = (data) => {
        setInfo(<RestaurantInfo datas={data}/>)
    }

    let restaurantItem;
    let restaurantLists = [];
    if(GoogleDatas){
        for (let i = 0; i < GoogleDatas.length; i++) {
            restaurantItem = <RestaurantItem 
                                datas = {GoogleDatas[i]}
                                moreInfoClick={MoreInfo}
                            />;
            restaurantLists.push(restaurantItem);
        }
        
    }

    return (
        <div className="restaurantMenu">
            <div>
                <div className="optionArea">
                    <OptionsItem title={"評級："} list={list} selectValue={ratingList}  onChangeList={ratingListSelectedHandler} />
                    <OptionsItem title={"價格："} list={list} selectValue={pricetlist} onChangeList={priceListSelectedHandler}/>
                </div>
                <div>
                    {switchInfo}
                    {restaurantLists}
                    
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu
