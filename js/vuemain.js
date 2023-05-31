let app = new Vue({
    el: '.salelotus',
    data: {
        showMain: false,
        showBlog: true,
        showBlogDetali: false,
    },
    methods: {
        goToMain() {
            this.showMain = true
            this.showBlog = false
            this.showBlogDetali = false
            this.showFooter = true
        },
        goToBlog() {
            this.showMain = false
            this.showBlog = true
            this.showBlogDetali = false
        },
        goToBlogDetali() {
            this.showMain = false
            this.showBlog = false
            this.showBlogDetali = true
        },

    }
}
);