export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export const checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required && isValid) {
        isValid = value.trim() !== '';
    }

    if (rules.minLength && isValid) {
        isValid = value.length >= rules.minLength;
    }

    if (rules.maxLength && isValid) {
        isValid = value.length <= rules.minLength;
    }

    if (rules.isEmail && isValid) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value)
    }

    if (rules.isNumeric && isValid) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value)
    }

    return isValid;
}
