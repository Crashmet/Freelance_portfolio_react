import './style.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Shamil</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a
          href="https://docs.google.com/document/d/1N6wxJnEGN8sLWz_UYu_vAaXO7Nu4Wx-Dgxz8q_LifdU/edit"
          className="btn"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
