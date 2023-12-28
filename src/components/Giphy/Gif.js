import React from 'react';

const Gif = ({el}) => {
    return (
        <div>
            <iframe
                src={el.embed_url}
                title = 'giphy'
            />
            <p></p>
        </div>
    );
};

export default Gif;