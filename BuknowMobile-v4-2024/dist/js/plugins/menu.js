class Menu {
    constructor() {
        this.menu = document.querySelector('.menu-dropdown');
        this.overlay = document.querySelector('.overlay');
        this.indexWrapper = document.querySelector('.index-wrapper');
        this.menuHeight = 0;
    }

    init() {
        const self = this;
        document.getElementById('nav-menu').addEventListener('click', function(e) {
            e.stopPropagation(); // 阻止冒泡

            if (self.overlay.classList.contains('hide')) {
                self.openMenu();
            } else {
                self.closeMenu();
            }
        });

        const menuLinks = self.menu.querySelectorAll('a');
        self.menuHeight = menuLinks[0].offsetHeight * menuLinks.length;

        self.overlay.addEventListener('click', self.closeMenu.bind(self));

        window.addEventListener('scroll', function() {
            if (window.scrollY > 20) {
                self.indexWrapper.classList.add('h-sticky');
            } else {
                // 如果菜单已经打开，并且页面往上滚动距离小于20px，不移除紫色背景
                if (!self.overlay.classList.contains('hide') && self.indexWrapper.classList.contains('h-sticky')) {
                    return false;
                }
                self.indexWrapper.classList.remove('h-sticky');
            }
        });
    }

    openMenu() {
        this.overlay.classList.remove('hide');
        this.menu.style.height = this.menuHeight + 'px';

        // 打开菜单时如果头部为透明背景，添加紫色背景。
        if (!this.indexWrapper.classList.contains('h-sticky') && window.scrollY <= 20) {
            this.indexWrapper.classList.add('h-sticky');
        }
    }

    closeMenu() {
        this.overlay.classList.add('hide');
        
        // 关闭菜单时如果头部为紫色背景并且页面往上滚动距离小于20px,移除紫色背景
        if (this.indexWrapper.classList.contains('h-sticky') && window.scrollY <= 20) {
            this.indexWrapper.classList.remove('h-sticky');
        }
        this.menu.style.height = '0px';
    }
}

export default Menu;