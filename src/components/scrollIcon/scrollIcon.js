import React from 'react';

import './scrollIcon.scss';

function ScrollIcon() {
    return <div className="mouse_scroll">
        {/* <div className="mouse">
            <div className="wheel"></div>
        </div> */}
        <div>
            <span className="m_scroll_arrows one"></span>
            <span className="m_scroll_arrows two"></span>
            <span className="m_scroll_arrows three"></span>
        </div>
    </div>
}

export default ScrollIcon;