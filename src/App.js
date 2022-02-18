
import './App.css';
import images from './logo.7cc50008.png';
import images1 from './bg1.png';
import images2 from './bg2.png';
import  YourSvg  from './bulb.svg';
import tik from './tick.svg';
import vid from './video1.mp4';
import vid1 from './video2.mp4';
import vid2 from './video3.mp4';

function App() {
  return (
    <div className="app">
    <div className="header">
      <div className="ideximg">
        <img src={images} alt="IDEX logo"></img>
        </div>  
      <div className="menu">
        <div className="menu-group">
         <p>HOME</p>
         <p>FEATURES</p>
         <p>BLOG</p>
         <p>PRICING</p>
         <p>ENGLISH</p>
         <button>GET STARTED!</button>
         </div>
       </div>
    </div>
    
     <div className="background">
      <div className="bg1">
      <img src={images1} alt="bg1"></img>
      </div>
      <div className="bg2">
      <img src={images2} alt="bg2"></img>
      </div>
      <div className="top">
      <h2>Moving innovation forward</h2>
      <p>Innovation & project management software for collecting, curating, and implementing ideas.</p>
      <div className="idexbutton">
      <button>Experience IDEX</button>
      </div>
      </div>
      </div>
   <div className="container">
     <div className="containeritem">
       <div className="img">
         <img src={YourSvg} alt="bulb"></img>
       </div>
       <p>More Ideas and Better Product</p>
       <span>Involve stakeholders from all sides of your business to collaborate, refine, and prioritize 
         the best ideas. Empower company-wide innovation, 
         foster a culture of ownership, and improve products, processes, and customer satisfaction.</span>
     </div>
     
     <div className="containeritem">
       <div className="img">
         <img src={YourSvg} alt="bulb"></img>
       </div>
       <p>More Ideas and Better Product</p>
       <span>Involve stakeholders from all sides of your business to collaborate, refine, and prioritize 
         the best ideas. Empower company-wide innovation, 
         foster a culture of ownership, and improve products, processes, and customer satisfaction.</span>
         
         
     </div>
     
     <div className="containeritem">
       <div className="img">
         <img src={YourSvg} alt="bulb"></img>
       </div>
       <p>More Ideas and Better Product</p>
       <span>Involve stakeholders from all sides of your business to collaborate, refine, and prioritize 
         the best ideas. Empower company-wide innovation, 
         foster a culture of ownership, and improve products, processes, and customer satisfaction.</span>
     </div>
     
   </div>
   <div className="workcontainer">
     <h2>How its work</h2>
     <div className="left1">
       <div className="text">
         <div className="discription">
           <img src={tik} alt="tick"></img>
           <p>Ideate & Collect</p>
         </div>
         <div className="content">
         Harness the collective innovative power of your organization by allowing anyone to submit an idea,
          openly or anonymously. Find and prioritize the best ideas to implement, and turn them into tasks to realise them.
         </div>
         </div>
         <div className="video1">
            <video controlslist="nodownload" autoPlay controls src={vid} ></video>
         </div>
       
     </div>
     <div className="left2">
       <div className="text1">
         <div className="discription1">
           <img src={tik} alt="tick"></img>
           <p>Plan & Organize</p>
           </div>
           <div className="content1">
           Create projects within your teams to manage your workflow. You can use projects for just about 
           anything, from managing sprints, deadline-driven scheduling, ongoing processes, or storing backlog.
         </div>
         </div>
         <div className="video2">
           <video src={vid1} autoPlay controls alt="video"></video>
         </div>
     
      </div>
      <div className="left3">
        <div className="discription3">
          <div className="text3">
            <img src={tik} alt="tick"></img>
            <p>Visualize & Implement</p>
          </div>
          <div className="content3">
          Switch between list, board, or calendar view to visualize your work. Use list view to prioritize 
          tasks and assign them. Use board view to identify the stages of the tasks and focus on things at hand. 
          Use calendar view to map out tasks over time and give the entire team a common vision to work towards.
          </div>
        </div>
        <div className="video3">
         <video src={vid2} controls autoPlay alt="video"></video>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
