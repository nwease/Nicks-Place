import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 25
    };

    percentage = () => {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    };

    componentDidUpdate() {
        setTimeout(() => {
            this.percentage()
        },30);
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade onReveal={() => this.percentage()}>
                        <div className="discount_percentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase Tickets now before they are gone!!!</h3>
                            <p>Complete strangers can stand silent next to each other in an elevator and not even look each other in the eye. But at a concert, those same strangers could find themselves dancing and singing together like best friends. That's the power of music.</p>
                            <div>BUTTON</div>
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;