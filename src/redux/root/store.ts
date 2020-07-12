import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
};

const REDUX_INITIAL_STATE = {
    feedback: {
        list: [
            {
                id: "1234567123-aaa",
                name: "Test",
                email: "testr@gmail.com",
                rating: 4,
                comment: "Perfect",
                createdAt: new Date('June 19, 2020 23:15:30'),
            },
            {
                id: "1234567123-bbb",
                name: "Test",
                email: "testr@gmail.com",
                rating: 5,
                comment: "Good",
                createdAt: new Date('June 25, 2020 23:15:30'),
            }
        ]
    }
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => {
  const store = createStore(persistedReducer, REDUX_INITIAL_STATE, composeWithDevTools());
  const persistor = persistStore(store as any);

  return { store, persistor };
};
