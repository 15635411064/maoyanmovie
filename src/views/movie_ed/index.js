import React from "react"
import "./movie_ed.css"
class Movie_ed extends React.Component{
    constructor(){
        super();
        this.state={
            movieId:0,
            detailMovie:{},
            imgUrl:''
        }
    }
    render(){
        return (
            <div>
                <div className="Movie_ed_header">
                    <i onClick={()=>{this.props.history.push("/")}}></i>
                    <p>{this.state.detailMovie.nm}</p>
                </div>
                <div className="header_ed">
                    <img src={"http://s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png"} alt=""></img>
                    <div>
                        <p>猫眼</p>
                        <span>在线选座，热门影讯，爱上看电影</span>
                    </div>
                    <button>立即打开</button>
                </div>
                <div className="Movie_ed_main" onClick={()=>this.props.history.push("/movie_th/"+this.state.movieId)}>
                    <div className="Main_bk"></div>
                    <img src={"http://p0.meituan.net/148.208/"+this.state.imgUrl} alt=""></img>
                    <div className="Movie_ed_act">
                        <img src={"http://p0.meituan.net/148.208/"+this.state.imgUrl} alt=""></img>
                        <div>
                            <h2>{this.state.detailMovie.nm}</h2>
                            <p>{this.state.detailMovie.enm}</p>
                            <p><span>{this.state.detailMovie.sc}</span> ({this.state.detailMovie.snum}人评)</p>
                            <p>{this.state.detailMovie.cat} <span className={"iMax"}>{this.state.detailMovie.version}</span></p>
                            <p>{this.state.detailMovie.fra}/{this.state.detailMovie.dur}分钟</p>
                            <p>{this.state.detailMovie.pubDesc}</p>
                        </div>
                        <span>
                            <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAYAAAAfD8YZAAAAAXNSR0IArs4c6QAAAS5JREFUOBGVkktuwkAMhpOoJ+hhSouE2HbDgiVCNCAOVtQHnINHhbgMJ6g6/f9gR848kmDJeOzxZ3scskzEOfcKXUMLjXXZByYQhJlqMvz3PM//1E9Z7fJoEp5wXvWZoILRZQtg7xVYdhXQzuR2XoEB/NYCOSkVdKI/g441BnuBbmI7aMAE7ilgxyaboYOD4RMO9EWiTwhgJksBLtEvUNolRmGvwJG+yDNsXSB4s2aplR3M4Y80BnuGfiQ7m0Q2qP6JJvaLc/VpTKx5lPe9IfpibviMb+4lOXYXyGLRsRPgSTsSpASdW8Av+YQ3Er+NzgIuELdvZMcAZIUaBsgpCA55IZIEeV+NLSC32hskXCTAH9xFRyWkUsgSrhqAJfjpL8fch0dMMIGWMkmYEIn8Az5Wgp5LHlhmAAAAAElFTkSuQmCC"} alt=""></img>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
    /*
    day=2019-11-28
    offset=0
    limit=20
    districtId=-1
    lineId=-1
    hallType=-1
    brandId=-1
    serviceId=-1
    areaId=-1
    stationId=-1
    item=
    updateShowDay=true
    reqId=1574905505897
    cityId=1
    */
    componentWillMount(){
        const movieId=this.props.match.params.id
        this.setState({
            movieId:movieId
        })
    }
    componentDidMount(){
        this.$axios.get("/ajax/detailmovie",{
            params:{
                movieId:this.state.movieId
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

        // this.$axios.get("/ajax/cinemaList",{
        //     params:{
        //         // day:2019-11-28,
        //         limit:20,
        //         reqId:1574905505897,
        //         // cityId:1
        //     }
        // }).then(({data})=>{
        //     console.log(data.cinemas)
        // })
    }
}
export default Movie_ed