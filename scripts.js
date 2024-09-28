function getOption() {
    selectElement = document.querySelector('.selectOption');
    output = selectElement.value;
    document.querySelector('.output').textContent = output;
}