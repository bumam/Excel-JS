import './scss/index.scss'
import {Excel} from './components/excel/Excel';
import {Header} from './components/header/header';
import {Toolbar} from './components/toolbar/toolbar';
import {Table} from './components/table/table';
import {Formula} from './components/formula/formula';

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
})
excel.render()

