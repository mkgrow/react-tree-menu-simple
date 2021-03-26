import React, { useState } from "react";
import plus from './assets/plus.svg';
import minus from './assets/minus.svg';

import styles from './index.less';

const Children = ({ data = [], selectedMenu, onChange, icons = [], iconClassName = '', valueClassName = '', dropdownClassName = '', selectedClassName }) => {
  const [parent, setParent] = useState();

  const handleParentClick = (it) => {
    if (it?.children) {
      setParent(parent?.value === it?.value ? {} : it)
    } else {
      onChange(it)
    }
  };

  return (
    <div className={`${styles.children} ${dropdownClassName}`}>
      {
        data?.map((it, index) => {
          const isParentSelected = parent?.value === it?.value;
          const isMenuSelected = selectedMenu?.value === it?.value;
          const hasChildren = it?.children?.length;

          return (
            <div key={`${it?.value}-${index}`}>
              <div className={styles.child} onClick={() => handleParentClick(it)}>
                <div className={`${styles.icon} ${iconClassName}`}>
                  {hasChildren && isParentSelected && <img src={icons?.[0] ?? minus} alt=""/>}
                  {hasChildren && !isParentSelected && <img src={icons?.[1] ?? plus} alt=""/>}
                </div>
                <div className={`${valueClassName} ${isMenuSelected ? selectedClassName ?? styles.selected : ''} ${styles.text} ${it?.className ?? ''} `}>{it?.value}</div>
              </div>
              {hasChildren && isParentSelected && (
                <Children
                  data={it?.children}
                  onChange={onChange}
                  icons={icons}
                  selectedMenu={selectedMenu}
                  iconClassName={iconClassName}
                  valueClassName={valueClassName}
                  selectedClassName={selectedClassName}
                  dropdownClassName={dropdownClassName}
                />
              )}
            </div>
          )
        })
      }
    </div>
  )
};

const Tree = ({ data = [], icons, onSelect, className = '', iconClassName = '', valueClassName = '', dropdownClassName = '', selectedClassName = '' }) => {
  const [selectedMenu, setSelectedMenu] = useState();

  const handleChange = (v) => {
    setSelectedMenu(v);
    onSelect?.(v)
  };

  return (
    <div className={`${className} ${styles.tree}`}>
      <Children
        data={data}
        icons={icons}
        selectedMenu={selectedMenu}
        dropdownClassName={dropdownClassName}
        iconClassName={iconClassName}
        valueClassName={valueClassName}
        selectedClassName={selectedClassName}
        onChange={handleChange}
      />
    </div>
  )
};

export default Tree;
