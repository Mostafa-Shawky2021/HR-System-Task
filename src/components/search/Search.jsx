import React,{useRef} from "react";
import "./search.css";
const Search = ({
  className,
  placeholder,
  icon,
  iconStyle,
  setSearchValue,
}) => {
    const searchInput = useRef(null)
  return (
    <div className={`input-wrapper ${className ? className : ""}`}>
      {icon && 
      <i 
          className={`${icon} ${iconStyle ? iconStyle : ""}`} 
          onClick={()=>searchInput.current.focus()}>
      </i>
      }
      <input
           type="text"
           placeholder={`${placeholder ? placeholder : ""}`}
           onChange={(e) => setSearchValue(e.target.value)}
           ref={searchInput}
      />
    </div>
  );
};

export default Search;
