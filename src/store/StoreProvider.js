import { store } from "./entities";
import { Provider } from "react-redux";

export const StoreProvider = ({ children }) => (
    <Provider store={store} >
        {children}
    </Provider>
)

export default StoreProvider;