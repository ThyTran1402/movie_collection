import React, { useRef } from 'react';
import { CssBaseline } from '@mui/material';
//import { Route, Switch } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';

import useStyles from './styles';

import { Actors, MovieInfor, Movies, NavBar, Profile } from './';

// import Actors from './Actors/Actors';
// import MovieInfor from './MovieInfor/MovieInfor';
// import Movies from './Movies/Movies';
// import Profile from './Profile/Profile';
// import NavBar from './NavBar/NavBar';



const App = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path={['/', '/approved']}>
            <Movies />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>
      <div ref={alanBtnContainer} />
    </div>
        
    );
};

export default App;