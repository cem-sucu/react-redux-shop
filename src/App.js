import "./App.css";
import PhoneComponent from "./components/PhoneComponent";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="section-one">
                <PhoneComponent />
            </div>
        </Provider>
    );
}

export default App;
