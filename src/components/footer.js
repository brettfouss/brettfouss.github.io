import React from "react"

const Footer = () => (
    <footer>
        <br />
            <div className="FooterLinks">
                <p><strong>Contact, Social Media, Etc.</strong></p>
                <p><a href="https://docs.google.com/document/d/1SeSeDmjY_F4WU7Ux8bD1PsEnmMvdce1q0UuvOZB1hMY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></p>
                <p><a href="mailto:bmfouss@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></p>
                <p><a href="https://www.github.com/brettfouss/" target="_blank" rel="noopener noreferrer">Github</a></p>
                <p><a href="https://www.linkedin.com/in/brett-fouss-697635a9" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                <p><a href="https://www.instagram.com/brettfouss/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
            </div>
            <div className="FooterLinks">
                <p>
                    <strong>Made with <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a></strong> © { new Date().getFullYear() } Brett Fouss
                </p>
            </div>
    </footer>
)

export default Footer
