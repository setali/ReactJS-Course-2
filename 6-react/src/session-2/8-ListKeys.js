import React, {Component} from 'react'

const posts = [
  {id: 1, title: 'Post 1'},
  {id: 2, title: 'Post 2'},
  {id: 3, title: 'Post 3'},
  {id: 4, title: 'Post 4'},
]


export default class Items extends Component {

  render () {
    return (
      <div>
        <ul>
          {posts.map(post =>
            <div key={post.id}>
              <Item  post={post} />
            </div>
            )}
        </ul>
      </div>
    );
  }

}

class Item extends Component {
  render () {
    return (
      <li>
        {this.props.post.title}
      </li>
    );
  }
}