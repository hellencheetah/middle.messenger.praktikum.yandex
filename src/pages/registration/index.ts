import {renderDom} from "../../utils/renderDom";
import {Registration} from "./registration";
import '../../styles/main.scss';
export { Registration as default } from './registration'

renderDom("#app", new Registration());

