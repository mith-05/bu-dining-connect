"use client";

import React, { useState } from "react";
import {
    ServerStyleSheet,
    StyleSheetManager,
} from "styled-components";
import { useServerInsertedHTML } from "next/navigation";

// This component ensures styled-components styles are properly rendered when Next.js generates pages on the server.

export default function StyledComponentsRegistry({children}: { children: React.ReactNode;}) {

    // Create a stylesheet to collect styles during server rendering
    const [sheet] = useState(() => new ServerStyleSheet());

    // Insert the collected styles into the HTML sent to the browser
    useServerInsertedHTML(() => {
        const styles = sheet.getStyleElement();
        sheet.instance.clearTag();
        return <>{styles}</>;
    });

    // On the client side, render the components normally
    if (typeof window !== "undefined") {
        return <>{children}</>;
    }

    // On the server side, collect styles from the components
    return (
        <StyleSheetManager sheet={sheet.instance}>
            {children}
        </StyleSheetManager>
    );
}