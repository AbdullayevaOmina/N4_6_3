import routes from "@routes";
import "./style.scss";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <aside className="h-screen bg-slate-700 px-6 pt-10">
      <ul className="flex flex-col gap-2">
        {routes.map((link) => {
          return (
            <li>
              <NavLink className="border block py-2 px-4" to={link.path}>{link.content}</NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default index;
