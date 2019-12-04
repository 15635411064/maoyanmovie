import React from "react"
class Home extends React.Component{
    constructor(){
        super();
        this.state={
            movieId:247949
        }
    }
    render(){
        return (
            <div>
                <div onClick={()=>this.props.history.push('/movie_ed/'+this.state.movieId)}>movie_ed</div>
                |
                <div onClick={()=>this.props.history.push('/cinema_ed')}>cinema_ed</div>
            </div>
        )
    }
}
export default Home