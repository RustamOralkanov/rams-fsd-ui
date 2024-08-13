import React, { ReactNode } from "react";
import "./Container.scss";

export const Container: React.FC<{ readonly children: ReactNode }> = ({ children }) => {
    return <div className="container">{children}</div>;
};
