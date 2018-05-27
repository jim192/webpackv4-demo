import _ from 'lodash';
import './style.css';
import pic from './abb.png';

function component(){
	var element = document.createElement('div');

	//Lodash, now imported by this script
	element.innerHTML = _.join(['Hello','webpack'],' ');
	element.classList.add('hello');

	//Add the image to our existing div
	var mypic = new Image();
	mypic.src = pic;

	element.appendChild(mypic);

	return element;
}

document.body.appendChild(component());