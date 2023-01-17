import { Header } from '../header/header';
import { Menu } from '../menu/menu';

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Menu></Menu>
            <Header></Header>
            <main>{children}</main>
        </>
    );
}
