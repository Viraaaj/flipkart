import React, { Component } from 'react';
import "./Cards.css";

export class Cards extends Component {

  constructor(props){
    super(props);
    this.state ={
      defaultItems: true,
      menItems: false,
      womenItems: false,
      smallSize: false,
      mediumSize: false,
      largeSize: false,
      costLowToHigh: false,
      costHighToLow: false
    }
  }





  render() {
    return (

      <div>
        {this.state.menItems ? <h2 style={{textAlign:"center"}}>Men's Accessories</h2> :
        this.state.womenItems ? <h2 style={{textAlign:"center"}}>Women's Accessories</h2> :
        this.state.smallSize ? <h2 style={{textAlign:"center"}}>Filtered according to Small size</h2> :
        this.state.mediumSize ? <h2 style={{textAlign:"center"}}>Filtered according to Medium size</h2> :
        this.state.largeSize ? <h2 style={{textAlign:"center"}}>Filtered according to Large size</h2> :
        this.state.costLowToHigh ? <h2 style={{textAlign:"center"}}>Sorted according to cost: Low to High</h2> :
        this.state.costHighToLow ? <h2 style={{textAlign:"center"}}>Sorted according to cost: High to Low</h2> :
        <h2 style={{textAlign:"center"}}>Default Items</h2>}

      <div style={{display:"flex", padding:20}}>



                            {/* sort and filter nav bar  */}
        <div style={{ flexDirection:"column", marginRight: 50 }}>

          <h3 style={{color: "#2874f0"}}> Filter items according to: </h3>

          <h4 
            onClick = {() => this.setState({smallSize: true, mediumSize: false, largeSize: false, menItems: false, womenItems:false, defaultItems: false, costLowToHigh: false, costHighToLow: false})} > 
              1. Small Size 
          </h4>

          <h4 
            onClick = {() => this.setState({mediumSize: true, smallSize:false, largeSize: false, menItems:false, womenItems:false, defaultItems: false, costLowToHigh: false, costHighToLow: false})} > 
              2. Medium Size 
          </h4>

          <h4 
            onClick = {() => this.setState({largeSize: true, smallSize:false, mediumSize:false, menItems:false, womenItems: false, defaultItems: false, costLowToHigh: false, costHighToLow: false})} > 
              3. Large Size 
          </h4>
          
          <h4 
            onClick={() => this.setState({menItems : true, smallSize:false, mediumSize: false, largeSize: false, womenItems: false, defaultItems: false, costLowToHigh: false, costHighToLow: false})} > 
              4. Men 
          </h4>
          
          <h4 
            onClick={() => this.setState({womenItems : true, smallSize:false, mediumSize: false, largeSize: false, menItems: false, defaultItems: false, costLowToHigh: false, costHighToLow: false})} > 
              5. Women 
          </h4>

          <h3 style={{marginTop: 80, color: "#2874f0"}}> Sort items according to: </h3>

          <h4 
            onClick={() => this.setState({ costLowToHigh : true, costHighToLow: false, womenItems : false, smallSize:false, mediumSize: false, largeSize: false, menItems: false, defaultItems: false })} > 
              1. Cost: Low to high 
          </h4>

          <h4 
            onClick={() => this.setState({ costHighToLow: true, costLowToHigh : false, womenItems : false, smallSize:false, mediumSize: false, largeSize: false, menItems: false, defaultItems: false })} > 
              2. Cost: High to low 
          </h4>

          <h3 
            onClick={() => this.setState({ defaultItems: true, costHighToLow: false, costLowToHigh : false, womenItems : false, smallSize:false, mediumSize: false, largeSize: false, menItems: false })} 
            style={{marginTop: 50, color: "#2874f0", cursor:"pointer"}}> 
            Clear filters (Default Items) 
          </h3>

        </div>





                                  {/* sorting according to men */}
        { this.state.menItems && <div style={{ display:"flex", justifyContent:"space-between", flex:1 }}>


          <div style={{justifyContent:"space-evenly", flex:1}}>
            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://hrxbrand.com/public/img/1gUIjmZ.png" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >HRX 
              <p style={{ marginTop:-1, color:"#000000" }}>
              Men regular t-shirt
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹799 </p>
              <p style={{marginTop:-8}}> Size L </p>
            </div>


            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C71kevjBxElL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UX342_.png" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >React 
              <p style={{ marginTop:-1, color:"#000000" }}>
              Men Regular Fit Printed Spread round neck t-Shirt
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹1999 </p>
              <p style={{marginTop:-8}}> Size L </p>
            </div>
          </div>


          <div style={{justifyContent:"space-evenly", flex:1}}>
            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://assets.indiadesire.com/images/BrooklynBluesMensCheckeredCasualMulticolorShirt_indiadesire.jpg" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >Jiyan Enterprise 
              <p style={{ marginTop:-1, color:"#000000" }}>
              Men Regular Fit Printed Spread Collar Casual Shirt
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹499 </p>
              <p style={{marginTop:-8}}> Size M </p>
            </div>


            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://i.pinimg.com/originals/8a/47/0a/8a470a18649a104dd020ad7116c693f1.jpg" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >HRX
              <p style={{ marginTop:-1, color:"#000000" }}>
              Men Regular Fit Printed t-Shirt
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹859 </p>
              <p style={{marginTop:-8}}> Size L </p>
            </div>
          
          </div>


          <div style={{justifyContent:"space-evenly", flex:1}}>
            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://rukminim1.flixcart.com/image/332/398/jzzvs7k0/shirt/h/a/h/l-c301-dustypink-dennis-lingo-original-imafjvx7b9jguhdv.jpeg?q=50" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >Jiyan Enterprise 
              <p style={{ marginTop:-1, color:"#000000" }}>
              Men Regular Fit Printed Spread Collar Casual Shirt
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹699 </p>
              <p style={{marginTop:-8}}> Currently out of stock :( </p>
            </div>


            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://5.imimg.com/data5/VB/KL/SS/SELLER-43347204/mens-casual-blazer-500x500.jpeg" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >Jiyan Enterprise 
              <p style={{ marginTop:-1, color:"#000000" }}>
              Men Regular Fit Printed Spread Collar Casual Shirt
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹759 </p>
              <p style={{marginTop:-8}}> Currently out of stock :( </p>
            </div>

          </div>
        </div>}






                            {/* sorting according to Women */}
        { this.state.womenItems && <div style={{ display:"flex", justifyContent:"space-between", flex:1 }}>

          <div style={{justifyContent:"space-evenly", flex:1}}>
            <div className="cards">
            <img
            style={{ height:320, width:280, alignSelf:"center" }} 
            src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11090418/2019/12/14/c268a799-be56-4782-9d57-25161396c5251576303930484-Anubhutee-Women-Pink--White-Printed-Kurta-with-Palazzos-6015-1.jpg" alt="clothing-images"/>

            <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >W 
            <p style={{ marginTop:-1, color:"#000000" }}>
            Women Printed Cotton Rayon Blend A-line Kurta
            </p> 
            </p>
            <p style={{marginTop:-8}}> ₹859 </p>
            <p style={{marginTop:-8}}> Size M </p>
            </div>
          </div>


          <div style={{justifyContent:"space-evenly", flex:1}}>
            <div className="cards">
            <img
            style={{ height:320, width:280, alignSelf:"center" }} 
            src="https://i.pinimg.com/originals/97/2d/fd/972dfdb88ae64e508ccf650ee4d992c8.jpg" alt="clothing-images"/>

            <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >BEHAV 
            <p style={{ marginTop:-1, color:"#000000" }}>
            Women Printed Cotton Rayon Blend A-line Kurta
            </p> 
            </p>
            <p style={{marginTop:-8}}> ₹759 </p>
            <p style={{marginTop:-8}}> Size L </p>
            </div>
          </div>


          <div style={{justifyContent:"space-evenly", flex:1}}>                 
            <div className="cards">
            <img
            style={{ height:320, width:280, alignSelf:"center" }} 
            src="https://images.in.locan.to/Latest-and-Trendy-Kurti-Palazzo-Set-for-Women-and-Girls/vap_5000433810.jpg" alt="clothing-images"/>

            <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >Ada
            <p style={{ marginTop:-1, color:"#000000" }}>
            Women Printed Cotton Rayon Blend A-line Kurta
            </p> 
            </p>
            <p style={{marginTop:-8}}> ₹999 </p>
            <p style={{marginTop:-8}}> Currently out of stock :( </p>
            </div>
            </div>

        </div>}



          {/* sorting according to smallSize */}
        { this.state.smallSize && <div>

          <h2>
            Sorry, no results found!
            Please try searching for something else :)
          </h2>
          

        </div>}



                  {/* sorting according to mediumSize */}
        { this.state.mediumSize && <div style={{ display:"flex", justifyContent:"space-between", flex:1 }}>


          <div style={{justifyContent:"space-evenly", flex:1}}>
            <div className="cards">
            <img
            style={{ height:320, width:280, alignSelf:"center" }} 
            src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11090418/2019/12/14/c268a799-be56-4782-9d57-25161396c5251576303930484-Anubhutee-Women-Pink--White-Printed-Kurta-with-Palazzos-6015-1.jpg" alt="clothing-images"/>

            <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >W 
            <p style={{ marginTop:-1, color:"#000000" }}>
            Women Printed Cotton Rayon Blend A-line Kurta
            </p> 
            </p>
            <p style={{marginTop:-8}}> ₹859 </p>
            <p style={{marginTop:-8}}> Size M </p>
            </div>
          </div>


          <div style={{justifyContent:"space-evenly", flex:1}}>
            <div className="cards">
            <img
            style={{ height:320, width:280, alignSelf:"center" }} 
            src="https://assets.indiadesire.com/images/BrooklynBluesMensCheckeredCasualMulticolorShirt_indiadesire.jpg" alt="clothing-images"/>

            <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >Jiyan Enterprise 
            <p style={{ marginTop:-1, color:"#000000" }}>
            Men Regular Fit Printed Spread Collar Casual Shirt
            </p> 
            </p>
            <p style={{marginTop:-8}}> ₹499 </p>
            <p style={{marginTop:-8}}> Size M </p>
            </div>
          </div>

        </div>}




                          {/* sorting according to largeSize */}
         { this.state.largeSize && <div style={{ display:"flex", justifyContent:"space-between", flex:1 }}>


          <div style={{justifyContent:"space-evenly", flex:1}}>

            <div className="cards">
              <img
                style={{ height:320, width:280, alignSelf:"center" }} 
                src="https://hrxbrand.com/public/img/1gUIjmZ.png" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >HRX 
                <p style={{ marginTop:-1, color:"#000000" }}>
                  Men regular t-shirt
                </p> 
              </p>
              <p style={{marginTop:-8}}> ₹799 </p>
              <p style={{marginTop:-8}}> Size L </p>
            </div>


            <div className="cards">
              <img
                style={{ height:320, width:280, alignSelf:"center" }} 
                src="https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C71kevjBxElL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UX342_.png" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >React
                <p style={{ marginTop:-1, color:"#000000" }}>
                Men Regular Fit Printed Spread round neck t-Shirt
                </p> 
              </p>
              <p style={{marginTop:-8}}> ₹1999 </p>
              <p style={{marginTop:-8}}> Size L </p>
            </div>

          </div>



          <div style={{justifyContent:"space-evenly", flex:1}}>
            <div className="cards">
              <img
                style={{ height:320, width:280, alignSelf:"center" }} 
                src="https://i.pinimg.com/originals/8a/47/0a/8a470a18649a104dd020ad7116c693f1.jpg" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >HRX
                <p style={{ marginTop:-1, color:"#000000" }}>
                Men Regular Fit Printed t-Shirt
                </p> 
              </p>
              <p style={{marginTop:-8}}> ₹859 </p>
              <p style={{marginTop:-8}}> Size L </p>
            </div>
          </div>



          <div style={{justifyContent:"space-evenly", flex:1}}>
            <div className="cards">
              <img
                style={{ height:320, width:280, alignSelf:"center" }} 
                src="https://i.pinimg.com/originals/97/2d/fd/972dfdb88ae64e508ccf650ee4d992c8.jpg" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >BEHAV 
                <p style={{ marginTop:-1, color:"#000000" }}>
                Women Printed Cotton Rayon Blend A-line Kurta
                </p> 
              </p>
              <p style={{marginTop:-8}}> ₹759 </p>
              <p style={{marginTop:-8}}> Size L </p>
            </div>
          </div>

        </div>}



                                    {/* low to high price sorting */}

        { this.state.costLowToHigh && <div style={{ display:"flex", justifyContent:"space-between", flex:1 }}>

                        {/* 1st column */}
          <div style={{justifyContent:"space-evenly", flex:1}}>
            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://assets.indiadesire.com/images/BrooklynBluesMensCheckeredCasualMulticolorShirt_indiadesire.jpg" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >Jiyan Enterprise 
              <p style={{ marginTop:-1, color:"#000000" }}>
              Men Regular Fit Printed Spread Collar Casual Shirt
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹499 </p>
              <p style={{marginTop:-8}}> Size M </p>
            </div>

            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://i.pinimg.com/originals/97/2d/fd/972dfdb88ae64e508ccf650ee4d992c8.jpg" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >BEHAV
              <p style={{ marginTop:-1, color:"#000000" }}>
              Women Printed Cotton Rayon Blend A-line Kurta
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹759 </p>
              <p style={{marginTop:-8}}> Size L </p>
            </div>


            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11090418/2019/12/14/c268a799-be56-4782-9d57-25161396c5251576303930484-Anubhutee-Women-Pink--White-Printed-Kurta-with-Palazzos-6015-1.jpg" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >W
              <p style={{ marginTop:-1, color:"#000000" }}>
              Women Printed Cotton Rayon Blend A-line Kurta
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹859 </p>
              <p style={{marginTop:-8}}> Size M </p>
            </div>
          </div>



                          {/* 2nd column */}
          <div style={{justifyContent:"space-evenly", flex:1}}>
            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://rukminim1.flixcart.com/image/332/398/jzzvs7k0/shirt/h/a/h/l-c301-dustypink-dennis-lingo-original-imafjvx7b9jguhdv.jpeg?q=50" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >Jiyan Enterprise 
              <p style={{ marginTop:-1, color:"#000000" }}>
              Men Regular Fit Printed Spread Collar Casual Shirt
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹699 </p>
              <p style={{marginTop:-8}}> Currently out of stock :( </p>
            </div>


            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://hrxbrand.com/public/img/1gUIjmZ.png" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >HRX 
              <p style={{ marginTop:-1, color:"#000000" }}>
              Men regular t-shirt
              </p> 
              </p>

              <p style={{marginTop:-8}}> ₹799 </p>
              <p style={{marginTop:-8}}> Size L </p>
            </div>
          

            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://images.in.locan.to/Latest-and-Trendy-Kurti-Palazzo-Set-for-Women-and-Girls/vap_5000433810.jpg" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >Ada 
              <p style={{ marginTop:-1, color:"#000000" }}>
              Women Printed Cotton Rayon Blend A-line Kurta
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹999 </p>
              <p style={{marginTop:-8}}> Currently out of stock :( </p>
            </div>
          </div>



                        {/* 3rd column */}
          <div style={{justifyContent:"space-evenly", flex:1}}>
            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://5.imimg.com/data5/VB/KL/SS/SELLER-43347204/mens-casual-blazer-500x500.jpeg" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >Jiyan Enterprise 
              <p style={{ marginTop:-1, color:"#000000" }}>
              Men Regular Fit Printed Spread Collar Casual Shirt
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹759 </p>
              <p style={{marginTop:-8}}> Currently out of stock :( </p>
            </div>

            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://i.pinimg.com/originals/8a/47/0a/8a470a18649a104dd020ad7116c693f1.jpg" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >HRX 
              <p style={{ marginTop:-1, color:"#000000" }}>
              Men Regular Fit Printed t-Shirt
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹859 </p>
              <p style={{marginTop:-8}}> Size L </p>
            </div>

            
            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C71kevjBxElL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UX342_.png" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >React
              <p style={{ marginTop:-1, color:"#000000" }}>
              Men Regular Fit Printed Spread round neck t-Shirt
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹1999 </p>
              <p style={{marginTop:-8}}> Size L </p>
            </div>  
          </div>
        </div>}




                              {/* high to low price sorting */}

        { this.state.costHighToLow && <div style={{ display:"flex", justifyContent:"space-between", flex:1 }}>

                        {/* 1st column */}
          <div style={{justifyContent:"space-evenly", flex:1}}>
            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C71kevjBxElL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UX342_.png" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >React
              <p style={{ marginTop:-1, color:"#000000" }}>
              Men Regular Fit Printed Spread round neck t-Shirt
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹1999 </p>
              <p style={{marginTop:-8}}> Size L </p>
            </div> 

            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11090418/2019/12/14/c268a799-be56-4782-9d57-25161396c5251576303930484-Anubhutee-Women-Pink--White-Printed-Kurta-with-Palazzos-6015-1.jpg" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >W 
              <p style={{ marginTop:-1, color:"#000000" }}>
              Women Printed Cotton Rayon Blend A-line Kurta
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹859 </p>
              <p style={{marginTop:-8}}> Size M </p>
            </div>

            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://i.pinimg.com/originals/97/2d/fd/972dfdb88ae64e508ccf650ee4d992c8.jpg" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >BEHAV
              <p style={{ marginTop:-1, color:"#000000" }}>
              Women Printed Cotton Rayon Blend A-line Kurta
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹759 </p>
              <p style={{marginTop:-8}}> Size L </p>
            </div>
          </div>



                          {/* 2nd column */}
          <div style={{justifyContent:"space-evenly", flex:1}}>
            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://images.in.locan.to/Latest-and-Trendy-Kurti-Palazzo-Set-for-Women-and-Girls/vap_5000433810.jpg" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >Ada
              <p style={{ marginTop:-1, color:"#000000" }}>
              Women Printed Cotton Rayon Blend A-line Kurta
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹999 </p>
              <p style={{marginTop:-8}}> Currently out of stock :( </p>
            </div>

            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://hrxbrand.com/public/img/1gUIjmZ.png" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >HRX 
              <p style={{ marginTop:-1, color:"#000000" }}>
              Men regular t-shirt
              </p> 
              </p>

              <p style={{marginTop:-8}}> ₹799 </p>
              <p style={{marginTop:-8}}> Size L </p>
            </div>

            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://rukminim1.flixcart.com/image/332/398/jzzvs7k0/shirt/h/a/h/l-c301-dustypink-dennis-lingo-original-imafjvx7b9jguhdv.jpeg?q=50" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >Jiyan Enterprise 
              <p style={{ marginTop:-1, color:"#000000" }}>
              Men Regular Fit Printed Spread Collar Casual Shirt
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹699 </p>
              <p style={{marginTop:-8}}> Currently out of stock :( </p>
            </div>
          </div>



                        {/* 3rd column */}
          <div style={{justifyContent:"space-evenly", flex:1}}>
            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://i.pinimg.com/originals/8a/47/0a/8a470a18649a104dd020ad7116c693f1.jpg" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >HRX
              <p style={{ marginTop:-1, color:"#000000" }}>
              Men Regular Fit Printed t-Shirt
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹859 </p>
              <p style={{marginTop:-8}}> Size L </p>
            </div>

            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://5.imimg.com/data5/VB/KL/SS/SELLER-43347204/mens-casual-blazer-500x500.jpeg" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >Jiyan Enterprise 
              <p style={{ marginTop:-1, color:"#000000" }}>
              Men Regular Fit Printed Spread Collar Casual Shirt
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹759 </p>
              <p style={{marginTop:-8}}> Currently out of stock :( </p>
            </div>

            <div className="cards">
              <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://assets.indiadesire.com/images/BrooklynBluesMensCheckeredCasualMulticolorShirt_indiadesire.jpg" alt="clothing-images"/>

              <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >Jiyan Enterprise 
              <p style={{ marginTop:-1, color:"#000000" }}>
              Men Regular Fit Printed Spread Collar Casual Shirt
              </p> 
              </p>
              <p style={{marginTop:-8}}> ₹499 </p>
              <p style={{marginTop:-8}}> Size M </p>
            </div>
          </div>
        </div>}



                                              {/* default items */}
        { !this.state.menItems && !this.state.womenItems && !this.state.smallSize && !this.state.mediumSize && !this.state.largeSize && !this.state.costLowToHigh && !this.state.costHighToLow && this.state.defaultItems && <div style={{ display:"flex", justifyContent:"space-between", flex:1 }}>

                        {/* 1st column */}
          <div style={{justifyContent:"space-evenly", flex:1}}>

          <div className="cards">
            <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://hrxbrand.com/public/img/1gUIjmZ.png" alt="clothing-images"/>

            <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >HRX 
              <p style={{ marginTop:-1, color:"#000000" }}>
                Men regular t-shirt
              </p> 
            </p>

            <p style={{marginTop:-8}}> ₹799 </p>

            <p style={{marginTop:-8}}> Size L </p>
          </div>


          <div className="cards">
            <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C71kevjBxElL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UX342_.png" alt="clothing-images"/>

            <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >React 
              <p style={{ marginTop:-1, color:"#000000" }}>
              Men Regular Fit Printed Spread round neck t-Shirt
              </p> 
            </p>
            <p style={{marginTop:-8}}> ₹1999 </p>
            <p style={{marginTop:-8}}> Size L </p>
          </div>


          <div className="cards">
            <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://rukminim1.flixcart.com/image/332/398/jzzvs7k0/shirt/h/a/h/l-c301-dustypink-dennis-lingo-original-imafjvx7b9jguhdv.jpeg?q=50" alt="clothing-images"/>

            <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >Jiyan Enterprise 
              <p style={{ marginTop:-1, color:"#000000" }}>
                Men Regular Fit Printed Spread Collar Casual Shirt
              </p> 
            </p>
            <p style={{marginTop:-8}}> ₹699 </p>
            <p style={{marginTop:-8}}> Currently out of stock :( </p>
          </div>
          </div>



                            {/* 2nd column */}
          <div style={{justifyContent:"space-evenly", flex:1}}>
          <div className="cards">
            <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://assets.indiadesire.com/images/BrooklynBluesMensCheckeredCasualMulticolorShirt_indiadesire.jpg" alt="clothing-images"/>

            <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >Jiyan Enterprise 
              <p style={{ marginTop:-1, color:"#000000" }}>
                Men Regular Fit Printed Spread Collar Casual Shirt
              </p> 
            </p>
            <p style={{marginTop:-8}}> ₹499 </p>
            <p style={{marginTop:-8}}> Size M </p>
          </div>


          <div className="cards">
            <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://i.pinimg.com/originals/8a/47/0a/8a470a18649a104dd020ad7116c693f1.jpg" alt="clothing-images"/>

            <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >HRX 
              <p style={{ marginTop:-1, color:"#000000" }}>
                Men Regular Fit Printed t-Shirt
              </p> 
            </p>
            <p style={{marginTop:-8}}> ₹859 </p>
            <p style={{marginTop:-8}}> Size L </p>
          </div>


          <div className="cards">
            <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://5.imimg.com/data5/VB/KL/SS/SELLER-43347204/mens-casual-blazer-500x500.jpeg" alt="clothing-images"/>

            <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >Jiyan Enterprise 
              <p style={{ marginTop:-1, color:"#000000" }}>
                Men Regular Fit Printed Spread Collar Casual Shirt
              </p> 
            </p>
            <p style={{marginTop:-8}}> ₹759 </p>
            <p style={{marginTop:-8}}> Currently out of stock :( </p>
          </div>
          </div>



                      {/* 3rd column */}
          <div style={{justifyContent:"space-evenly", flex:1}}>
          <div className="cards">
            <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://i.pinimg.com/originals/97/2d/fd/972dfdb88ae64e508ccf650ee4d992c8.jpg" alt="clothing-images"/>

            <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >BEHAV
              <p style={{ marginTop:-1, color:"#000000" }}>
              Women Printed Cotton Rayon Blend A-line Kurta
              </p> 
            </p>
            <p style={{marginTop:-8}}> ₹759 </p>
            <p style={{marginTop:-8}}> Size L </p>
          </div>


          <div className="cards">
            <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11090418/2019/12/14/c268a799-be56-4782-9d57-25161396c5251576303930484-Anubhutee-Women-Pink--White-Printed-Kurta-with-Palazzos-6015-1.jpg" alt="clothing-images"/>

            <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >W
              <p style={{ marginTop:-1, color:"#000000" }}>
              Women Printed Cotton Rayon Blend A-line Kurta
              </p> 
            </p>
            <p style={{marginTop:-8}}> ₹859 </p>
            <p style={{marginTop:-8}}> Size M </p>
          </div>


          <div className="cards">
            <img
              style={{ height:320, width:280, alignSelf:"center" }} 
              src="https://images.in.locan.to/Latest-and-Trendy-Kurti-Palazzo-Set-for-Women-and-Girls/vap_5000433810.jpg" alt="clothing-images"/>

            <p style={{ color:"#a6a6a6", fontWeight:"bold" }} >Ada
              <p style={{ marginTop:-1, color:"#000000" }}>
              Women Printed Cotton Rayon Blend A-line Kurta
              </p> 
            </p>
            <p style={{marginTop:-8}}> ₹999 </p>
            <p style={{marginTop:-8}}> Currently out of stock :( </p>
          </div>
          </div>
        </div>}


      </div>
      </div>
    )
  }
}

export default Cards
