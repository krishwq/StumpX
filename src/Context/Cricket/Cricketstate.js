import cricketContext from "./cricketContext";
import { useState } from "react";
const CricketState = (props) => {
    return (
        <cricketContext.Provider
          value={{
            
          }}
        >
          {props.children}
        </cricketContext.Provider>
      );
    };

export default CricketState;