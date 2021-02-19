import './scss/index.scss'
import {Excel} from './components/excel/Excel';
import {Header} from './components/header/Header';
import {Toolbar} from './components/toolbar/Toolbar';
import {Table} from './components/table/Table';
import {Formula} from './components/formula/Formula';
import {Store} from '@core/Store';
import {rootReducer} from '@/redux/rootReducer';
import {debounce, storage} from '@core/utils';
import {initialState} from '@/redux/initialState';

const store = new Store(rootReducer, initialState)

const stateListener = debounce((state => {
  storage('excel-state', state)
}), 300)

store.subscribe(stateListener)

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
  store,
})
excel.render()

