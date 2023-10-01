import Footer from '../../features/footer/footer';
import Header from '../../features/header/header';
import styles from './layout.module.sass';

interface ILayout {
	children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
