// Search Button here
const searchBtn = document.getElementById('search-btn');
// console.log(searchBtn);

// click search button handle function
searchBtn.addEventListener('click', function (event) {
    event.preventDefault();
    // Get search input field here
    const searchFood = document.getElementById('search-food');
    // console.log(searchFood);
    const searchValue = searchFood.value;
    // console.log(searchValue);
    searchFood.value = '';
    if (searchValue) {
        // GET API FROM MEALS DB
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
            .then(res => res.json())
            .then(data => displayFood(data.meals))
    } else {
        // alert('Please Valid Input')
        const inputValid = document.getElementById('input-valid')
        inputValid.innerText = 'Please Valid Input Field !'
    }
});

const displayFood = meals => {
    const container = document.getElementsByClassName('container')[0];
    container.textContent = '';
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('border-1', 'shadow-lg', 'rounded-lg');
        div.innerHTML = `
            <div onclick="loadSingleDetails(${meal.idMeal})">
                <img src=${meal.strMealThumb}>
                <div class='p-3'>
                    <h3 class='font-bold text-2xl'>${meal.strMeal}</h3>
                    <p>${meal.strInstructions.slice(0, 180) + ' ...'}</p>
                </div>
            </div>
        `;
        // div.textContent = '';
        container.appendChild(div);
    })
};

// single food details 
const loadSingleDetails = idMeal => {
    // console.log(idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayMealsDetails(data.meals))
};
// Meal Details function handle
const displayMealsDetails = meal => {
    // console.log(meal);
    if (meal) {
        // window.location.href = 'meal.html';
        // window.open('meal.html', '_blank');
        const mealContainer = document.getElementById('meal-container');
        mealContainer.textContent = '';
        for (mealLoad of meal) {
            const div = document.createElement('div');
            div.classList.add('w-full', 'shadow-lg', 'rounded-lg', 'p-3');
            div.innerHTML = `
                <div class='flex flex-row'>
                <div class='basis-2/4'>
                    <img src=${mealLoad.strMealThumb}>
                </div>
                <div class='basis-1/4 p-4' >
                    <h3 class='font-bold text-1xl capitalize' >${mealLoad.strMeal}</h3>
                    <ul>
                        <li>${mealLoad.strArea}</li>
                        <li>${mealLoad.strCategory}</li>
                        <li>${mealLoad.strIngredient1}</li>
                        <li>${mealLoad.strIngredient2}</li>
                        <li>${mealLoad.strIngredient3}</li>
                        <li>${mealLoad.strIngredient4}</li>
                        <li>${mealLoad.strIngredient5}</li>
                        <li>${mealLoad.strIngredient6}</li>
                        <li>${mealLoad.strIngredient7}</li>
                        <li>${mealLoad.strIngredient8}</li>
                        <li>${mealLoad.strIngredient9}</li>
                        <li>${mealLoad.strIngredient10}</li>
                        <li>${mealLoad.strIngredient11}</li>
                        <li>${mealLoad.strIngredient12}</li>
                        <li>${mealLoad.strIngredient13}</li>
                        <li>${mealLoad.strIngredient14}</li>
                        <li>${mealLoad.strIngredient15}</li>
                        <li>${mealLoad.strIngredient16}</li>
                    </ul>
                </div>
                </div>
            `;
            mealContainer.appendChild(div);
        };

    }
}