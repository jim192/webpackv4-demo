import printMe from './print.js';
import { cube } from './math.js';
import './styles.css';

function component(){
	var element = document.createElement('pre');
	var btn = document.createElement('button');

	btn.innerHTML = [
		'Hello webpack',
		'5 cubed is equal to ' + cube(5)
	].join('\n\n');

	return element;
}

// document.body.appendChild(component());
// Click the button on the page, the console is printing the old printMe function
// To update that binding to the new printMe
let element = component();// Store the element to re-render on print.js changes
document.body.appendChild(element);

if(module.hot){
	module.hot.accept('./print.js',function(){
		console.log('Accepting the updated printMe module!');
		// printMe();
		document.body.removeChild(element);
		element = component(); // Re-render the "component" to update the click handler
		document.body.appendChild(element);
	})
}