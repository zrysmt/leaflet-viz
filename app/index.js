// import './common/css/leaflet.css';
import './common/css/index.scss';
import util from './common/util.js';

import {map} from './component/basemap.js';
import {Toolbar} from './component/toolbar.js';
import {Editbar} from './component/editbar.js';
import {Maptypebar} from './component/maptypebar.js';
import {Viz} from './component/viz.js';
import {MapServer} from './component/mapServer.js';

util.adaptHeight("map",0);


let toolbar = new Toolbar();
toolbar.init(map);
let editbar = new Editbar();
editbar.init(map);
let maptypebar = new Maptypebar();
maptypebar.init(map);
let viz = new Viz();
viz.init(map);
let mapServer = new MapServer();
mapServer.init();