import { Component } from "react";
import NfTitleBar from "./NfTitleBar";
import NfCarouselBar from "./NfCarouselBar";

class NfMain extends Component {
    render() {
        return (
            <>
                {" "}
                <main>
                    <section className="container">
                        <NfTitleBar />
                        <NfCarouselBar
                            title="Star Wars"
                            id="starWars"
                            search="Star Wars"
                        />
                        <NfCarouselBar
                            title="Dragon Ball"
                            id="dragonBall"
                            search="Dragon Ball"
                        />
                        <NfCarouselBar
                            title="Star Trek"
                            id="starTrek"
                            search="Star Trek"
                        />
                    </section>
                </main>
            </>
        );
    }
}
export default NfMain;
