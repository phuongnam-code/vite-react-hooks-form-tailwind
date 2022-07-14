import { Suspense } from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import '@/assets/css/App.scss';
import ErrorBoundaryPage from '@/pages/ErrorBoundaryPage';
import routes from '@/routes';
import { uuid } from '@/utils/commonFun';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="nav">
          {routes.map((route) => {
            const { path, name, hidden } = route;
            return (
              !hidden && (
                <NavLink key={uuid()} to={path} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                  {name}
                </NavLink>
              )
            );
          })}
        </nav>
        <div className="wraper">
          <ErrorBoundaryPage>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {routes.map((route) => {
                  const { path, component: Component } = route;
                  return <Route key={uuid()} path={path} element={<Component />} />;
                })}
              </Routes>
            </Suspense>
          </ErrorBoundaryPage>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
