import react ,{useState}from "react";
import Card from "./Card.jsx";
import axios from "axios";
import {Grid} from "@material-ui/core";
import { FaSearch } from 'react-icons/fa';


const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const [text,setText] = useState("");
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            // console.log("Enter");
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyB94h-03C_2fR0vtXnVMVOQ34R7r9GGzCY' + '&maxResults=30')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err));
            console.log("Book lenght is:"+bookData.length);
        }
    }
    function searchBook2(){
        // console.log("Enter from search");
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyB94h-03C_2fR0vtXnVMVOQ34R7r9GGzCY' + '&maxResults=30')
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err));
    }
    let row1_style={
        backgroundColor:"red",
        backgroundImage: "url('./images/bg1.png')" ,
        backgroundSize: "cover", 
        clipPath:" circle(60% at left 300px)"
    };
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1 style={{fontSize:"4rem",color:"#293462"}}>A room without books is like<br/> a body without a soul.</h1>
                </div>

                <div className="row2">
                    <h2 style={{fontSize:"4.5rem"}}>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name and press ENTER"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        <button onClick={searchBook2}> <FaSearch /> </button>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>
            
            {bookData.length===0 && <h1 className="text">Books Will be displayed here.</h1> }
            <div className="container">
                {/* <h1>{text}</h1><br /> */}
                <Card book = {bookData}/>
            </div>
        </>
    )
}
export default Main;