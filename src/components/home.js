import React, { Component } from 'react'
import axios from 'axios'
class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
         this.setState({
             posts: res.data.slice(0, 50)
         })  
        })
    }
    render() {
        const postsList = this.state.posts.length ?  (this.state.posts.map(post=>{
              return(
                  <div className="card card-body bg-dark text-white mt-2 mb-2" key={post.id} style={{width: '75%', height: 200, marginLeft:'170px'}}>
                    <h4 className="card-title">{post.title}</h4>
                    <div className='card-text'>{post.body}</div>
                  </div>
              ) 
        })) : (<div> <h1 className='display-1'>There are no posts to show</h1> </div>) 
        return (
            <div>
                <h1 className="text-center mb-5 text-primary">
                    Home
                </h1>
                <div>
                    {postsList}
                </div>
            </div>
        )
    }
}
export default Home