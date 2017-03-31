import '../node_modules/leaflet/dist/leaflet.css';
import './common/css/index.scss';

import {map} from './component/basemap.js';
import {Toolbar} from './component/toolbar.js';
import {Editbar} from './component/editbar.js';


let toolbar = new Toolbar();
toolbar.init(map);