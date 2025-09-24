declare module 'react-router-dom' {
  import * as React from 'react';
  export const BrowserRouter: React.FC<{ basename?: string } & React.PropsWithChildren>;
  export const Routes: React.FC<React.PropsWithChildren>;
  export const Route: React.FC<{ path?: string; element?: React.ReactNode; index?: boolean } & React.PropsWithChildren>;
  export const Outlet: React.FC;
  export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string;
    className?: string | ((props: { isActive: boolean }) => string);
    style?: React.CSSProperties | ((props: { isActive: boolean }) => React.CSSProperties);
    end?: boolean;
  }
  export const NavLink: React.FC<NavLinkProps>;
  export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string;
    replace?: boolean;
  }
  export const Link: React.FC<LinkProps>;
}
