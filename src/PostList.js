import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
    constructor(props) {

        super(props)
        this.state = {
            posts: [],
            errorMsg: ""
        }
    }
    componentDidMount() {
        axios.post('https://catfact.ninja/facts?limit=5')
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data.data })
            }
            ).catch(error => {
                console.log(error)
                this.setState({ errorMsg: "Error Retrieving Data" })
            })
    }

    render() {
        const { posts, errorMsg } = this.state;
        return (
            <div className="postList">
                {
                    posts.length ? <ul> {posts.map(post => <li key={post.length}> {post.fact}</li>)}</ul> : null
                }
                {
                    errorMsg ? <div className="error">{errorMsg}</div> : null
                }
            </div>
        );
    }
}

export default PostList;