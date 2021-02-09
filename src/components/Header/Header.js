import { Layout } from 'antd';
import { Container } from '../Container/Container';
import { Logo } from '../Logo/Logo';
import { AddButton } from '../AddButton/AddButton';

import styles from "./Header.module.scss";

const HeaderComponent = Layout.Header;

export const Header = () => (
    <HeaderComponent>
        <Container>
            <div className={styles.innerWrapper}>
                <Logo />
                <AddButton />
            </div>
        </Container>
    </HeaderComponent>
)