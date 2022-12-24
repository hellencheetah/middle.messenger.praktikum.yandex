import {renderDom} from "../../utils/renderDom";
import {Page404} from "./page404";
import '../../styles/main.scss';
export { Page404 as default } from './page404';


renderDom("#app", new Page404({}));
