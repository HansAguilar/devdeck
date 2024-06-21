import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
    children,
    className,
    containerClassName,
    animate = true,
    borderColor
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    animate?: boolean;
    borderColor?: string;
}) => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };

    return (
        <div className={cn("relative p-[4px] group", containerClassName)}>
            <motion.div
                variants={animate ? variants : undefined}
                initial={animate ? "initial" : undefined}
                animate={animate ? "animate" : undefined}
                transition={
                    animate
                        ? {
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }
                        : undefined
                }
                style={{
                    backgroundSize: animate ? "400% 400%" : undefined,
                    backgroundImage: animate
                      ? `radial-gradient(circle farthest-side at 0 100%, ${borderColor}, transparent),
                         radial-gradient(circle farthest-side at 100% 0, ${borderColor}, transparent),
                         radial-gradient(circle farthest-side at 100% 100%, ${borderColor}, transparent),
                         radial-gradient(circle farthest-side at 0 0, ${borderColor}, #ffffff)`
                      : undefined,
                  }}
                className={cn(
                    "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
                    
                )}
            />
            <motion.div
                variants={animate ? variants : undefined}
                initial={animate ? "initial" : undefined}
                animate={animate ? "animate" : undefined}
                transition={
                    animate
                        ? {
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }
                        : undefined
                }
                style={{
                    backgroundSize: animate ? "400% 400%" : undefined,
                    backgroundImage: animate
                      ? `radial-gradient(circle farthest-side at 0 100%, ${borderColor}, transparent),
                         radial-gradient(circle farthest-side at 100% 0, ${borderColor}, transparent),
                         radial-gradient(circle farthest-side at 100% 100%, ${borderColor}, transparent),
                         radial-gradient(circle farthest-side at 0 0, ${borderColor}, ${borderColor})`
                      : undefined,
                }}
                className={cn(
                    "absolute inset-0 rounded-3xl z-[1] will-change-transform",

                )}
            />
            <div className={cn("z-10", className)}>{children}</div>
        </div>
    );
};
