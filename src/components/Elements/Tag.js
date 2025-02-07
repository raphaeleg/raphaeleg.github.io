import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Tag = ( { link = "#", name, isSolid, isNewPage, ...props } ) => {
    return (
        <Link
            href={link}
            target={isNewPage ? "_blank" : ""}
            className={cx(
                "my-4 mr-4 inline-block py-2 sm:py-3 px-6 sm:px-10 border-accent rounded-full capitalize font-semibold hover:scale-105 transition-all ease duration-200 text-sm sm:text-base",
                `${isSolid ? "bg-accent text-light" : "bg-white text-accent border-2 border-solid "}`,
                props.className,
            )}
        >
            {name}
        </Link>
    );
};

export default Tag;