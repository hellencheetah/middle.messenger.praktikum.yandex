export { Page500 as default } from './page5';
import {renderDom} from "../../utils/renderDom";
import {Page500} from "./page5";
import '../../styles/main.scss';



renderDom("#app", new Page500());

