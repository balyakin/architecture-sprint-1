import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Login = lazy(() => import('auth/Login'));
const Register = lazy(() => import('auth-/Register'));
const EditProfilePopup = lazy(() => import('profile/EditProfilePopup'));
const EditAvatarPopup = lazy(() => import('profile/EditAvatarPopup'));
const ImagePopup = lazy(() => import('gallery/ImagePopup'));
const AddPlacePopup = lazy(() => import('gallery/AddPlacePopup'));
const Card = lazy(() => import('gallery/Card'));
const LikeButton = lazy(() => import('likes/LikeButton'));
const Main = lazy(() => import('./Main'));
const Footer = lazy(() => import('./Footer'));
const Header = lazy(() => import('./Header'));

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={EditProfilePopup} />
          <Route path="/edit-avatar" component={EditAvatarPopup} />
          <Route path="/gallery" component={ImagePopup} />
          <Route path="/add-place" component={AddPlacePopup} />
          <Route path="/card" component={Card} />
          <Route path="/likes" component={LikeButton} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
