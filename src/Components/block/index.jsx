import React, { Component } from "react";
import { Photo } from "../photo";
import S from './styles';
import { Comments } from "../comments";

export class Block extends Component{

  render() {
    return (
      <S.Block>
        <Photo />
        <Comments />
      </S.Block>
    )
  }
}
