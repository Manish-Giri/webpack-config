/**
 * Created by manishgiri on 7/14/17.
 */
import big from '../assets/big.jpeg';
import small from '../assets/small.jpeg';
import '../styles/image_viewer.css';


const smallImage = document.createElement("img");
//image.src = "http://lorempixel.com/400/400";
smallImage.src = small;
document.body.appendChild(smallImage);


const bigImage = document.createElement("img");
//image.src = "http://lorempixel.com/400/400";
bigImage.src = big;
document.body.appendChild(bigImage);
