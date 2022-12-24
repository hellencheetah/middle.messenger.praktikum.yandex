import {renderDom} from "../../utils/renderDom";
import {EditPassword} from "./edit-password";
import '../../styles/main.scss';
export { EditPassword as default } from './edit-password'


renderDom("#app", new EditPassword({}));
