import React from 'react';
import '../../asstes/css/Home/Home_list/Lunbo.css';
import Swiper from 'swiper/js/swiper.js';
import 'swiper/css/swiper.min.css';
// import store from '../store/index'


export default class Addcarousel extends React.Component{
  constructor(){
    super();
    this.state={
      addsList:[]
    }
  }
  render(){
    return(
      <div className="swiper-container">
        <div className="swiper-wrapper">
{
            this.state.addsList.map(v=>(
              <div className="swiper-slide" key={v.id}>{v.image_url}</div>
            ))
              }
            
        </div>
        <div className="swiper-pagination"></div>
      
    </div>
    )
  }


  async getsList(){
    await this.$axios.get("/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.8&referer=2")
      .then(({data})=>{
        console.log(data)
        const addsList = data.slide_list;
        this.setState({
          addsList
        })
        console.log(addsList);
    })
  }
  componentWillMount(){
    this.getsList()
  }
  componentDidMount(){
    var swiper = new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: "auto",
      speed: 300,
      autoplay: {
        disableOnInteraction: false, //手动滑动之后不打断播放
        delay: 2000
      },
      observer: true, //监听，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
      pagination: {
        el: ".swiper-pagination"
      }
    });
  } 
}



    loop: true,
      slidesPerView: "auto",loop: true,
      slidesPerView: "auto",
