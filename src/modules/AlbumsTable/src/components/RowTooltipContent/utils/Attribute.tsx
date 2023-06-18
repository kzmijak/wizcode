import { Typography } from "@mui/joy";
import { FC } from "react";

type AttributeProps = {
  label: string;
  value: string | number;
};

export const Attribute: FC<AttributeProps> = ({ label, value }) => {
  return (
    <Typography noWrap>
      <b>{label}</b>: {value}
    </Typography>
  );
};
