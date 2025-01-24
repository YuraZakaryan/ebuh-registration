import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from '@components/loader';
import { getPages } from '@routes/route';

const App = () => {
  const pages = getPages();

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {pages.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default App;
