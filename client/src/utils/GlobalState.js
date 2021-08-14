import { Provider as ReduxProvider } from "react-redux";
import store from "../store";

const StoreProvider = ({ value = [], ...props }) => {
  return <ReduxProvider store={store} {...props} />;
};

export default StoreProvider;
