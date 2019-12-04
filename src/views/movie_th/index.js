import React from "react"
import "./movie_th.css"
export default class Movie_th extends React.Component{
    constructor(){
        super();
        this.state={
            detailMovie:{}
        }
    }
    render(){
        return (
            <div>
                <div className="header_ed">
                    <img src={"http://s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png"} alt=""></img>
                    <div>
                        <p>猫眼</p>
                        <span>在线选座，热门影讯，爱上看电影</span>
                    </div>
                    <button>立即打开</button>
                </div>
                <div className={"Movie_th_main"} style={{background:this.state.detailMovie.backgroundColor}}>
                    <div className={"Movie_th_act"}>
                        <img src={"http://p0.meituan.net/148.208/"+this.state.imgUrl} alt=""></img>
                        <div>
                            <h2>{this.state.detailMovie.nm}</h2>
                            <p>{this.state.detailMovie.enm}</p>
                            <p>{this.state.detailMovie.star}</p>
                            <p>{this.state.detailMovie.cat} <span className={"iMax"}>{this.state.detailMovie.version}</span></p>
                            <p>{this.state.detailMovie.pubDesc} / {this.state.detailMovie.dur}分钟 ></p>
                        </div>
                        <div>
                            <div><img src={"http://s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/want-to-watch.png"} alt=""></img>想看</div>
                            <div><img src={"http://s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star.png"} alt=""></img>看过</div>
                        </div>
                    </div>
                    <div className={"Movie_th_level"}>
                        
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.$axios.get("/ajax/detailmovie",{
            params:{
                movieId:this.props.match.params.id
            }
        }).then(({data})=>{
            console.log(data.detailMovie)
            const a=data.detailMovie.img
            const b=a.split("/")[4]+"/"+a.split("/")[5]
            this.setState({
                detailMovie:data.detailMovie,
                imgUrl:b
            })
        })
    }
}