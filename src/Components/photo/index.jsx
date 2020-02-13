import React, { Component } from "react";
import img from "../../static/images/barbecue.png"
import S from './styles';

export class Photo extends Component{

  render() {
    return (
      <S.Img>
        <img src={img} />
      </S.Img>
    )
  }
}
