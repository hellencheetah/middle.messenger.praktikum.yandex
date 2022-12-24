import {renderDom} from "../../utils/renderDom";
import {Chats} from "./chats";
import '../../styles/main.scss';
export { Chats as default } from './chats';


renderDom("#app", new Chats({}));
