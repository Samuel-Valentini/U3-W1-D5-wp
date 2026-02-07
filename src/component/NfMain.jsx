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
                        <NfCarouselBar title="Trending Now" id="trendingNow" />
                        <NfCarouselBar
                            title="Watch It Again"
                            id="watchItAgain"
                        />
                        <NfCarouselBar title="New Releases" id="newReleases" />
                    </section>
                </main>
            </>
        );
    }
}
export default NfMain;
