import Header from './../components/header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, React ecosystem, Vue ecosystem, HTML, CSS, SQL, NPM,
                Webpack, WebScoket, REST, AJAX, BroadcastChannel, BootstrapVue,
                Tailwind CSS, Bootstrap, Materialize, Apache echarts, Git, Jest,
                ESlint, Prettier, OOP, БЭМ, Pixel-perfect, Responsive and
                cross-browser layout, Photoshop, Figma
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
