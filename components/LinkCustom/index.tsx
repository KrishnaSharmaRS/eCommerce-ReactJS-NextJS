import React, { CSSProperties, ReactNode } from "react";
import Link from "next/link";

const LinkCustom = ({ to, children, className, style }: { to: string; children: ReactNode, className?: string, style?: CSSProperties }) => (
    <Link href={to} passHref>
        <a className={className} style={style}>{children}</a>
    </Link>
);

export default LinkCustom;