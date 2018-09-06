import React, {Component} from 'react';
import BlurbForm from './BlurbForm';


class BlurbContainer extends Component {
    constructor(props){
        super(props) 
        this.state = {
            title: "",
            topic: "",
            emotion: "",
            number: 0,
            body: ""
        }
    }
    render() {
        return (
            <article className="main-blurb-container">
                <div className="blurb-header">
                    <span>Post title</span>
                    <span>Post topic</span>
                    <img 
                    className="test-emoticon"
                    src="https://banner2.kisspng.com/20180419/jrq/kisspng-emoticon-smiley-facial-expression-happiness-calm-5ad8b9e5953148.8932853915241528056111.jpg"
                    alt="emoticon"
                    />
                    <span>post number of day</span>
                </div>
                <div className="blurb-body">
                    <p>Pet me pet me don't pet me. Soft kitty warm kitty little ball of furr ptracy russian blue lick yarn hanging out of own butt for hide from vacuum cleaner fall asleep upside-down and sit on human they not getting up ever. Swat turds around the house be superior for chase laser. Experiences short bursts of poo-phoria after going to the loo i like big cats and i can not lie munch on tasty moths and has closed eyes but still sees you. You call this cat food reward the chosen human with a slow blink hack up furballs yet when owners are asleep, cry for no apparent reason. Ask for petting. Inspect anything brought into the house soft kitty warm kitty little ball of furr.</p>
                </div>
            </article>
        )
    }
}
export default BlurbContainer