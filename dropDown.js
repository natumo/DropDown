class DropDown {
    constructor(data) {

        this.buttonsClass = data.button;
        this.containerClass = data.container;
        this.contentClass = data.content;

        this.buttons = document.querySelectorAll(`.${this.buttonsClass}`)
        this.containers = document.querySelectorAll(`.${this.containerClass}`)
        this.contents = document.querySelector(`.${this.contentClass}`)

        this.addClickEvent()

    }

    open() {
        this.buttons.forEach((button) => {
            button.classList.add('active')
        });
        this.containers.forEach((container) => {
            container.classList.add('active')
        });
        this.setHeight(true);
    }

    close() {
        this.buttons.forEach((button) => {
            button.classList.remove('active')
        });
        this.containers.forEach((container) => {
            setTimeout(() => {
                container.classList.remove('active')
            }, 200);
        });
        this.setHeight(false);
    }

    setHeight(status = false) {
        this.containers.forEach((container) => {
            if (status)
                container.style.height = container.querySelector(`.${this.contentClass}`).offsetHeight + 'px';
            else
                container.style.height = '0px';
        });
    }

    addClickEvent() {
        this.buttons.forEach((button) => {
            button.addEventListener('click', () => {
                if (!button.classList.contains('active'))
                    this.open();
                else
                    this.close();
            });
        });
    }
}
