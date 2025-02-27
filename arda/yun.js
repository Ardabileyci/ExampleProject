(() => {
    'use strict';

    const buildCSS = () => {
        const customCss =
        `.ins-custom-wrapper {
            display: flex;
            position: fixed;
            bottom: 50%;
            left: 50%;
            color: red;
            cursor: pointer;
        };
        .ins-custom-container {
            display: flex;
        }`;

        const styleElement = document.createElement('style');
        styleElement.innerHTML = customCss;
        document.head.appendChild(styleElement);
    };

    const buildHTML = () => {
        const outerHtml =
        `<div class="ins-custom-wrapper">
            <div class="ins-custom-container">
                arda bileyci
            </div>
            <div class="ins-custom-container">
                yunus temizel
            </div>
        </div>`

        Insider.dom('body').append(outerHtml);
    };

    const setEvents = () => {
        Insider.eventManager.once(`click.arda:`, `.ins-custom-container`, () => {
            alert('aasdasdasd');
        });
    };

    buildCSS();
    buildHTML();
    setEvents();
})();