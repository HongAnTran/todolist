import html  from "../core.js";
import { connect } from "../store.js";
import Header from "../component/Header.js";
import TodoList from "../component/TodoList.js";
import Footer from "../component/Footer.js";
import time from "../component/time.js";


const connectors = connect()
function app({ todos }){

   
    
    return html`
    	<section class="todoapp"> 
        ${Header()}
        ${todos.length > 0 && TodoList()}
        ${todos.length > 0 && Footer()}

        </section>        
     </div>
    `
}

export default connectors(app)

