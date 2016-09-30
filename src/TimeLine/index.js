import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './style.scss';

const TimeLine = ({ className }) => {
    const cn = classNames(
        'timeline-item',
        className,
    );

    return (
        <div className={cn}>
            <div className="animated-background">
                <div className="background-masker header-top"></div>
                <div className="background-masker header-left"></div>
                <div className="background-masker header-right"></div>
                <div className="background-masker header-bottom"></div>
                <div className="background-masker subheader-left"></div>
                <div className="background-masker subheader-right"></div>
                <div className="background-masker subheader-bottom"></div>
                <div className="background-masker content-top"></div>
                <div className="background-masker content-first-end"></div>
                <div className="background-masker content-second-line"></div>
                <div className="background-masker content-second-end"></div>
                <div className="background-masker content-third-line"></div>
                <div className="background-masker content-third-end"></div>
            </div>
        </div>
    );
};

TimeLine.propTypes = {
    className: PropTypes.string,
};

TimeLine.defaultProps = {
    className: '',
};

export default TimeLine;