import React, { useState } from "react";
import style9 from "style9";

// components
import { SearchIcon } from "@/app/components/Icons";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const Search: React.FC = () => {
  const [isFocus, setFocus] = useState(false);
  const [textSearch, setTextSearch] = useState("");

  const handleFocus = () => setFocus(true);

  const handleBlur = () => setFocus(false);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setTextSearch(value);
  };

  return (
    <form
      action="#"
      className={style9(
        base.root,
        classes.searchForm,
        (isFocus || textSearch.length > 0) && classes.searchFocus
      )}
    >
      <div className={style9(base.root)}>
        <label className={style9(base.root, classes.searchLabel)}>
          <div className={style9(base.root, classes.searchIcon)}>
            <SearchIcon />
          </div>
          <div className={style9(base.root, classes.searchInputCover)}>
            <div className={style9(base.rootText)}>
              <input
                className={style9(
                  classes.searchInput,
                  (isFocus || textSearch.length > 0) && classes.searchInputFocus
                )}
                type="text"
                autoComplete="off"
                placeholder="Tìm kiếm"
                value={textSearch}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
          </div>
        </label>
      </div>
    </form>
  );
};

export default Search;
