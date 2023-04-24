import React from "react";
import "./Burger.scss";

const Burger = ({header, items, active, setActive}) => {
  return (
    <div className={active ? 'burger active' : 'burger'}>      
      <div className="burger__content">
        <div className="burger__header">Бургер меню</div>
        <ul>
           {items.map(item =>
           <li>
            <a href={item.href}>{item.value}</a>
           </li>
            )}
        </ul>
      </div>
    </div>
    



  )
}




export default Burger;