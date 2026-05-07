import Item from "../Item/Item"
import upcoming from "../../upcoming-events"

import BoardListStyle from "./ListStyle/BoardListStyle"

function List() {

  return (
    <>
      <BoardListStyle>{upcoming.map((event, index) => (
          <Item key={index} {...event} />
        ))}
      </BoardListStyle>
    </>
  )
}

export default List