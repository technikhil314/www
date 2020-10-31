import { useEffect } from "react";

const animationParameters = {
    duration: 1000,
    iterations: 1,
    fill: "forwards",
};

export const useAnimatingTitle = (ref, keywords) => {
    let count = 0;
    useEffect(() => {
        ref.current.innerHTML = keywords[count % keywords.length];
        requestAnimationFrame(() => {
            ref.current.animate(
                [
                    {
                        maxWidth: "100%"
                    },
                ],
                animationParameters
            );
        });
        const intervalId =
            ref.current.animate &&
            setInterval(async () => {
                count++;
                const animation = ref.current.animate(
                    [
                        {
                            maxWidth: "0%"
                        },
                    ],
                    animationParameters
                );
                await animation.finished;
                ref.current.innerHTML = keywords[count % keywords.length];
                requestAnimationFrame(() => {
                    ref.current.animate(
                        [
                            {
                                maxWidth: "100%"
                            },
                        ],
                        animationParameters
                    );
                });
            }, 2000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);
};
