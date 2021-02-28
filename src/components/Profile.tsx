import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";
import ReactSwitch from "react-switch";
import { useTheme } from "../contexts/ThemeContext";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const { theme, themeName, toggleTheme } = useTheme();

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/JoaoVlltor.png" alt="João Vitor" />
      <div>
        <header>
          <strong>João Vitor</strong>
          <p>
            <img src="icons/level.svg" alt="Level" />
          </p>
          Level {level}
        </header>
        <ReactSwitch
          checked={themeName === "dark"}
          height={15}
          width={50}
          handleDiameter={20}
          onChange={toggleTheme}
          className={styles.themeSwitcher}
          onColor={theme.blue}
          offColor={theme.blue}
          boxShadow="0px 1px 3px rgba(0, 0, 0, 0.3)"
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </div>
    </div>
  );
}
