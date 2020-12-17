import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

function WithAuthenticationHOC({componente}) {
    return(
        withAuthenticationRequired(componente, {
            onRedirecting: () => <h3>Cargando, el ark</h3>,
        })
    ) 
}

export default WithAuthenticationHOC




