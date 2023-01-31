import React, {useState} from "react";
import "./nav-posts.less"



export default function NavPost(prop) {
    const [categoriesData, setCategoriesData] = useState(prop.cateData)
    const [current, setCurrent] = useState(-1)
    const [sub_current, setSub_current] = useState(-1)

    function handleClick (id, sub_id) {
        setCurrent(id)
        setSub_current(sub_id)
        if(!isNaN(sub_id)){
            prop.setActiveCategoryId(sub_id)
        }else {
            prop.setActiveCategoryId(id)
        }
    }

    return (
        <div className={"categoryNav"}>
            {
                categoriesData.map((category,index) => (
                    <div className={`dropdown ${current === category.id ? 'active' : null }`}
                         onClick={category.cub_cate === undefined && current !== category.id ? handleClick.bind(this,category.id) : null }
                         style={{marginLeft:0}} key={index} >
                        <span>{category.name}</span>
                        { category.cub_cate === undefined ? null : (
                            <div className={"dropdown-content"}>
                                { category.cub_cate.map((cate, index) => (
                                    <p className={sub_current === cate.id ? 'active' : null }
                                       onClick={sub_current !== cate.id ? handleClick.bind(this,category.id, cate.id):null}
                                       key={index} >{cate.name}</p>
                                ) ) }
                            </div>
                        ) }
                    </div>
                ))
            }
        </div>
    )
}