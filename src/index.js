/** GENERAL FEEDBACK:
 *
 */

const handleSubmit = (event) => {
    event.preventDefault()
};

const form = e.target;
console.log("The actual input element (or node list if it's a radio group)", form.username)
console.log('The final computed value', form.username.value)

const formData = new FormData(e.target);
const { username } = Object.fromEntries(formData);

console.log('The final computed value', username)