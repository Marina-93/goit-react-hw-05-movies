import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import { RingLoader } from "react-spinners";
import AppBar from './component/AppBar/AppBar';

const Home = lazy(() =>
  import("./views/Home/Home" /*webpackChunkName: "home" */)
);
const Movies = lazy(() =>
  import("./views/Movies/Movies" /*webpackChunkName: "movies" */)
);
const FilmPage = lazy(() =>
  import(
    "./views/FilmPage/FilmPage" /*webpackChunkName: "movie-details-page" */
  )
);
const NotFoundView = lazy(() =>
  import("./views/NotFoundView/NotFoundView" /*webpackChunkName: "error-page" */)
);

function App() {
  return (
    <>
      <AppBar />
      
      <Suspense fallback={<RingLoader size={120}/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:filmId/*" element={<FilmPage />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
      </Suspense>
    </>
  );
}

export default App;