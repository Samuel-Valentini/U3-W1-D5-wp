import { Component } from "react";

class NfCarouselItem extends Component {
    render() {
        return (
            <>
                {" "}
                <div className={"carousel-item " + this.props.active}>
                    <div className="row gap-1 flex-nowrap">
                        <div className="col col-6 col-sm-4 col-md-2 p-0">
                            <a href="#">
                                <img
                                    src="/assets/img/media/media0.webp"
                                    className="d-block w-100"
                                    alt="a movie"
                                />
                            </a>
                        </div>
                        <div className="col col-6 col-sm-4 col-md-2 p-0">
                            <a href="#">
                                <img
                                    src="/assets/img/media/media1.jpg"
                                    className="d-block w-100"
                                    alt="a movie"
                                />
                            </a>
                        </div>
                        <div className="col col-6 col-sm-4 col-md-2 p-0">
                            <a href="#">
                                <img
                                    src="/assets/img/media/media2.webp"
                                    className="d-block w-100"
                                    alt="a movie"
                                />
                            </a>
                        </div>
                        <div className="col col-6 col-sm-4 col-md-2 p-0">
                            <a href="#">
                                <img
                                    src="/assets/img/media/media3.webp"
                                    className="d-block w-100"
                                    alt="a movie"
                                />
                            </a>
                        </div>
                        <div className="col col-6 col-sm-4 col-md-2 p-0">
                            <a href="#">
                                <img
                                    src="/assets/img/media/media4.jpg"
                                    className="d-block w-100"
                                    alt="a movie"
                                />
                            </a>
                        </div>
                        <div className="col col-6 col-sm-4 col-md-2 p-0">
                            <a href="#">
                                <img
                                    src="/assets/img/media/media5.webp"
                                    className="d-block w-100"
                                    alt="a movie"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default NfCarouselItem;
