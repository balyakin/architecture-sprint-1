import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../../auth-microfrontend/components/Login';
import Register from '../../auth-microfrontend/components/Register';
import Profile from '../../profile-microfrontend/components/EditProfilePopup';
import EditAvatar from '../../profile-microfrontend/components/EditAvatarPopup';
import Gallery from '../../gallery-microfrontend/components/ImagePopup';
import Likes from '../../likes-microfrontend/components/LikeButton';
import Main from '../../common/components/Main';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/edit-avatar" component={EditAvatar} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/likes" component={Likes} />
      </Switch>
    </Router>
  );
};

export default App;
