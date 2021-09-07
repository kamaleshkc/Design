
import './App.css';
import { FaBeer } from 'react-icons/fa';
import Img from './img/chau.jpg'
import MoMoImg from './img/dau.jpg'
import FoodImg from './img/momo.jpg'
import Image from './img/Image.svg'

function App() {
  return (
    <div className="container">
        <div className="app-bar">
            <div className="flex-item-left">
                Discount & Order
            </div>
            <div className="flex-item-right-last">
                <div className="app-bar-right">
                    <div>
                        <div className="input_container">
                            <input type="text" placeholder="search" className="input" />
                            <img src={Image} className="input_img" alt="logo"/>
                        </div>    
                    </div>
                        
                
                    <div className="btn-group">
                        <button className="app-bar-btn"> <FaBeer style={{marginRight:"5px"}}/>Filter</button>
                        <button className="app-bar-btn"><FaBeer style={{marginRight:"5px"}}/>Short by</button>
                        <button className="app-bar-btn"><FaBeer style={{marginRight:"5px"}}/>Short by</button>
                        <button className="app-bar-btn"><FaBeer style={{marginRight:"5px"}}/>Short by</button>
                    </div>

                </div>
                
                

            </div>
        
        </div>

        <hr class="rounded"/>


    <div className="menu-container">
        <div className="active">All</div>
        <div>Active</div>
        <div>Scheduled</div>
        <div>Expired</div>
    </div>
<div className="content-container">
    <div className="card-container">
        <div className="card-items">
            <div className="sub-items">
                <div className="flex-item-left">
                        Discount on items(Normal Discount)
                </div>
                <div className="flex-item-right-las">
                        :
                </div>


                
            </div>
                
            <button className="blue-btn" >Active</button>
            <hr class="rounded"/>
            <div className="sub-items">
                <div className="flex-item-left">
                      Valid Through
                      <div className="sub-items-small">
                      <div className="flex-item-left">

                      17/07/2021-18/07/2021
                      </div>
                </div>
                </div>
                <div className="flex-item-right">
                        Valid on
                        <div className="sub-items-small">
                         <div className="flex-item-left">

                            All Week
                        </div>
                      </div>
                </div>


                
            </div>

            <div className="sub-items">
                <div className="flex-item-left">
                        Type
                      <div className="sub-items-small">
                      <div className="flex-item-left">

                      17/07/2021-18/07/2021
                      </div>
                </div>
                </div>
                <div className="flex-item-right">
                         <div className="image-stack">
                        <div className="image-a">
                            <img src={Img}alt="foodImage"a></img>
                        </div>
                        <div className="image-a" style={{left:"15px"}}>
                            <img src={MoMoImg} alt="foodImage"></img>
                        </div>
                        <div className="image-a"  style={{left:"30px"}}>
                            <img src={FoodImg} alt="foodImage"></img>
                        </div>
                        
                        
                    </div>
                </div>                
            </div>
              
                

                

                




        </div>


    </div>



    <div className="card-container">
        <div className="card-items">
            <div className="sub-items">
                <div className="flex-item-left">
                       Free Pepsi on orders above Rs 250
                </div>
                <div className="flex-item-right-las">
                        :
                </div>


                
            </div>
                
            <button className="red-btn" >Expire</button>
            <hr class="rounded"/>
            <div className="sub-items">
                <div className="flex-item-left">
                      Valid Through
                      <div className="sub-items-small">
                      <div className="flex-item-left">

                      17/07/2021-18/07/2021
                      </div>
                </div>
                </div>
                <div className="flex-item-right">
                        Valid on
                        <div className="sub-items-small">
                         <div className="flex-item-left">

                            All Week
                        </div>
                      </div>
                </div>


                
            </div>

            <div className="sub-items">
                <div className="flex-item-left">
                        Type
                      <div className="sub-items-small">
                      <div className="flex-item-left">

                      17/07/2021-18/07/2021
                      </div>
                </div>
                </div>
                <div className="flex-item-right">
                         <div className="image-stack">
                        <div className="image-a">
                            <img src={Img}alt="foodImage"></img>
                        </div>
                        <div className="image-a" style={{left:"15px"}}>
                            <img src={MoMoImg}alt="foodImage"></img>
                        </div>
                        <div className="image-a"  style={{left:"30px"}}>
                            <img src={FoodImg} alt="foodImage"></img>
                        </div>
                        
                        
                    </div>
                </div>                
            </div>
              
                

                

                




        </div>


    </div>


    <div className="card-container">
        <div className="card-items">
            <div className="sub-items">
                <div className="flex-item-left">
                    50% off on order above Rs 300
                </div>
                <div className="flex-item-right-las">
                        :
                </div>


                
            </div>
                
            <button className="green-btn" >Scheduled</button>
            <hr class="rounded"/>
            <div className="sub-items">
                <div className="flex-item-left">
                      Valid Through
                      <div className="sub-items-small">
                      <div className="flex-item-left">

                      17/07/2021-18/07/2021
                      </div>
                </div>
                </div>
                <div className="flex-item-right">
                        Valid on
                        <div className="sub-items-small">
                         <div className="flex-item-left">

                            All Week
                        </div>
                      </div>
                </div>


                
            </div>

            <div className="sub-items">
                <div className="flex-item-left">
                        Type
                      <div className="sub-items-small">
                      <div className="flex-item-left">

                      17/07/2021-18/07/2021
                      </div>
                </div>
                </div>
                <div className="flex-item-right">
                         <div className="image-stack">
                        <div className="image-a">
                            <img src={Img}alt="foodImage"></img>
                        </div>
                        <div className="image-a" style={{left:"15px"}}>
                            <img src={MoMoImg}alt="foodImage"></img>
                        </div>
                        <div className="image-a"  style={{left:"30px"}}>
                            <img src={FoodImg}alt="foodImage" ></img>
                        </div>
                        
                        
                    </div>
                </div>                
            </div>
              
                
            </div>
                

                




              </div>
        

        


         </div>




         <div className="content-container">
    <div className="card-container">
        <div className="card-items">
            <div className="sub-items">
                <div className="flex-item-left">
                        Discount on items(Normal Discount)
                </div>
                <div className="flex-item-right-las">
                        :
                </div>


                
            </div>
                
            <button className="blue-btn" >Active</button>
            <hr class="rounded"/>
            <div className="sub-items">
                <div className="flex-item-left">
                      Valid Through
                      <div className="sub-items-small">
                      <div className="flex-item-left">

                      17/07/2021-18/07/2021
                      </div>
                </div>
                </div>
                <div className="flex-item-right">
                        Valid on
                        <div className="sub-items-small">
                         <div className="flex-item-left">

                            All Week
                        </div>
                      </div>
                </div>


                
            </div>

            <div className="sub-items">
                <div className="flex-item-left">
                        Type
                      <div className="sub-items-small">
                      <div className="flex-item-left">

                      17/07/2021-18/07/2021
                      </div>
                </div>
                </div>
                <div className="flex-item-right">
                         <div className="image-stack">
                        <div className="image-a">
                            <img src={Img}alt="foodImage"a></img>
                        </div>
                        <div className="image-a" style={{left:"15px"}}>
                            <img src={MoMoImg} alt="foodImage"></img>
                        </div>
                        <div className="image-a"  style={{left:"30px"}}>
                            <img src={FoodImg} alt="foodImage"></img>
                        </div>
                        
                        
                    </div>
                </div>                
            </div>
              
                

                

                




        </div>


    </div>



    <div className="card-container">
        <div className="card-items">
            <div className="sub-items">
                <div className="flex-item-left">
                        Discount on items(Normal Discount)
                </div>
                <div className="flex-item-right-las">
                        :
                </div>


                
            </div>
                
            <button className="red-btn" >Expire</button>
            <hr class="rounded"/>
            <div className="sub-items">
                <div className="flex-item-left">
                      Valid Through
                      <div className="sub-items-small">
                      <div className="flex-item-left">

                      17/07/2021-18/07/2021
                      </div>
                </div>
                </div>
                <div className="flex-item-right">
                        Valid on
                        <div className="sub-items-small">
                         <div className="flex-item-left">

                            All Week
                        </div>
                      </div>
                </div>


                
            </div>

            <div className="sub-items">
                <div className="flex-item-left">
                        Type
                      <div className="sub-items-small">
                      <div className="flex-item-left">

                      17/07/2021-18/07/2021
                      </div>
                </div>
                </div>
                <div className="flex-item-right">
                         <div className="image-stack">
                        <div className="image-a">
                            <img src={Img}alt="foodImage"></img>
                        </div>
                        <div className="image-a" style={{left:"15px"}}>
                            <img src={MoMoImg}alt="foodImage"></img>
                        </div>
                        <div className="image-a"  style={{left:"30px"}}>
                            <img src={FoodImg} alt="foodImage"></img>
                        </div>
                        
                        
                    </div>
                </div>                
            </div>
              
                

                

                




        </div>


    </div>


    <div className="card-container">
        <div className="card-items">
            <div className="sub-items">
                <div className="flex-item-left">
                        Discount on items(Normal Discount)
                </div>
                <div className="flex-item-right-las">
                        :
                </div>


                
            </div>
                
            <button className="green-btn" >Scheduled</button>
            <hr class="rounded"/>
            <div className="sub-items">
                <div className="flex-item-left">
                      Valid Through
                      <div className="sub-items-small">
                      <div className="flex-item-left">

                      17/07/2021-18/07/2021
                      </div>
                </div>
                </div>
                <div className="flex-item-right">
                        Valid on
                        <div className="sub-items-small">
                         <div className="flex-item-left">

                            All Week
                        </div>
                      </div>
                </div>


                
            </div>

            <div className="sub-items">
                <div className="flex-item-left">
                        Type
                      <div className="sub-items-small">
                      <div className="flex-item-left">

                      17/07/2021-18/07/2021
                      </div>
                </div>
                </div>
                <div className="flex-item-right">
                         <div className="image-stack">
                        <div className="image-a">
                            <img src={Img}alt="foodImage"></img>
                        </div>
                        <div className="image-a" style={{left:"15px"}}>
                            <img src={MoMoImg}alt="foodImage"></img>
                        </div>
                        <div className="image-a"  style={{left:"30px"}}>
                            <img src={FoodImg}alt="foodImage" ></img>
                        </div>
                        
                        
                    </div>
                </div>                
            </div>
              
                
            </div>
                               




              </div>
        

        


         </div>

   

    



</div>
  
  
  );
}

export default App;
