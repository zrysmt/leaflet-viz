// import './common/css/leaflet.css';
import './common/css/index.scss';
import util from './common/util.js';

import {map} from './component/basemap.js';
import {Toolbar} from './component/toolbar.js';
import {Editbar} from './component/editbar.js';

util.adaptHeight("map",50);

let toolbar = new Toolbar();
toolbar.init(map);
let editbar = new Editbar();
editbar.init(map);