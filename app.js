document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const phone = document.getElementById("phone").value;

    const orderTypes = [];
    document
      .querySelectorAll('input[name="orderType"]:checked')
      .forEach((checkbox) => {
        orderTypes.push(checkbox.value);
      });

    
    const orderOption = document.querySelector(
      'input[name="orderOption"]:checked'
    ).value;

    
    const order = {
      fullName,
      password,
      dob,
      gender,
      phone,
      orderTypes,
      orderOption,
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];


    orders.push(order);


    localStorage.setItem("orders", JSON.stringify(orders));

    const outputDiv = document.getElementById("orderDetails");
    outputDiv.innerHTML = `
        <h3>Order Details:</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Order Type:</strong> ${orderTypes.join(", ")}</p>
        <p><strong>Order Option:</strong> ${orderOption}</p>
    `;
  });
