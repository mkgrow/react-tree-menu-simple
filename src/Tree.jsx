import React, { useState } from "react";
import plus from './assets/plus.svg';
import minus from './assets/minus.svg';

import styles from './index.less';

const Children = ({ data = [], selectedMenu, onChange }) => {
  const [parent, setParent] = useState();

  const handleParentClick = (it) => {
    if (it?.children) {
      setParent(parent?.text === it?.text ? {} : it)
    } else {
      onChange(it)
    }
  };

  return (
    <div className={styles.children}>
      {
        data?.map((it, index) => {
          const isParentSelected = parent?.text === it?.text;
          const isMenuSelected = selectedMenu?.text === it?.text;
          const hasChildren = it?.children?.length;

          return (
            <div key={`${it?.text}-${index}`}>
              <div className={styles.child} onClick={() => handleParentClick(it)}>
                {hasChildren && isParentSelected && <img className={styles.icon} src={minus} alt=""/>}
                {hasChildren && !isParentSelected && <img className={styles.icon} src={plus} alt=""/>}
                <div className={`${styles.text} ${it?.className} ${isMenuSelected ? styles.brandColor : ''}`}>{it?.text}</div>
              </div>
              {hasChildren && isParentSelected && <Children data={it?.children} onChange={onChange} selectedMenu={selectedMenu} />}
            </div>
          )
        })
      }
    </div>
  )
};

const Tree = ({ className = '', data = [], onSelect }) => {
  const [selectedMenu, setSelectedMenu] = useState();

  const handleChange = (v) => {
    setSelectedMenu(v);
    onSelect?.(v)
  };

  return (
    <div className={`${className} ${styles.tree}`}>
      <Children
        data={data}
        selectedMenu={selectedMenu}
        onChange={handleChange}
      />
    </div>
  )
};

export default Tree;
