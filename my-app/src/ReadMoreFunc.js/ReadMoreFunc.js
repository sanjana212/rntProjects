import React, { useState } from 'react'
// import './ReadMoreFunc.css';
const ReadMoreFunc = () => {
    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
        <p className="extra-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab
            porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero
            commodi officia aliquam! Maxime.
        </p>
    </div>
    const linkName = readMore ? 'Read Less << ' : 'Read More >> '
    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni consequatur, ipsum a quidem recusandae libero perferendis odit amet facere officia quae ad earum repudiandae dolorem animi, nobis, nostrum pariatur?
                <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><span style={{cursor:'pointer'}}>{linkName}</span></a>
                {readMore && extraContent}
            </p>
            {/* <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><span>{linkName}</span></a>
            {readMore && extraContent} */}
        </div>
    )
}

export default ReadMoreFunc;