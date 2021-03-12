import { useContext } from "react";
import ThemeContext from "../context";

import "./index.css";

function ThemeSelect() {
  const { setTheme, allThemes, theme } = useContext(ThemeContext);

  const onChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <select className="ThemeSelect" value={theme} onChange={onChange}>
      {allThemes.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}

export default ThemeSelect;