import "./App.css";
import Navbar from "./components/Navbar";
import NewFile from "./components/NewFile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navvbar from "./components/Navvbar";
import Newnav1 from "./components/Newnav1";
import Home from "./pages/main/Home";
import MainPostPage from "pages/MainPostPage";
import ProfileDataPage from "pages/ProfileDataPage";
import SignUpPage from "pages/SignUpPage";
import SignInPage from "pages/SignInPage";
import WritePost from "utils/WritePost";
import InputPost from "components/forms/InputPost";
import { useSelector } from "react-redux";
import NavTest from "components/NavTest";
import SearchPostPage from "pages/SearchPostPage";
import NotFound from "pages/NotFound";
import MessagesPage from "pages/MessagesPage";
import ScreenSizePage from "pages/ScreenSizePage";
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { useEffect } from "react";
import IndividualMainChat from "pages/main/IndividualMainChat";

Amplify.configure(awsconfig);

const randomImages=[

  "https://randomuser.me/portraits/women/29.jpg",
  "https://randomuser.me/portraits/women/23.jpg",
  "https://randomuser.me/portraits/women/24.jpg",
  "https://randomuser.me/portraits/women/26.jpg"
]

function App() {
  const modal = useSelector(state => state.utils.inputmodal)
  console.log(modal)
  Auth.currentAuthenticatedUser().then(console.log)

  return (
    <Router>
      <div className="bg-gray-100  font-body">
     
      <NewFile/>
        {/* <Navbar/> */}
       {/* <NavTest/> */}
        <WritePost/>
     { modal &&  <InputPost/>}
        <Switch>
        
          <Route exact path="/" component={Home} />
          <Route path="/post/:id" component={MainPostPage} />
          <Route path="/profile/:id" component={ProfileDataPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/search" component={SearchPostPage} />
          <Route path="/messages" component={MessagesPage} />
          <Route path="/screensize" component={ScreenSizePage} />
          <Route path="/message/:id" component={IndividualMainChat} />
          <Route  component={NotFound} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default withAuthenticator(App);
// export default App;
