import { Link } from "react-router-dom";
import { Approute, AuthorizationStatus } from "../../constants/const";
import { useAppSelector } from "../../hooks/redux";
import Logo from "../logo/Logo";

function Header() {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  const userInfo = useAppSelector(
    (state) => state.userInfo
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth && userInfo ? (
                <>
                  <li className="header__nav-item user">
                    <div className="header__nav-profile">
                      <img className="header__avatar-wrapper" src={userInfo.avatarUrl} alt={userInfo.name} />
                      <span className="header__user-name user__name">
                        {userInfo.email}
                      </span>
                    </div>
                  </li>
                  <li className="header__nav-item">
                    <div className="header__nav-link">
                      <Link className="header__signout" to={Approute.Login}>
                        Sign out
                      </Link>
                    </div>
                  </li>
                </>
              ) : (
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={Approute.Login}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;