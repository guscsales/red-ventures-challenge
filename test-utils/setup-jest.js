import reduxMockStore from 'redux-mock-store';
import middlewares from '../store/middlewares';

global.__createTestStore__ = reduxMockStore(middlewares());
