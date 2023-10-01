import './index.sass';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './screens/home/home.tsx';
import Layout from './layouts/main/layout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Layout>
			<Home />
		</Layout>
	</React.StrictMode>
);
