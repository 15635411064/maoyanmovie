import React from "react"
class Movie_ed extends React.Component{
    render(){
        return (
            <div>
                {/* {
                    this.props.result.map(v=>(
                        <Fragment key={v.positionId}>
                            <img style={{width:"55px",float:"left",padding:"5px"}} src={"https://www.lgstatic.com/"+v.companyLogo} alt=""/>
                            <div>{v.companyFullName}</div>
                            <div>{v.positionName}</div>
                            <div>{v.salary}</div>
                            <hr/>
                        </Fragment>
                    ))
                }
                <div onClick={this.props.getList.bind(this,this.props.pageNo+1)}>加载更多</div> */}
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
    componentDidMount(){
    //     this.props.getList.call(this)
        this.$axios.get("/ajax/cinemaList",{
            params:{
                // day:2019-11-28,
                limit:20,
                reqId:1574905505897,
                // cityId:1
            }
        }).then(({data})=>{
            console.log(data.cinemas)
        })

        this.$axios.get("/ajax/detailmovie",{
            params:{
                movieId:247949
            }
        }).then(({data})=>{
            console.log(data)
        })
    }
}
export default Movie_ed