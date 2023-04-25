import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Github() {
    return (
        <div className='githubpages'>
            <a href="https://www.github.com/kenghoufong1">
                <FontAwesomeIcon icon={faGithub} size="5x" />
                GitHub 
            </a>
            <a href="https://www.linkedin.com/in/keng-fong-84740726b/">
                <FontAwesomeIcon icon={faLinkedin} size="5x"/> 
                LinkedIn
            </a>
        </div>
    );
}

export default Github;