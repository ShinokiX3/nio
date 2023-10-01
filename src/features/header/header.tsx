import Button from '../../components/buttons/button';
import styles from './header.module.sass';

import logo from '../../assets/home/svg/nio-logo-white.svg';
import language from '../../assets/home/svg/icon_language.svg';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.item}>
					<ul>
						<li>
							<Button
								type="emphasized"
								color="black"
								text="We are Nio"
								handler={() => {}}
							/>
						</li>
						<li>
							<Button
								type="emphasized"
								color="black"
								text="Models"
								handler={() => {}}
							/>
						</li>
						<li>
							<Button
								type="emphasized"
								color="black"
								text="Beyond the Car"
								handler={() => {}}
							/>
						</li>
					</ul>
				</div>
				<div className={styles.item}>
					<img width={20} src={logo} alt="Nio logo" />
				</div>
				<div className={styles.item}>
					<Button
						type="emphasized"
						color="black"
						text="Language"
						style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
						handler={() => {}}
					>
						<img src={language} alt="Nio language" />
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
