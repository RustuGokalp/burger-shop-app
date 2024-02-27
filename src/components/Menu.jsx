import MenuItem from "../components/MenuItem";
import { Data } from "../helpers/Data";
import "../styles/Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Awesome Burgers</h1>
      <div className="menuList">
        {Data.map((item, key) => {
          return (
            <MenuItem
              key={key}
              image={item.image}
              name={item.name}
              content={item.content}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
