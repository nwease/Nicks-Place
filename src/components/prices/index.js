import React, {Component} from 'react';

class Prices extends Component {

    state = {
        prices: ['$100', '$150', '$250'],
        positions: ['Floor', 'Balcony', 'Suites'],
        desc: [
            'Seating is on an aluminum bench, without seat backs',
            'Seating is on an aluminum bench, without seat backs',
            'Features upscale amenities including carpeting, furniture, bars, restaurants, television monitors, "themed" food stands, climate control and executive restrooms.'
        ],
        linkTo: ['#', '#', '#']
    };

    showBoxes = () => (
        <div>
            SOMETHING HERE
        </div>
    );

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Prices</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Prices;