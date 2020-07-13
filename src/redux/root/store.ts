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
                name: "Jack Black",
                email: "jack-black@gmail.com",
                rating: 3,
                comment: "The weather was bad, so 4/5.",
                createdAt: new Date('June 19, 2020 23:15:30'),
            },
            {
                id: "1234567123-bbb",
                name: "Alina Kuprawi",
                email: "test@gmail.com",
                rating: 5,
                comment: "Great platform, great support, great rates. After years of ecommerce, I am finally happy with a payment processing plateform. I couldn't imagine it any better and yet they managed to suprise me when they changed the design a year ago and made it even better.",
                createdAt: new Date('June 25, 2020 23:15:30'),
            },
            {
                id: "1234567123-ccc",
                name: "Marc Vojovic",
                email: "markvojovic@gmail.com",
                rating: 4,
                comment: "Those guys are the best, we've been working with them for 5 years. Great customer service, sales rep are always available and will definitely get you a pricing that rocks! Can't recommend Antoine enough, he's a very efficient and pleasant guy that keeps great attention to details. Can't go wrong with this company.",
                createdAt: new Date('June 28, 2020 23:15:30'),
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
