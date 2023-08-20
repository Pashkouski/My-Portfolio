import {useCallback} from "react";
import {Container, Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";
import Particles from "react-tsparticles";


export const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#282834",

                    },

                    image: "url('https://i.ibb.co/cwtwf5T/background-1.jpg')",
                    //image: "url('https://media.istockphoto.com/id/1294603953/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B5-%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B5-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%B4%D0%B8%D0%B0%D0%B3%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D1%84%D0%BE%D0%BD%D0%B0.jpg?s=612x612&w=0&k=20&c=xkXkwxQ_3il-nWksI59D-XB9tpJyhuDyg5P39DSC1Ec=')",
                    size: "cover", // задает масштабирование изображения
                    repeat: "no-repeat", // задает повторение изображения
                    position: "center center", // задает позицию изображения
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: {min: 1, max: 5},
                    },
                },
                detectRetina: true,
            }}
        />
    );
};