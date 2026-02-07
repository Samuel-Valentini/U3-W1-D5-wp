import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";
import "./App.css";
import PageChooser from "./component/PageChooser";
import NfFooter from "./component/NfFooter";

import { hello } from "./component/constants";

console.log(hello);

function App() {
    return (
        <>
            {" "}
            <div className="index">
                <PageChooser />
                <NfFooter></NfFooter>
            </div>
        </>
    );
}

export default App;
