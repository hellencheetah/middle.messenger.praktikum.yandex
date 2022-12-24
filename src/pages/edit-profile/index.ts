import {renderDom} from "../../utils/renderDom";
import {EditProfile} from "./edit-profile";
import '../../styles/main.scss';
export { EditProfile as default } from './edit-profile';

renderDom("#app", new EditProfile({}));
