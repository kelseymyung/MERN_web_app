import React from 'react';
import {TfiThought} from 'react-icons/tfi';

function Topics() {
    return(
        <>
            <h2>Web Dev Concepts  <TfiThought/></h2>
            <article>
                <h3>Web Servers</h3>
                    <p>"Index" in the context of index.html refers to the default name of a website's <strong>home page</strong>.
                    The website in question is hosted on an Apache <strong>web server</strong>, which is also what OSU's Engineering server uses.
                    In the context of a <strong>URL</strong>, index.html may be considered part of the path of the URL that ultimately leads 
                    to the <strong>resource</strong> on the <strong>server</strong>. More specifically, index.html would be the name of the resource at the 
                    server. Within a URL, index.html would be considered both a <strong>URL</strong> and a <strong>URN</strong> when it stands alone.</p>
                    <p>When the file is accessed through the local computer, the request URL contains information regarding the 
                    hard drive and folder navigation to the index.html file. When the file is accessed through the ENGR server, 
                    the request URL becomes an <strong>HTTPS</strong> request formatted similar to what we have learned in this module. Therefore,
                    the response headers for each request are different as well. The response for the request from the local drive
                    simply reports the content-type and last-modified information. The response for the HTTPS request has much 
                    more information included and follows the format of an HTTP response. There are additional files included under 
                    "Name" with the HTTP request: executor.js and favicon.</p>
                    <p>The favicon has a <strong>status</strong> of 200 because it was successfully accessed when requested. This is because the OSU
                    server automatically provides it upon request. Main.css and main.js display 404 Not Found because the current
                    file is only .html. I have not added any <strong>CSS (Cascading Style Sheet)</strong> or <strong>JS (Javascript)</strong> code yet, so these files
                    do not exist in the a1-collikel folder.</p>
                    <p>My URL is https://web.engr.oregonstate.edu/~collikel/a1-collikel/. The <strong>scheme</strong> of my URL is https. The server name (AKA host name) is oregonstate.edu. 
                    The <strong>subdomain</strong> is appended to the <strong>hostname</strong> and is web.engr in this example. The <strong>path</strong> to the resource is /~collikel/a1-collikel/. </p>
            </article>
            <article>
                <h3>Frontend Design</h3>
                    <p><strong>Frontend design</strong> is centered around what the user experiences while using the webpage. It encompasses concepts including 
                    visual design of the page, including colors and font schemes, the layout of the page, and interactive components.
                    The goal for frontend design is a webpage that is appealing to the user, so they are motivated to return for another
                    experience. <strong>Usability</strong> is a common measure to determine the quality of a user's experience with a webpage.</p>
                    <dl><strong>The Five E's of Usability</strong></dl>
                        <dt><strong>Effective</strong></dt>
                        <dd>Users can meet their goal(s).</dd>
                        <dt><strong>Efficient</strong></dt>
                        <dd>Users can perform tasks as quickly as possible with the least number of steps.</dd>
                        <dt><strong>Easy to navigate</strong></dt>
                        <dd>Users can understand how to locate their goal through page navigation that is easy to remember.</dd>
                        <dt><strong>Error-free</strong></dt>
                        <dd>Users can avoid accessibility and availability issues created by common errors.</dd>
                        <dt><strong>Enjoyable</strong></dt>
                        <dd>Users find the content to be engaging and tailored to their unique needs.</dd>
                    <p><strong>Page layout tags</strong> are an important part of frontend design and contributes to a hierarchical organization of the content-type
                    within a webpage. Utilizing page layout tags help the user to visually navigate a single page to locate information of interest. 
                    Additionally, the "nav" tag can assist the user in navigating through the entire website. Other tags include "header", "main", 
                    "section", "article", "aside", "figure", "div", and more.</p>
                    <p><strong>Anchors</strong> can link to specific portions of a page and, consequently, assist with more precise navigation on a single webpage and through
                    an entire website. Placing an anchor element in a specific location of a page allows the user to jump to that location instead of being
                    simply redirected to the top of the page. This improves usability through efficient and precise navigation. Anchors may be considered
                    as a subdomain of navigation. Navigation generally refers to movement within a website, while anchors are used on a smaller
                    aspect--navigating between location to location on a single page rather than between page to page within a website.</p>
            </article>
        </>
    );
}
export default Topics;