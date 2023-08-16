import { store } from "./store";
import { Provider } from "react-redux";

export const StoreProvider = ({ children }) => (
    <Provider store={store} >
        {children}
    </Provider>
)

export default StoreProvider;