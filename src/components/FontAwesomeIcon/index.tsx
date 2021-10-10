import React, { ReactElement } from "react";
import { Box } from "@mui/material";

interface Props {
  name: string;
  type?: "solid" | "regular" | "light" | "thin" | "duotone" | "brands";
  sharp?: boolean;
  size?: "2sx" | "xs" | "sm" | "lg" | "xl" | "2xl";
  rotate?: 90 | 180 | 270;
  flip?: "horizontal" | "vertical" | "both";
  color?: string;
  animation?:
    | "beat"
    | "beat-fade"
    | "bounce"
    | "fade"
    | "flip"
    | "shake"
    | "spin"
    | "spin-reverse"
    | "spin-pulse";
}

FontAwesomeIcon.defaultProps = {
  type: "solid",
  sharp: false,
} as Props;

export default function FontAwesomeIcon(props: Props): ReactElement {
  return (
    <Box
      className={`fa-${props.type} fa-${props.name} ${
        props.sharp ? "fa-sharp" : ""
      } ${props.size ? "fa-" + props.size : ""} ${
        props.rotate ? "fa-rotate-" + props.rotate : ""
      } ${props.flip ? "fa-flip-" + props.flip : ""} ${
        props.animation === "spin-reverse"
          ? "fa-spin fa-spin-reverse"
          : props.animation
          ? "fa-" + props.animation
          : ""
      }`}
      sx={{
        color: props.color,
      }}
    />
  );
}
