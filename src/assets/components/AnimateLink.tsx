import { FC, ReactNode } from "react";
import { BubblyLink } from "react-bubbly-transitions";

type Props = {
  to: string;
  children: ReactNode;
};

export const MyBubblyLink: FC<Props> = ({ to, children }) => (
  <BubblyLink to={to} colorStart='#146C94' colorEnd='#ffffff'>
    {children}
  </BubblyLink>
);
