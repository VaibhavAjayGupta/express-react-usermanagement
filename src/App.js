import React, { useEffect, useState, useRef } from "react";
import Images from "./components/Images";
import "./assets/css/style.css";

function App() {

    const [title, setTitle] = useState("Hello React");
    const [isShowing, setIsShowing] = useState(false);
    const mountRef = useRef(false);

    let handleClick = () => {
        setIsShowing(!isShowing);
    }


    // for using as didMount
    useEffect(() => {
        console.log('App Mounted');
    }, [])

    // for using as appUdated for a particular state also the hack to stop calling at the time of Mount.
    useEffect(() => {
        
        if(mountRef.current)
        console.log("App Updated");
        else
        mountRef.current = true;

    }, [isShowing])

    return (
        <section className="flex justify-center">
            <div className="w-1/2">
                <div className="text-center">
                    <div className="my-4">{title}</div>
                    <button className="p-1 bg-blue-700 text-white my-2" onClick={handleClick}>Toggle Image</button>
                    <div>
                        {
                            isShowing ? (<Images />)
                                : null
                        }

                    </div>
                </div>
            </div>
        </section>
    );
}

// class App extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { title: "Hello React", isShowing: false };

//     }

//     handleClick= () => {
//         this.setState({isShowing : !this.state.isShowing});
//     }

//     render() {
//         return (
//             <section className="flex justify-center">
//                 <div className="w-1/2">
//                     <div className="text-center">
//                         <div className="my-4">{this.state.title}</div>
//                         <button className="p-1 bg-blue-700 text-white my-2" onClick={this.handleClick}>Toggle Image</button>
//                         <div>
//                             {
//                                 this.state.isShowing ? (<img alt="Happy Birthday" src="https://images.unsplash.com/photo-1608625597091-9926d45655ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2012&q=80" />)
//                                     : null 
//                             }

//                         </div>
//                     </div>
//                 </div>
//             </section>
//         );
//     }
// }

export default App;