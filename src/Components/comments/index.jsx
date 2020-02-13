import React, { Component } from 'react';
import dayjs from 'dayjs'
import S from './styles';
import img from "../../static/images/like.png";


export class Comments extends Component {

  state = {
    comments: [],
    form: {
      name: '',
      comment: ''
    }
  }

  componentDidMount() {
    if (localStorage.getItem('state')) {
      this.setState({ ...JSON.parse(localStorage.getItem('state')) })
    }
  }

  addComment = () => {
    this.setState({
      comments: [
        ...this.state.comments,
        {
          id: this.state.comments.length ? this.state.comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1, // max id +1
          name: this.state.form.name,
          comment: this.state.form.comment,
          date: new Date()
        }
      ],
      form: {
        name: '',
        comment: ''
      }
    }, () => localStorage.setItem('state', JSON.stringify(this.state)))
  }

  removeComment = (id) => {
    this.setState({
      comments: this.state.comments.filter(comment => comment.id !== id)
    }, () => localStorage.setItem('state', JSON.stringify(this.state)))
  }

  handleChange = (e) => {
    console.log(e.target.name)
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  render() {

    return (
      <S.Comments>
        {this.state.comments.length > 10 ? <img className="like" src={img} /> : null}
        {this.state.comments.map((comment, index) => <div key={comment.id}  className={index % 2 === 0 ? "right" : "left"}>
          <span style={{ fontStyle: 'italic' }}>{dayjs(comment.date).format("DD.MM.YYYY в HH:mm")}: </span>
          <strong>{comment.name}, </strong>
            <span>{comment.comment}</span>
          {/*<S.Button onClick={this.removeComment.bind(null, comment.id)}>Удалить комментарий</S.Button>*/}
        </div>)}
        <S.AddComment>
          <label>Имя: <input
            type="text"
            value={this.state.form.name}
            name="name"
            onChange={this.handleChange} /></label>
          <label>Комментарий: <textarea
            name="comment"
            value={this.state.form.comment}
            onChange={this.handleChange}></textarea>
          </label>
          <button onClick={this.addComment}>Добавить комментарий</button>
        </S.AddComment>
      </S.Comments>
    )
  }
}
