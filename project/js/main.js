alert("hello world");

function change($name) {
    $('h1').html($name + " the Title has been changed after 3 seconds of page load");
}

setTimeout(() => {
   change('pradeep');
}, 3000);