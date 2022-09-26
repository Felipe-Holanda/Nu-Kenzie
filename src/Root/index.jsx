import { useState } from "react";

import InitialPage from "../InitialPage";
import PrivateContent from "../PrivateContent";

export default function Root() {
    const [login, setLogin] = useState(false);

    if (login) {
        return (<PrivateContent login={login} setLogin={setLogin} />)
    } else {
        return (<InitialPage login={login} setLogin={setLogin} />)
    }

}