import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";
import "./App.css";
import NfNavbar from "./component/NfNavbar";
import NfMain from "./component/NfMain";
import NfFooter from "./component/NfFooter";

import { hello } from "./component/constants";
console.log(hello);

function App() {
    return (
        <>
            {" "}
            <div className="index">
                <NfNavbar></NfNavbar>
                <NfMain></NfMain>
                <NfFooter></NfFooter>
            </div>
        </>
    );
}

export default App;
