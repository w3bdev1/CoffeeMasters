export default {
    init: function () {
        document.querySelectorAll("a.navlink").forEach(a => {
            a.addEventListener('click', (event) => {
                event.preventDefault();
                const url = a.href;
                this.go(url);
            });
        });

        this.go(location.pathname);
    },
    go: (route, saveHistory = true) => {
        console.log(`Going to ${route}`);

        if (saveHistory) {
            history.pushState({ route }, null, route);
        }
    }
};