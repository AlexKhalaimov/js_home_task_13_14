
var test = localStorage.getItem('myTest');
test = JSON.parse(test);
var submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', checkAnswers);

var ul;
var div;
var userAnsw = [];
var mychecking = [];
var resetBtn;
var overlay;
var li;
var parent = document.querySelector(".wrapper");
function checkAnswers(){
        var inputs = document.getElementsByClassName('test_answers');

            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].type=="radio" && inputs[i].checked){

                        var value = inputs[i].value;
                     userAnsw.push(value);
                }
            }

            for (var k = 0; k < test.correct.length; k++) {
                var  checking = userAnsw[k] === test.correct[k];
                    if (checking === true) {
                        mychecking.push('correct');
                    }
                    else {
                        mychecking.push('incorrect');
                    }
            }

            function showResult(){
                div = document.createElement('div');
                div.className = "modal";
                ul = document.createElement('ul');
                overlay = document.createElement('div');
                parent.appendChild(overlay);
                overlay.className = "overlay";

               for (var i = 0; i < mychecking.length; i++) {
                   li = document.createElement('li');
                   li.appendChild(document.createTextNode('Question'+ ' ' + (i+1) + ' ' + 'Your answer is' + ' ' + mychecking[i]));
                   ul.appendChild(li);
               }

               div.appendChild(ul);
               parent.appendChild(div);
               resetBtn = document.createElement('button');
               resetBtn.setAttribute('type', 'button');
               resetBtn.setAttribute('name', 'btnStart');
               resetBtn.appendChild(document.createTextNode('Close'));
               resetBtn.className = "reset";
               resetBtn.addEventListener('click', resetResult);
               div.appendChild(resetBtn);
            }

            function resetResult() {
                mychecking.splice(0, (mychecking.length + 1));
                userAnsw.splice(0, (userAnsw.length + 1));

                    for (var i = 0; i < inputs.length; i++) {
                    if (inputs[i].type=="radio" && inputs[i].checked){
                            inputs[i].checked=false;

                    }
                }

                div.removeChild(resetBtn);
                parent.removeChild(overlay);
                parent.removeChild(div);
            }

            showResult();


}
