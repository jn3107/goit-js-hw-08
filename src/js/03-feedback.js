import throttle from 'lodash.throttle';

const storageKey = 'feedback-form-state';

const feedbackFormEl = document.querySelector('.feedback-form');
console.log(feedbackFormEl);

let formData = {};

feedbackFormEl.addEventListener('submit', onFormSubmit);
feedbackFormEl.addEventListener('input', throttle(onInput, 500));

onload();

function onload() {
    try {
        const data = localStorage.getItem(storageKey);
        if (!data)
            return;
        formData = JSON.parse(data);
        Object.entries(formData).forEach(([key, val]) => {
            feedbackFormEl.elements[key].value = val;
        });
    } catch (event) {
        console.log(event.message);
    }
};

function onInput(event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(storageKey, JSON.stringify(formData));
};

function onFormSubmit(event) {
    event.preventDefault();
    console.log(formData);

    formData = {};
    event.currentTarget.reset();
    localStorage.removeItem(storageKey);
};