import * as modal from './modules/modal';
import * as tooltip from './modules/tooltip';
import * as date from './modules/date';
import * as select from './modules/select';
import * as share from './modules/share';
import * as navbar from './modules/navbar';

export function init() {
  modal.$init();
  tooltip.$init();
  date.$init();
  select.$init();
  share.$init();
  navbar.$init();
}
