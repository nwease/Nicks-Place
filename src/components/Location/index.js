import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                title="Nicks Place"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d308.8954101898987!2d5.305109861602367!3d51.73004878567815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6ee21d4db5305%3A0x4829dc0389444414!2sFleringen+141%2C+5235+EV+&#39;s-Hertogenbosch!5e0!3m2!1snl!2snl!4v1547565648867"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen>
            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;
