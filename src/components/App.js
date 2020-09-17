import React, { useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import ProtectedRoute from './ProtectedRoute.js';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import successIcon from '../images/svg/Success.svg';
import errorIcon from '../images/svg/Error_Icon.svg';
import spinner from '../images/svg/Spinner.svg';
import * as Auth from '../utils/Auth';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [email, setEmail] = useState('');
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isLoading, setLoading] = useState();
  const history = useHistory();
  const [selectedCard, setSelectedCard] = useState({
    isImageOpen: false,
    link: '',
    name: '',
  });
  const [message, setMessage] = useState({
    icon: spinner,
    text: 'Загрузка...'
  });

  React.useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      Auth.getContent(jwt)
        .then((res) => {
          setLoggedIn(true);
          setEmail(res.data.email);
          history.push('/');
        })
        .catch(err => console.log(err));
    }
  }, [history]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cardData) => {
        setCards(cardData);
      })
      .catch((err) => console.log(`Ошибка при загрузке карточек: ${err}`));
  }, []);

  function handleRegister(password, email) {
    setMessage({ icon: spinner, text: 'Загрузка...' });
    Auth.register(password, email)
      .then(() => {
        history.push('/sign-in')
        setMessage({ icon: successIcon, text: 'Вы успешно зарегистрировались!' });
      })
      .catch((err) => setMessage({ icon: errorIcon, text: err.message }));
    setInfoTooltipOpen(true);
  }

  function handleLogin(password, email) {
    setMessage({ icon: spinner, text: 'Загрузка...' });
    Auth.authorize(password, email)
      .then((data) => {
        Auth.getContent(data)
          .then((res) => {
            setEmail(res.data.email);
          })
          .catch(err => console.log(err));
        setLoggedIn(true);
        history.push('/');
        setMessage({ icon: successIcon, text: 'Авторизация прошла успешно!' });
      })
      .catch((err) => setMessage({ icon: errorIcon, text: err.message }))
    setInfoTooltipOpen(true);
  }

  function handleSignOut() {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    setEmail('');
    history.push('/sign-in');
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  function handleCardDelete(card) {
    const isOwn = card.owner._id === currentUser._id;
    api.removeCard(card._id, !isOwn)
      .then((newCard) => {
        const newCards = cards.filter((c) => c._id === card._id ? !newCard : c);
        setCards(newCards);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  function handleCardClick(cardData) {
    const { link, name } = cardData.card;
    setSelectedCard({ isImageOpen: true, link: link, name: name });
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleUpdateUser(userData) {
    setLoading(true);
    api.setUserInfo(userData)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
      .finally(() => setLoading(false));
  }

  function handleUpdateAvatar(userData) {
    setLoading(true);
    api.setAvatar(userData)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
      .finally(() => setLoading(false));
  }

  function handleAddPlaceSubmit(userData) {
    setLoading(true);
    api.addCard(userData)
      .then((res) => {
        setCards([...cards, res]);
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
      .finally(() => setLoading(false));
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setInfoTooltipOpen(false);
    setSelectedCard({
      isImageOpen: false,
      link: '',
      name: ''
    });
  }

  return (

    <CurrentUserContext.Provider value={currentUser}>

      <div className="page">

        <Header 
          email={email}
          loggedIn={loggedIn}
          signOut={handleSignOut}
        />

        <Switch>
          <ProtectedRoute exact path="/" 
            loggedIn={loggedIn} 
            component={Main}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            cards={cards}
          />
          <Route path='/sign-in'>
            <Login onLogin={handleLogin} />
          </Route>
          <Route path='/sign-up'>
            <Register onRegister={handleRegister} />
          </Route>
          <Route>
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
          </Route>
        </Switch>

        <Footer />

        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          loggedIn={loggedIn}
          message={message}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isLoading={isLoading}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          isLoading={isLoading}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isLoading={isLoading}
        />

        <PopupWithForm

          name="card-remove"
          title="Вы уверены?"
          submit="Да"
          onClose={closeAllPopups}

        ></PopupWithForm>

        <ImagePopup
          name={selectedCard.name}
          link={selectedCard.link}
          onClose={closeAllPopups}
          isOpen={selectedCard.isImageOpen}
        />

      </div>

    </CurrentUserContext.Provider>
  );
}

export default App;
