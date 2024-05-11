import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useContext, useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { MyContext } from "../../../utils/ContextProvider";
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.



const ParticlesComponentlight = (props) => {

    const [init, setInit] = useState(false);
    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        // console.log(container);
    };

    // console.log(dark);
    
    const [dark , toggleBoolean] = useContext(MyContext);

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "#f9f4d9",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "repulse",
                    },
                    onHover: {
                        enable: true,
                        mode: 'grab',
                    },
                },
                modes: {
                    push: {
                        distance: 200,
                        duration: 15,
                    },
                    grab: {
                        distance: 150,
                    },
                },
            },
            particles: {
                color: {
                    value: "#2596be",
                },
                links: {
                    color: "#000000",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: .4,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 300,
                },
                opacity: {
                    value: 1.0,
                },
                shape: {
                    type: "triangle",
                },
                size: {
                    value: { min: 2, max: 4 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    // console.log(dark);

    return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponentlight;