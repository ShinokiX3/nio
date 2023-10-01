import Button from '../../components/buttons/button';
import './footer.sass';

import facebook from '../../assets/socials/icon-facebook.svg';
import instagram from '../../assets/socials/icon-instagram.svg';
import youtube from '../../assets/socials/1688616126020-socialItems.4.icon-9EBCEB1448F08B7C.svg';
import tiktok from '../../assets/socials/1688615056471-socialItems.5.icon-569CCD29BBA43662.svg';
import linkedin from '../../assets/socials/icon-linkedin.svg';
import twitter from '../../assets/socials/icon-twitter.svg';
import global from '../../assets/home/images/icon-flag-global-20210308.png';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-wrapper">
				<h3>NIO © 2023</h3>
				<ul>
					<li>
						<Button text="Privacy & Legal" handler={() => {}} />
					</li>
					<li>
						<Button text="Global Business" handler={() => {}} />
					</li>
					<li>
						<Button text="User Manuals" handler={() => {}} />
					</li>
					<li>
						<Button text="Accessibility Statements" handler={() => {}} />
					</li>
				</ul>
				<div className="footer-socials">
					<img src={twitter} alt="Twitter" />
					<img src={instagram} alt="Instagram" />
					<img src={facebook} alt="Facebook" />
					<img src={linkedin} alt="LinkedIn" />
					<img src={youtube} alt="YouTube" />
					<img src={tiktok} alt="TikTok" />
					<div
						style={{
							display: 'flex',
							maxWidth: '40px',
							maxHeight: '25px',
							height: 'auto',
							gap: '5px',
						}}
					>
						<h4>EN</h4>
						<img src={global} alt="TikTok" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
