import React from "react";


export default function Switch(props) {
    const {pages, active, setActive} = props


    return (
        <div class={"dots dark"}>
            <ul className="menu-list right-boxed">
                {pages.map((_,index)=>(
                    <li data-menuanchor={"page"+index} >
                        <a class={active === index? "active":""}>
                            <span about={index} onClick={()=>{ setActive(index)}} style={{borderColor: "rgb(0, 0, 0)"}}/>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
