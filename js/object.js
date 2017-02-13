var test = localStorage.getItem('myTest');
test = JSON.parse(test);
window.onload = createHTML();
function createHTML() {
    var parent = document.body;
    var wrapper = document.createElement('div');
    wrapper.className = "wrapper";
    parent.appendChild(wrapper);
    var form = document.createElement('form');
    form.className = "testForm";
    var header = document.createElement('h1');
    header.appendChild(document.createTextNode('This is simple test'));
    form.appendChild(header);
    wrapper.appendChild(form);

    function createBlock(object, name) {
        var header = document.createElement('h3');
        header.appendChild(document.createTextNode(name));
        form.appendChild(header);
        for (var key in object){
            var label = document.createElement('label');
            var input = label.appendChild(document.createElement('input'));
            var text = object[key];
            input.setAttribute('type', 'radio');
            input.setAttribute('name', name);
            input.setAttribute('value', object[key]);
            input.className = "test_answers";
            label.appendChild(document.createTextNode(text));
            form.appendChild(label);

        }
    }

    createBlock(test.section1, test.title1);
    createBlock(test.section2, test.title2);
    createBlock(test.section3, test.title3);
    var submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'button');
    submitBtn.setAttribute('name', 'button');
    submitBtn.setAttribute('id', 'submit');
    submitBtn.className = "submit";
    submitBtn.appendChild(document.createTextNode('Check my Answers!'));
    form.appendChild(submitBtn);

}
