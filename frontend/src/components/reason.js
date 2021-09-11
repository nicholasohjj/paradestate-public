import React from "react";

const Reason = ({person}) => {
    if (person.reason) {
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