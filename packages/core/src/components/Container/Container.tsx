import { ReactNode } from "react";
import styled from "@emotion/styled";
import {
  border,
  SystemBorderProps,
  common,
  SystemCommonProps,
  layout,
  SystemLayoutProps,
} from "@shared/theme";

export interface ContainerProps
  extends SystemCommonProps,
    SystemLayoutProps,
    SystemBorderProps {
  children?: ReactNode;
}

const Root = styled.div<ContainerProps>`
  ${border}
  ${common}
  ${layout}
`;

export const Container = ({ children, ...rest }: ContainerProps) => (
  <Root {...rest}>{children}</Root>
);

Container.displayName = "Container";
