import { GiPositionMarker } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { BsFillSkipStartFill } from "react-icons/bs";
import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";

import { formatDate } from "../Utils/FormatDate";
import { formatDistance } from "../Utils/FormatDistance";

import BoardItemStyled from "./ItemStyle/BoardItemStyled";
import BoardTitleStyled from "./ItemStyle/BoardTitleStyled";
import BoardTextStyled from "./ItemStyle/BoardTextStyled";

function Item({index, name, location, speaker, time: {start, end}}) {

  return (
    <>
      <BoardItemStyled key={index}>
        <BoardTitleStyled>{name}</BoardTitleStyled>
        <BoardTextStyled><GiPositionMarker /> {location}</BoardTextStyled>
        <BoardTextStyled><IoPerson /> {speaker}</BoardTextStyled>
        <BoardTextStyled><BsFillSkipStartFill /> {formatDate(start)}</BoardTextStyled>
        <BoardTextStyled><HiMiniArrowLeftStartOnRectangle /> {formatDistance(start, end)}</BoardTextStyled>
      </BoardItemStyled>
    </>
  )
}

export default Item