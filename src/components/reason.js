import React from "react";

const Reason = ({person}) => {
    if (person.reason  && (person.reason!=='nil')) {
        return (
            <>
            ({person.reason})
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default Reason