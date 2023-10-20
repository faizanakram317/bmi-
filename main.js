let button = document.getElementById("btn");
button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status = false, weight_status = false;

    if (height === '' || isNaN(height) || (height <= 0)) {
        document.getElementById('height_error').innerHTML = "Please Enter a valid Height";
    } else {
        document.getElementById('height_error').innerHTML = "";
        height_status = true;
    }

    if (weight === '' || isNaN(weight) || (weight <= 0)) {
        document.getElementById('weight_error').innerHTML = 'Please Provide a valid Weight';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    //formula for check bmi
    if (height_status && weight_status) {
        const bmi = (weight / ((height * height) / 10000)).toFixed(1);

        if (bmi < 18.5) {
            result.innerHTML = 'Under Weight : ' + bmi;
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            result.innerHTML = 'Normal Weight : ' + bmi;
        }
        else if (bmi >= 24.9 && bmi <= 29.9) {
            result.innerHTML = 'Normal Weight : ' + bmi;
        }
        else {
            result.innerHTML = 'Over Weight : ' + bmi;
        }
    }
    else {
        alert('The form has an Error');
        result.innerHTML = '';
    }
});