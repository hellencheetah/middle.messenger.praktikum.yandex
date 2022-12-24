import {renderDom} from "../../utils/renderDom";
import {Profile} from "./profile";
import '../../styles/main.scss';
export { Profile as default } from './profile';



renderDom("#app", new Profile({}));
