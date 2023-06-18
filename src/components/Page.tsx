import { FC, ReactNode } from "react";
import { Helmet } from "react-helmet-async";

type PageProps = {
  title: string;
  children: ReactNode;
};

export const Page: FC<PageProps> = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>{title} | Wizcode Albums Gallery</title>
      </Helmet>
      {children}
    </>
  );
};
