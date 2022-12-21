// importing css file that is present in current folder
import "./whatsapp.css";

const Whatsapp =()=>{
return(
    <>
    <div className="main">
    
      <div className="inbox">
        <div className="profile"></div>
        <div className="search"></div>
        <div className="archived"></div>
        <div className="chat1"></div>
      </div>
      <div className="messageBox">
        <div className="replies"></div>
        <div className="sentMsg"></div>
      </div>
    </div>
    </>
)
}
export default Whatsapp;