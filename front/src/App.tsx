import { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Phone } from './components/phone/Phone';
import { Collapse } from './components/Collapse';

function App() {
	return (
		<div className="App">
			<Phone>
				<Fragment>
					<div className="map"></div>
					<div className="bottom-list">
						<Collapse text="Hey there">
              <h1>Walter!!!</h1>
            </Collapse>
						<Collapse text="Hey there" />
						<Collapse text="Hey there" />
						<Collapse text="Hey there" />
						<Collapse text="Hey there" />
						<Collapse text="Hey there" />
						<Collapse text="Hey there" />
						<Collapse text="Hey there" />
						<Collapse text="Hey there" />
						<Collapse text="Hey there" />
						<Collapse text="Hey there" />
						<Collapse text="Hey there" />
					</div>
				</Fragment>
			</Phone>
		</div>
	);
}

export default App;
