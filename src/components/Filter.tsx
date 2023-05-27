import { ChangeEvent, useState } from "react";
import { IPost } from "../interface/IPost";

const Filter: React.FC<FilterProps> = ({ setPosts, postsConst }) => {
  const [input, setInput] = useState<string>('');
  const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    setPosts(postsConst.filter(({title}) => title !== input))
  }

  return (
    <div className="filter">
      <div className="filter__wrapper">
        <input
          type="text"
          value={input}
          onChange={handlerChange}
        />
      </div>
    </div>
  )
}

export default Filter

interface FilterProps {
  setPosts: (prev: IPost[]) => void,
  postsConst: IPost[]
}