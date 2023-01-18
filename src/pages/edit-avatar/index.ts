import {renderDom} from "../../utils/renderDom";
import {EditAvatar} from "./edit-avatar";
import '../../styles/main.scss';
export { EditAvatar as default } from './edit-avatar'


renderDom("#app", new EditAvatar());
