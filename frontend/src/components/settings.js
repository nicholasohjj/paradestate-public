import React from "react";
import { TextField} from '@material-ui/core';

const Settings = ({
    newcdo,
    handlecdochange,
    newcds,
    handlecdschange,
    newcos,
    handlecoschange,
    newas,
    handleaschange,
    newauthor,
    handleauthorchange
}) => {

    return (
        <>
          <div>
            <TextField
              id="standard-multiline-flexible"
              label="CDO (Rank/Name)"
              multiline
              maxRows={4}
              value={newcdo}
              onChange={handlecdochange}
              />  
          </div>

          <div>
            <TextField
              id="standard-multiline-flexible"
              label="CDS (Rank/Name)"
              multiline
              maxRows={4}
              value={newcds}
              onChange={handlecdschange}
              />  
          </div>

          <div>
            <TextField
              id="standard-multiline-flexible"
              label="COS (Rank/Name)"
              multiline
              maxRows={4}
              value={newcos}
              onChange={handlecoschange}
              />  
          </div>

          <div>
            <TextField
              id="standard-multiline-flexible"
              label="A/S (Rank/Name)"
              multiline
              maxRows={4}
              value={newas}
              onChange={handleaschange}
              />  
          </div>

          <div>
            <TextField
              id="standard-multiline-flexible"
              label="Done By: (Rank/Name)"
              multiline
              maxRows={4}
              value={newauthor}
              onChange={handleauthorchange}
              />  
          </div>




        </>
    )
}

export default Settings