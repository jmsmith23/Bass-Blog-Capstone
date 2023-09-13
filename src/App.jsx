import css from './App.module.scss';
import logo from './assets/react.svg';

function App() {
  return (
    <>
      <header className={css.header}>
        <img src={logo} />
        <div className={css.title}>Jeff's Bass Blog</div>
        <nav></nav>
      </header>
    </>
  );
}

export default App;
