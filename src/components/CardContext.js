import React from "react";

const CardContext = React.createContext({
    title: "",
    deployed_link: "",
    github_repo: "",
    image: "",
    id: Number
});

export default CardContext;