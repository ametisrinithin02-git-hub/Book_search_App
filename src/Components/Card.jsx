import react ,{useState}from "react";
import Modal from "./Modal";



function Card(props){
  console.log("Thsi si props");
  console.log(props.book);
  const [show,setShow]=useState(false);
  const [bookItem,setItem]=useState();
  return (
    <>
      {
          props.book.map((item)=>{
            let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
            let amount = item.saleInfo.listPrice&&item.saleInfo.listPrice.amount;
            if(thumbnail !== undefined && amount !== undefined){
                return(
                  <>
                    <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                      <img src = {thumbnail} alt=""/>
                      <div className="bottom">
                          <h3 className="title">{item.volumeInfo.title}</h3>
                          <p className="amount" style={{fontFamily:'sans-serif',fontSize:'15px'}}>&#x20B9;{amount}</p>
                      </div>
                    </div>
                    <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                  </>
                )
            }
            
          })
      }
    </>
  )
}
export default Card;