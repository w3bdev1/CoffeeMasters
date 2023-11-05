export default {
    init: function () {
        document.querySelectorAll("a.navlink").forEach(a => {
            a.addEventListener('click', (event) => {
                event.preventDefault();
                const url = a.getAttribute("href");
                this.go(url);
            });
        });

        window.addEventListener("popstate", (event) => {
            this.go(event.state.route, false);
        });

        this.go(location.pathname);
    },
    go: (route, saveHistory = true) => {
        console.log(`Going to ${route}`);

        if (saveHistory) {
            history.pushState({ route }, null, route);
        }

        let pageElement = null;
        switch (route) {
            case "/":
                pageElement = document.createElement("h1");
                pageElement.textContent = "Menu";
                break;
            case "/order":
                pageElement = document.createElement("h1");
                pageElement.textContent = "Your Order";
                break;
            default:
                if (route.startsWith("/products-")) {
                    const paramId = route.substring(route.lastIndexOf("-") + 1);
                    pageElement.dataset.id = paramId;
                }
                break;
        }

        if (pageElement) {
            const mainEl = document.querySelector("main");
            mainEl.children[0]?.remove();
            mainEl.appendChild(pageElement);
            window.scrollX = 0;
            window.scrollY = 0;
        }
    }
};