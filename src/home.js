import 'jquery';

import './../node_modules/jquery-ui/ui/widgets/slider';
import './../node_modules/jquery-ui/ui/widgets/datepicker';
import './style/base.styl';

function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./modules/', true, /^\.\/.*\.styl$/));
importAll(require.context('./pages/', true, /^\.\/.*\.styl$/));

importAll(require.context('./favicons/', true, /^\.\/.*\.js$/));
importAll(require.context('./modules/', true, /^\.\/.*\.js$/));
importAll(require.context('./pages/', true, /^\.\/.*\.js$/));
