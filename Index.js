import React from 'react';

function Index() {
    return(
        <>
            <h2>Welcome!</h2>
            <article>
                <h3>Let me introduce myself...</h3>
                    <p>Hi there! My name is Kelsey Collins and, as of spring 2023, I am a current student in Oregon State University's Computer Science program. 
                    You have arrived at my MERN web development sample site. During this site's creation, I have learned so many new skills that I hope can be 
                    put to effective use in the future. Please explore around and try out the elements I have incorporated into the user experience. 
                    </p>
            </article>
            <article>
                <h3>What is MERN?</h3>
                    <p>This web application was developed with the MERN stack. MERN stands for <strong>M</strong>ongoDB, <strong>E</strong>xpress, <strong>R</strong>eact, and <strong>N</strong>ode. 
                    These four technologies are the main players that assist with the effective and efficient creation of user-friendly and 
                    customizable web applications. <strong>MongoDB</strong> is a NoSQL database management system. On my web application, it is used to manage 
                    the Assessment Log page and components. <strong>Express</strong> is used with Node in the backend to build the frameworks of web applications. 
                    <strong>React</strong> is a JavaScript-based library that provides user-interface components to the frontend with ease. Finally, <strong>Node</strong> is a cross-platform
                    runtime environment for developing applications on the server-side.</p>
                    <p>As you explore this site, keep an eye out for the bold and subtle ways I have incorporated all of the above aspects into 
                    the user experience. Page colors, font size and style, and other <strong>Cascading Style Sheet</strong> components have been carefully selected to improve 
                    readability while maintaining aesthetic interest. Informative messages may be displayed on the page or in an alert popup. An <strong>API generator</strong> is 
                    even referenced on the Staff List tab.</p>
                    <p>I hope you enjoy exploring this site!</p>
                    <p>Thank you!</p>
            </article>
        </>
    );
}
export default Index;