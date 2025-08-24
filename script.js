document.addEventListener("DOMContentLoaded", function() {

    // This function duplicates the sponsor logos to create a seamless, infinite scrolling effect.
    const scroller = document.querySelector(".scroller");

    if (scroller) {
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each logo, create a copy and add it to the end of the list.
        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    }

});