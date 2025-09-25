const createProjectHover = ({id, description, demo, github}) => {
    const projectHover = document.createElement("div");
    projectHover.className = "portfolio__project-hover";
    projectHover.setAttribute('id', id)
    const projectDescription = document.createElement("p");
    projectDescription.className = "portfolio__project-description";
    const projectBtnBlock = document.createElement("div");
    projectBtnBlock.className = "portfolio__project-btn-block";
    const projectGitHubButton = document.createElement("a");
    projectGitHubButton.className = "portfolio__project-button";

    projectHover.appendChild(projectDescription)
    projectHover.appendChild(projectBtnBlock)
    projectBtnBlock.appendChild(projectGitHubButton)
    projectDescription.innerText = description
    projectGitHubButton.innerText = 'GitHub'
    projectGitHubButton.setAttribute('href', github)
    projectGitHubButton.setAttribute('target', '_blank')

    if (demo) {
        const projectDemoButton = document.createElement('a')
        projectDemoButton.className = 'portfolio__project-button'
        projectDemoButton.innerText = 'DEMO'
        projectDemoButton.setAttribute('href', demo)
        projectDemoButton.setAttribute('target', '_blank')
        projectBtnBlock.appendChild(projectDemoButton)
    }

    return projectHover
};
