import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (


        <div style={{backgroundColor:"#2874f0", height:80}}>

        <div style={{display:"flex", padding:20, justifyContent:"space-evenly"}}>

        

          <div style={{ display:"flex" }}>
            <img 
            style={{height: 40, width: 100, marginRight:8, cursor:"pointer"}}
            src="https://vikasplus.com/wp-content/uploads/2016/09/Flipkart-Logo.png" 
            alt="Flipkart-Logo"/>

            <input  
            style={{backgroundColor: "#ffffff", height:30, width: 500, borderColor:"#ffffff", fontSize:14}} 
            placeholder="Search for products, brands and more"/>

            <img 
            style={{ height:25, width: 25, marginLeft:-30, marginTop: 6 }} 
            src="https://www.kindpng.com/picc/m/25-254282_search-button-icon-png-transparent-png.png" 
            alt="search-logo"/>
          </div>

          

          <div style={{display:"flex"}}>
          <button style={{ height:40, width:120, backgroundColor:"#ffffff", color:"#2874f0", fontSize:14, fontWeight:"bold", marginRight:50, borderColor:"#ffffff", cursor:"pointer" }} >
            Login
          </button>

          <h3 style={{ marginRight:40, marginTop:5, color:"#ffffff", cursor:"pointer" }}>More</h3>

          {/* <img style={{ height:30, width:30, marginRight:10, marginTop: 5 }} src="https://i.pinimg.com/originals/2b/35/a4/2b35a4763a31b6f5f40d9de9d7e05f88.jpg" alt="Cart-img"/> */}

          <h3 style={{marginTop: 5, color: "#ffffff", cursor:"pointer", marginRight:30}}>Cart</h3>

          <a style={{textDecoration:"none"}} href="https://virajnimbalkar.netlify.app/" target="_blank" > <h3 style={{marginTop: 5, color: "#ffffff", cursor:"pointer"}}>Made by Viraj :)</h3> </a>

          </div>

          </div>


        </div>


    )
  }
}

export default Header
