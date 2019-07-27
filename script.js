function addOne() {
    let display = document.getElementById('box-form-display').value;
    let transformDisplayToNumber = Number(display);
    let addOne = transformDisplayToNumber + 1;
    document.getElementById('box-form-display').value=addOne;
}

function removeOne() {
    let display = document.getElementById('box-form-display').value;
    let transformDisplayToNumber = Number(display);
    if(transformDisplayToNumber == 0) {
        document.getElementById('box-form-display').value=0;
    }else{
        let removeOne = transformDisplayToNumber - 1;
        document.getElementById('box-form-display').value=removeOne;
    }
}

function submitForm() {
    let buttonSubmit = document.querySelector('#box-footer-submit');
    document.getElementById('box-footer-p').innerHTML = "Formulário enviado com sucesso!";
}