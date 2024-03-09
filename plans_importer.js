const plansContainer = document.querySelector("#plans");

function formatNumber(number) {
    // Eliminamos cualquier caracter no numérico
    number = String(number).replace(/\D/g, "");

    // Si no hay decimales, establecemos 0
    const decimals = 2;
    number = Number(number).toFixed(decimals);

    // Reemplazamos el punto decimal por una coma
    number = number.replace(".", ",");

    // Agregamos los puntos de los miles
    number = number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return number;
}

/**
 * 
 * @param {string} domain 
 * @param {number} initialPrice 
 * @param {number} price 
 * @returns {HTMLElement}
 */
function createPlan(domain, initialPrice, price) {

    if (!domain.startsWith(".")) {
        domain = "." + domain;
    }

    const plan = document.createElement("div");
    const planDomain = document.createElement("span");
    const initialPriceText = document.createElement("span");
    const planInitialPrice = document.createElement("span");
    const priceText = document.createElement("span");
    const planPrice = document.createElement("span");

    plan.classList.add("plan");
    planDomain.classList.add("plan_domain");
    initialPriceText.classList.add("initial_price_text");
    planInitialPrice.classList.add("plan_initial_price");
    priceText.classList.add("price_text");
    planPrice.classList.add("plan_price");

    planDomain.textContent = domain;
    initialPriceText.textContent = "Pago inicial"
    planInitialPrice.textContent = "$ " + formatNumber(initialPrice);
    priceText.textContent = "Pago mensual"
    planPrice.textContent = "$ " + formatNumber(price);

    function appendChildren(parent) {
        for (let index = 1; index < arguments.length; index++) {
            const element = arguments[index];
            parent.appendChild(element);
        }
    }

    appendChildren(
        plan,
        planDomain,
        initialPriceText,
        planInitialPrice,
        priceText,
        planPrice
    );
    if (plansContainer !== null) {
        appendChildren(plansContainer, plan);
    }
    return plan;
}

createPlan(".com", 60000, 48000);
createPlan(".online", 45900, 54000);
createPlan(".net", 82000, 48000);
createPlan(".shop", 45900, 54000);
createPlan(".pro", 54000, 51000);
createPlan(".xyz", 50000, 47000);
createPlan(".io", 202000, 59000);
createPlan(".cloud", 46000, 49000);