export { Login as default } from './login';
import {renderDom} from "../../utils/renderDom";
import {Login} from "./login";
import '../../styles/main.scss';

renderDom("#app", new Login());

