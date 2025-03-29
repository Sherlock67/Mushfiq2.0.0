(function() {
    emailjs.init({
      publicKey: "FfDG2wmIWrZuFjhQx",
    });
})();


window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_5sk8orj', 'template_2ccvei7', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}