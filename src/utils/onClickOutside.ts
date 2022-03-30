export function onClickOutside(document: Document, selector: string, callback: () => void) {
    document.addEventListener("click", function (event) {
        const target = event.target as Element;
        if (target?.closest(selector)) {
            return;
        }
        callback();
    });
}
