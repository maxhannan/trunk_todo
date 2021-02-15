import '../node_modules/@fortawesome/fontawesome-free/js/all';
import { mainContainerModule } from './mainContainer';
import { sideBarModule } from './sidebar';

const pageload = (()=>{
    mainContainerModule();
    sideBarModule();
})();


