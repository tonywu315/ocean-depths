import React from "react";
import Particles from "react-tsparticles";
import Creature from "./creature";
import "./ocean.scss";

const startColor = [25, 171, 222];

export default class Ocean extends React.Component {
    scrollRef = React.createRef();

    state = {
        scroll: 0,
    };

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
    }

    getGradient = (percent) => {
        return (
            "rgb(" +
            [startColor.map((color) => color * Math.pow(1 - percent, 3))] +
            ")"
        );
    };

    onScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scroll = winScroll / height;

        if (Math.abs(this.state.scroll - scroll) > 0.01) {
            this.setState({ scroll });
        }
    };

    render = () => {
        let backgroundColor = this.getGradient(this.state.scroll);
        let lightOpacity = this.state.scroll;

        return (
            <div className="ocean">
                <p id="introduction"> Scroll down to explore. Hover over each image for more information.</p>

                <Creature name="phytoplankton" x={50} y={1100} size={150} />
                <Creature name="seaturtle" x={76} y={1250} size={120} />
                <Creature name="dolphin" x={10} y={1200} size={180} />
                <Creature name="bluefin_tuna" x={40} y={1400} size={160} />
                <Creature name="school_of_fish" x={65} y={1600} size={150} />
                <Creature name="tigershark" x={5} y={1800} size={180} />
                <Creature name="octopus" x={40} y={2650} size={400} />
                <Creature name="bristlemouth" x={20} y={3200} size={100} />
                <Creature name="sperm_whale" x={16} y={3800} size={450} />
                <Creature name="giant_squid" x={7} y={4300} size={375} />
                <Creature name="blobfish" x={20} y={5000} size={200} />
                <Creature name="jellyfish" x={30} y={5800} size={800} />
                <Creature
                    name="red_velvet_whale_fish"
                    x={34}
                    y={7800}
                    size={60}
                />
                <Creature
                    name="humpback_angler_fish"
                    x={45}
                    y={8800}
                    size={250}
                />
                <Creature
                    name="humpback_angler_fish"
                    x={55}
                    y={8850}
                    size={40}
                />
                <Creature name="hydrothermal_vent" x={65} y={9497} size={500} />
                <Creature
                    name="vulcanoctopus_hydrothermalis"
                    x={68}
                    y={9657}
                    size={200}
                />
                <Creature name="plastic_bag" x={80} y={9700} size={100} />
                <Particles
                    id="tsparticles"
                    options={{
                        background: {
                            color: { value: "#333333" },
                            opacity: 0,
                        },
                        particles: {
                            number: {
                                density: { enable: true, area: 3200 },
                                value: 800,
                            },
                            color: { value: "#ffffff", opacity: 0 },
                            shape: { type: "circle" },
                            size: {
                                anim: { random: true },
                                value: 5,
                                random: true,
                            },
                            opacity: {
                                anim: { random: true },
                                value: 0.3,
                                random: true,
                            },
                            move: {
                                enable: true,
                                direction: "top",
                                random: true,
                                speed: 2,
                            },
                        },
                        interactivity: {
                            events: {
                                onHover: { enable: true, mode: "bubble" },
                            },
                            detect_on: "window",
                            modes: {
                                bubble: {
                                    distance: 200,
                                    duration: 0,
                                    opacity: lightOpacity,
                                    size: 10,
                                },
                            },
                        },
                        fullScreen: {
                            zIndex: 1,
                        },
                    }}
                />
                <div id="background" style={{ backgroundColor }}></div>
            </div>
        );
    };
}
