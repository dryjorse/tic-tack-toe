import LoginPage from "../pages/authPage/loginPage/LoginPage";
import RegisterPage from "../pages/authPage/registerPage/RegisterPage";
import GamePage from "../pages/gamePage/GamePage";
import MenuPage from "../pages/menuPage/MenuPage";
import ProfilePage from "../pages/profilePage/ProfilePage";
import RulesPage from "../pages/rulesPage/RulesPage";

export const routes = [
  { path: "/", element: <MenuPage /> },
  { path: "/game", element: <GamePage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/rules", element: <RulesPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
];
