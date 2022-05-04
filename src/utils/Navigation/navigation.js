export const handleClickHash = (e, sectionId) => {
    e.preventDefault();

    // https://stackoverflow.com/questions/61196420/react-navigation-that-will-smooth-scroll-to-section-of-the-page

    let element = document.getElementById(sectionId);
    element && element.scrollIntoView({ behavior: "smooth", block: "start"});

};