import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Tag = ( { link = "#", name, isSolid, isNewPage, ...props } ) => {
    return (
        <Link
            href={link}
            target={isNewPage ? "_blank" : ""}
            className={cx(
                "inline-block py-2 sm:py-3 px-6 sm:px-10 rounded-full capitalize font-semibold hover:scale-105 transition-all ease duration-200 text-sm sm:text-base",
                `${isSolid ? "bg-accent text-light" : "bg-white text-accent border-2 border-solid border-accent"}`,
                props.className,
            )}
        >
            {name}
        </Link>
    );
};

export default Tag;