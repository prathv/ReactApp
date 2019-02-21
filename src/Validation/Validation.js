import React from 'react'

const validate = (props) => {

    return(
        <div>
                <div>
                    {
                        props.length < 5 ? <p> Text too short</p>:null
                    }
                </div>

                <div>
                {
                    props.length >10 ? <p> Text too long</p>:null
                }
                </div>
        </div>

    );
};

export default validate