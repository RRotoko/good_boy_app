import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import {contributionType} from './components/user_fields/page1/contribution/cont_reducer';
import {selectShelter} from './components/user_fields/page1/selecttype/selecttype_reducers';
import {selectValue, ownValueSelect} from './components/user_fields/page1/selectamount/selectamount_reducer';
import {pageNumber, changeMessage} from './components/user_fields/userfields_reducers';
import {userData} from './components/user_fields/page2/page2_reducers';
import {userAgree} from './components/user_fields/page3/page3_reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import styled from 'styled-components';
import Image from './img/dog.png';
import UserField from './components/user_fields/userfileds';
import PageIndicator from './components/pageindicator/pageindicator';
import Footer from './components/Footer/footer';

const logger = createLogger();
const rootReducer = combineReducers({contributionType, selectShelter, selectValue, pageNumber, userData, userAgree, changeMessage, ownValueSelect});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

const TextSection = styled.div `
  width: 60%;
  min-height: 860px;
  display: flex;
  align-items:flex-start;
  flex-direction: column;
  text-align: start;
`

const ImgSection = styled.div `
  width: 40%;
`
const Layout = styled.div `
  max-width: 1100px;
  margin-top: 50px;
  display: inline-flex;
  width: 100%;
`

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Navbar />
          <Layout>
            <TextSection>
              <PageIndicator />
              <Header />
              <UserField />
            </TextSection>
            <ImgSection>
              <img src={Image} alt='icon'></img>
            </ImgSection>
          </Layout>
          <Footer />
      </div>
    </Provider>
  );
}

export default App;
