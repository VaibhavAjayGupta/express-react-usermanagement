import React, { useEffect, useState } from "react";
import ShowImage from "./showImage";

export default function Images() {
 
    const [images, setImage] = useState([
        "https://images.unsplash.com/photo-1608625597091-9926d45655ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2012&q=80",
        "https://images.unsplash.com/photo-1608671611568-895aaf8ec972?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
        "https://images.unsplash.com/photo-1608665507031-1a70670eafe5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80",
        "https://images.unsplash.com/photo-1608664184721-d03699c48bd3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ]);



    let handleAdd = ()=>{

        setImage([...images,"https://images.unsplash.com/photo-1606851092560-74976b5e6b89?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"]);
       
    }

    return (
        <section>
            <div className="flex justify-center">
                <ShowImage imagesArray={images}/>
            </div>
            <div className="flex justify-around my-5">
                <input type="text" className="p-2 border border-gray-800 shadow rounded" />
                <button className="p-2 bg-green-600 text-white" onClick={handleAdd}>Add Url</button>
            </div>

        </section>
    )
}
