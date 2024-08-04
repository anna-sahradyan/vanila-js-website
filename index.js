class SpecialHeader extends HTMLElement {
    connectedCallback() {
        fetch(`/html/header.html`).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            return response.text();
        }).then(data => {
            this.innerHTML = data;
        }).catch(err => {
            console.error('Error loading header:', err)
        })
    }

}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        fetch(`/html/footer.html`).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            return response.text();
        }).then(data => {
            this.innerHTML = data
        }).catch(err => {
            console.error('Error loading header:', err)
        })
    }
}
customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
