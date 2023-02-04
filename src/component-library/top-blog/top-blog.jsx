import React, {useState} from "react";

import "./top-blog.css"
// import {getChickenSoup} from "../../api/blog";

export default function TopBlog(prop) {
    const [sentence, setSentence] = useState(prop.chickenSoup)

     const changeSoup = () =>{
        // getChickenSoup().then(res=>{
        //     console.log(res)
        //     setSentence(res.data.sentence)
        // }).catch(error=>{
        //     console.log(error)
        // })
    }

    return (
        <div className={"top"} onClick={changeSoup} style={{cursor: "pointer"}}>
            {sentence !== undefined?(
                <h1>{sentence}</h1>
            ):(
                <h1>慢慢来，比较快！</h1>
            )}
        </div>
    )
}