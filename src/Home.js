import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, NavLink, BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Home extends React.Component { 


  constructor(){
    super();
    this.state={
      user:null
    }
  }

componentDidMount(){
  fetch('https://reqres.in/api/users').then((resp)=> {
    resp.json().then((result)=>{
      // console.warn(result)
      this.setState({users:result.data})
    })
  })
}



render(){

  return(
  
   <>


    <Header/>
    
    <div id="demo" className="carousel slide" data-ride="carousel">

    <ul className="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" className="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
    </ul>
    
  
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="img/homepage_1589207033914.jpeg"/>
      </div>
      <div className="carousel-item">
        <img src="img/homepage_1566658122724.png"/>
      </div>
      <div className="carousel-item">
        <img src="img/homepage_1589207033914.jpeg"/>
      </div>
    </div>
    
    <NavLink className="carousel-control-prev" to="#demo" data-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </NavLink>
    <NavLink className="carousel-control-next" to="#demo" data-slide="next">
      <span className="carousel-control-next-icon"></span>
    </NavLink>
  </div>



  <div className="">
      

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 m-auto">
            <table className="w-100 text-center">
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                
              </tr>

              {
  
              this.state.users ?
              this.state.users.map((item,i)=>
              <tr>
                <td>{item.id}</td>
                <td><img style={{width:"50px"}} src={item.avatar}/></td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                
              </tr>
              )
              :
              null
              }
            </table>
          </div>
        </div>
      </div>


     
  </div>




    <Footer/>
   </>

);
}

}

export default Home;
