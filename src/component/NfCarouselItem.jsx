import { Component } from "react";
import NfCarouselImage from "./NfCarouselImage";

class NfCarouselItem extends Component {
    render() {
        return (
            <>
                {" "}
                <div className={"carousel-item " + this.props.active}>
                    <div className="row g-1 flex-nowrap mx-0">
                        <NfCarouselImage
                            title="Star Wars: Episode IV - A New Hope"
                            year="1977"
                            src="https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg"
                        />
                        <NfCarouselImage
                            title="Star Wars: Episode IV - A New Hope"
                            year="1977"
                            src="https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg"
                        />
                        <NfCarouselImage
                            title="Star Wars: Episode IV - A New Hope"
                            year="1977"
                            src="https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg"
                        />
                        <NfCarouselImage
                            title="Star Wars: Episode IV - A New Hope"
                            year="1977"
                            src="https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg"
                        />
                        <NfCarouselImage
                            title="Star Wars: Episode IV - A New Hope"
                            year="1977"
                            src="https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg"
                        />
                        <NfCarouselImage
                            title="Star Wars: Episode IV - A New Hope"
                            year="1977"
                            src="https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg"
                        />
                    </div>
                </div>
            </>
        );
    }
}
export default NfCarouselItem;
